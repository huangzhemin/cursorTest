<template>
  <div class="tool-page">
    <div class="tool-container">
      <h1>图片格式转换</h1>
      <p class="description">快速转换图片格式，支持多种格式互转</p>

      <el-card class="upload-area">
        <el-upload
          class="upload-drop"
          drag
          action="#"
          :auto-upload="false"
          :on-change="handleFileChange"
          :multiple="true"
          accept="image/*">
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将图片拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">支持的图片格式：JPG, PNG, WEBP, GIF, BMP</div>
        </el-upload>

        <div class="convert-options" v-if="fileList.length > 0">
          <el-form label-position="top">
            <el-form-item label="目标格式">
              <el-radio-group v-model="targetFormat">
                <el-radio-button label="jpg">JPG</el-radio-button>
                <el-radio-button label="png">PNG</el-radio-button>
                <el-radio-button label="webp">WEBP</el-radio-button>
                <el-radio-button label="gif">GIF</el-radio-button>
                <el-radio-button label="bmp">BMP</el-radio-button>
              </el-radio-group>
            </el-form-item>

            <el-form-item label="质量设置" v-if="targetFormat === 'jpg' || targetFormat === 'webp'">
              <el-slider
                v-model="quality"
                :step="1"
                :min="1"
                :max="100"
                :format-tooltip="formatQuality">
              </el-slider>
            </el-form-item>
          </el-form>

          <el-button type="primary" @click="handleConvert">开始转换</el-button>
        </div>

        <div class="file-list" v-if="fileList.length > 0">
          <h3>待处理文件</h3>
          <el-table :data="fileList" style="width: 100%">
            <el-table-column prop="name" label="文件名"></el-table-column>
            <el-table-column prop="format" label="原格式" width="100">
              <template slot-scope="scope">
                {{ getFileFormat(scope.row.name).toUpperCase() }}
              </template>
            </el-table-column>
            <el-table-column prop="size" label="大小" width="120">
              <template slot-scope="scope">
                {{ formatSize(scope.row.size) }}
              </template>
            </el-table-column>
            <el-table-column label="操作" width="120">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleRemove(scope.$index)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageFormat',
  data() {
    return {
      fileList: [],
      targetFormat: 'jpg',
      quality: 80
    }
  },
  methods: {
    handleFileChange(file) {
      this.fileList.push(file)
    },
    handleRemove(index) {
      this.fileList.splice(index, 1)
    },
    formatQuality(val) {
      return val + '%'
    },
    formatSize(bytes) {
      if (bytes === 0) return '0 B'
      const k = 1024
      const sizes = ['B', 'KB', 'MB', 'GB']
      const i = Math.floor(Math.log(bytes) / Math.log(k))
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
    },
    getFileFormat(filename) {
      return filename.split('.').pop().toLowerCase()
    },
    handleConvert() {
      // 实现格式转换逻辑
      console.log('Converting images to:', this.targetFormat)
      console.log('Quality:', this.quality)
      console.log('Files:', this.fileList)
      
      this.$message({
        message: '图片格式转换功能即将上线',
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
  max-width: 400px;
  margin: 0 auto 20px;
}

.el-radio-group {
  margin-bottom: 15px;
}

.file-list {
  margin-top: 30px;
}

.file-list h3 {
  margin-bottom: 15px;
  color: #2c3e50;
}
</style> 