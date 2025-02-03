const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const docxToPdf = require('docx-pdf');
const { PDFDocument } = require('pdf-lib');

const app = express();
const port = process.env.PORT || 3000;

// 中间件
app.use(cors());
app.use(express.json());

// 创建上传目录
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// 文件上传配置
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024 // 限制10MB
  }
});

// 文件转换路由
app.post('/api/convert', upload.single('file'), async (req, res) => {
  try {
    const { file } = req;
    const targetFormat = req.body.format || 'pdf';

    if (!file) {
      return res.status(400).json({ error: '没有上传文件' });
    }

    const inputPath = file.path;
    const outputPath = path.join(uploadDir, `${Date.now()}.${targetFormat}`);

    const ext = path.extname(file.originalname).toLowerCase();
    const supportedFormats = ['.doc', '.docx'];

    if (!supportedFormats.includes(ext)) {
      fs.unlink(inputPath, () => {});
      return res.status(400).json({ error: '不支持的文件格式' });
    }

    // 转换文件
    await new Promise((resolve, reject) => {
      docxToPdf(inputPath, outputPath, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    // 返回转换后的文件
    res.download(outputPath, `converted.${targetFormat}`, (err) => {
      // 清理临时文件
      fs.unlink(inputPath, () => {});
      fs.unlink(outputPath, () => {});
      
      if (err) {
        console.error('文件下载错误:', err);
      }
    });
  } catch (error) {
    console.error('文件转换错误:', error);
    // 确保清理上传的文件
    if (req.file) {
      fs.unlink(req.file.path, () => {});
    }
    res.status(500).json({ error: '文件转换失败' });
  }
});

// 错误处理中间件
app.use((err, req, res, next) => {
  console.error(err.stack);
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ error: '文件大小超过限制' });
    }
    return res.status(400).json({ error: '文件上传错误' });
  }
  res.status(500).json({ error: '服务器内部错误' });
});

// 启动服务器
app.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}`);
  console.log(`上传目录: ${uploadDir}`);
}); 