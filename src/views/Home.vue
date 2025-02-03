<template>
  <div class="home-container">
    <Header />
    
    <div class="content">
      <div class="welcome-section">
        <h1>欢迎使用在线工具集合</h1>
        <p>简单、高效的在线工具，助您轻松处理文件与图片</p>
      </div>

      <div class="tools-grid">
        <el-row :gutter="20">
          <el-col :span="8" v-for="tool in tools" :key="tool.path">
            <router-link :to="tool.path">
              <el-card class="tool-card" :body-style="{ padding: '0px' }">
                <div class="tool-icon">
                  <el-icon><component :is="tool.icon" /></el-icon>
                </div>
                <div class="tool-info">
                  <h3>{{ tool.name }}</h3>
                  <p>{{ tool.description }}</p>
                </div>
              </el-card>
            </router-link>
          </el-col>
        </el-row>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { Document, Picture, Crop, PictureFilled, Stamp } from '@element-plus/icons-vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    Document,
    Picture,
    Crop,
    PictureFilled,
    Stamp
  },
  data() {
    return {
      tools: [
        {
          name: '文件转换',
          description: '支持多种文件格式之间的转换',
          icon: 'Document',
          path: '/file-convert'
        },
        {
          name: '图片压缩',
          description: '在保持质量的同时减小图片体积',
          icon: 'Picture',
          path: '/image-compress'
        },
        {
          name: '图片裁剪',
          description: '自由裁剪图片尺寸和比例',
          icon: 'Crop',
          path: '/image-crop'
        },
        {
          name: '格式转换',
          description: '支持多种图片格式转换',
          icon: 'PictureFilled',
          path: '/image-format'
        },
        {
          name: '图片水印',
          description: '为图片添加文字或图片水印',
          icon: 'Stamp',
          path: '/watermark'
        }
      ]
    }
  }
}
</script>

<style scoped>
.home-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
  padding: 100px 20px 20px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.welcome-section {
  text-align: center;
  margin-bottom: 60px;
}

.welcome-section h1 {
  font-size: 36px;
  color: #303133;
  margin-bottom: 20px;
}

.welcome-section p {
  font-size: 18px;
  color: #606266;
}

.tools-grid {
  margin-top: 40px;
}

.tool-card {
  height: 200px;
  margin-bottom: 20px;
  transition: transform 0.3s;
  cursor: pointer;
}

.tool-card:hover {
  transform: translateY(-5px);
}

.tool-icon {
  background-color: #409EFF;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tool-icon .el-icon {
  font-size: 40px;
  color: #fff;
}

.tool-info {
  padding: 20px;
}

.tool-info h3 {
  margin: 0 0 10px;
  color: #303133;
}

.tool-info p {
  margin: 0;
  color: #606266;
  font-size: 14px;
}

a {
  text-decoration: none;
}
</style> 