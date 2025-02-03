<template>
  <div class="tool-page">
    <div class="tool-container">
      <h1>文件转换</h1>
      <p class="description">支持多种格式文件转换，快速高效</p>

      <el-card class="upload-area">
        <el-upload
          class="upload-drop"
          drag
          action="#"
          :auto-upload="false"
          :on-change="handleFileChange"
          :multiple="false">
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">支持的文件格式：PDF, DOC, DOCX, XLS, XLSX</div>
        </el-upload>

        <div class="convert-options" v-if="selectedFile">
          <el-form label-position="top">
            <el-form-item label="目标格式">
              <el-select v-model="targetFormat" placeholder="请选择目标格式">
                <el-option label="PDF" value="pdf"></el-option>
                <el-option label="DOC" value="doc"></el-option>
                <el-option label="DOCX" value="docx"></el-option>
                <el-option label="XLS" value="xls"></el-option>
                <el-option label="XLSX" value="xlsx"></el-option>
              </el-select>
            </el-form-item>
          </el-form>

          <el-button type="primary" @click="handleConvert">开始转换</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FileConvert',
  data() {
    return {
      selectedFile: null,
      targetFormat: ''
    }
  },
  methods: {
    handleFileChange(file) {
      this.selectedFile = file
    },
    handleConvert() {
      // 实现文件转换逻辑
      console.log('Converting file:', this.selectedFile)
      console.log('Target format:', this.targetFormat)
      
      this.$message({
        message: '文件转换功能即将上线',
        type: 'info'
      })
    }
  }
}
</script>

<style scoped>
.tool-page {
  padding: 40px 20px;
}

.tool-container {
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  font-size: 2em;
  color: #2c3e50;
  margin-bottom: 10px;
  text-align: center;
}

.description {
  text-align: center;
  color: #666;
  margin-bottom: 30px;
}

.upload-area {
  padding: 30px;
}

.upload-drop {
  text-align: center;
}

.convert-options {
  margin-top: 20px;
  text-align: center;
}

.el-form {
  max-width: 300px;
  margin: 0 auto 20px;
}
</style> 