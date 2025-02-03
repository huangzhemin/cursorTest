<template>
  <div class="tool-page">
    <div class="tool-container">
      <h1>图片裁剪</h1>
      <p class="description">自由裁剪图片尺寸，调整图片比例</p>

      <el-card class="upload-area">
        <el-upload
          class="upload-drop"
          drag
          action="#"
          :auto-upload="false"
          :on-change="handleFileChange"
          :multiple="false"
          accept="image/*">
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将图片拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">支持的图片格式：JPG, PNG, WEBP</div>
        </el-upload>

        <div class="crop-container" v-if="imageUrl">
          <div class="crop-preview">
            <img :src="imageUrl" ref="previewImage" />
          </div>

          <div class="crop-options">
            <el-form label-position="top">
              <el-form-item label="裁剪比例">
                <el-radio-group v-model="aspectRatio">
                  <el-radio-button label="free">自由</el-radio-button>
                  <el-radio-button label="1:1">1:1</el-radio-button>
                  <el-radio-button label="4:3">4:3</el-radio-button>
                  <el-radio-button label="16:9">16:9</el-radio-button>
                </el-radio-group>
              </el-form-item>

              <el-form-item label="旋转">
                <el-button-group>
                  <el-button icon="el-icon-refresh-left" @click="rotate(-90)">向左旋转</el-button>
                  <el-button icon="el-icon-refresh-right" @click="rotate(90)">向右旋转</el-button>
                </el-button-group>
              </el-form-item>
            </el-form>

            <el-button type="primary" @click="handleCrop">裁剪并下载</el-button>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageCrop',
  data() {
    return {
      imageUrl: '',
      aspectRatio: 'free',
      rotation: 0
    }
  },
  methods: {
    handleFileChange(file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        this.imageUrl = e.target.result
      }
      reader.readAsDataURL(file.raw)
    },
    rotate(degree) {
      this.rotation = (this.rotation + degree) % 360
      // 实现旋转逻辑
    },
    handleCrop() {
      // 实现裁剪逻辑
      console.log('Cropping image with ratio:', this.aspectRatio)
      console.log('Rotation:', this.rotation)
      
      this.$message({
        message: '图片裁剪功能即将上线',
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

.crop-container {
  margin-top: 30px;
}

.crop-preview {
  max-width: 100%;
  margin-bottom: 20px;
  text-align: center;
}

.crop-preview img {
  max-width: 100%;
  max-height: 500px;
}

.crop-options {
  text-align: center;
}

.el-form {
  max-width: 400px;
  margin: 0 auto 20px;
}

.el-radio-group {
  margin-bottom: 15px;
}

.el-button-group {
  margin-bottom: 15px;
}
</style> 