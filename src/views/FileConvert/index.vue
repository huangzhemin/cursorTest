<template>
  <div class="file-convert">
    <Header />
    <div class="content">
      <h2>文件转换</h2>
      <el-upload
        class="upload-demo"
        drag
        action="/api/convert"
        :headers="headers"
        :data="uploadData"
        :on-success="handleSuccess"
        :on-error="handleError"
        :before-upload="beforeUpload"
      >
        <el-icon class="el-icon--upload"><upload-filled /></el-icon>
        <div class="el-upload__text">
          拖拽文件到此处或 <em>点击上传</em>
        </div>
        <template #tip>
          <div class="el-upload__tip">
            支持的格式：doc, docx, xls, xlsx, ppt, pptx
          </div>
        </template>
      </el-upload>

      <div class="format-select" v-if="showFormatSelect">
        <el-select v-model="targetFormat" placeholder="选择目标格式">
          <el-option label="PDF" value="pdf" />
          <el-option label="DOCX" value="docx" />
          <el-option label="XLSX" value="xlsx" />
        </el-select>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'
import { UploadFilled } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

export default {
  name: 'FileConvert',
  components: {
    Header,
    Footer,
    UploadFilled
  },
  data() {
    return {
      showFormatSelect: false,
      targetFormat: 'pdf',
      headers: {},
      uploadData: {
        format: 'pdf'
      }
    }
  },
  methods: {
    beforeUpload(file) {
      const ext = file.name.split('.').pop().toLowerCase()
      const supportedFormats = ['doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx']
      
      if (!supportedFormats.includes(ext)) {
        ElMessage.error('不支持的文件格式')
        return false
      }
      
      this.showFormatSelect = true
      this.uploadData.format = this.targetFormat
      return true
    },
    handleSuccess(response, file) {
      ElMessage.success('文件转换成功')
    },
    handleError(err) {
      ElMessage.error('文件转换失败')
    }
  },
  watch: {
    targetFormat(val) {
      this.uploadData.format = val
    }
  }
}
</script>

<style scoped>
.file-convert {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
  padding: 100px 20px 20px;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
}

h2 {
  text-align: center;
  margin-bottom: 40px;
  color: #303133;
}

.format-select {
  margin-top: 20px;
  text-align: center;
}

.el-upload__tip {
  color: #909399;
}
</style> 