<template>
  <div class="home">
    <div class="welcome-section">
      <h1 class="welcome-title">欢迎使用在线工具集合</h1>
      <p class="welcome-desc">简单、高效的在线工具，助您轻松处理文件与图片</p>
    </div>
    
    <div class="tools-grid">
      <router-link 
        v-for="tool in tools" 
        :key="tool.path" 
        :to="tool.path" 
        class="tool-wrapper">
        <el-card class="tool-card" shadow="hover">
          <div class="tool-icon">
            <i :class="tool.icon"></i>
          </div>
          <div class="tool-content">
            <h3>{{ tool.name }}</h3>
            <p>{{ tool.description }}</p>
            <el-button type="text" class="tool-link">
              立即使用 <i class="el-icon-arrow-right"></i>
            </el-button>
          </div>
        </el-card>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      tools: [
        {
          name: '文件转换工具',
          description: '支持PDF、Word、Excel等多种格式文件互转，快速转换各类文档',
          icon: 'el-icon-document',
          path: '/file-convert'
        },
        {
          name: '图片压缩工具',
          description: '智能压缩图片体积，保持画质清晰，支持批量处理',
          icon: 'el-icon-picture',
          path: '/image-compress'
        },
        {
          name: '图片裁剪工具',
          description: '自由裁剪图片尺寸，支持多种比例，满足不同场景需求',
          icon: 'el-icon-crop',
          path: '/image-crop'
        },
        {
          name: '图片格式转换',
          description: '支持JPG、PNG、WEBP等多种格式互转，满足各类应用需求',
          icon: 'el-icon-refresh',
          path: '/image-format'
        },
        {
          name: '图片水印工具',
          description: '添加自定义文字或图片水印，支持调整位置、透明度等',
          icon: 'el-icon-picture-outline',
          path: '/watermark'
        }
      ]
    }
  },
  mounted() {
    console.log('Home component mounted')
    console.log('Tools:', this.tools)
  }
}
</script>

<style scoped>
.home {
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: calc(100vh - 180px);
}

.welcome-section {
  text-align: center;
  margin-bottom: 50px;
  padding: 40px 0;
  background: linear-gradient(to right, #f8f9fa, #e9ecef);
  border-radius: 8px;
}

.welcome-title {
  font-size: 2.8em;
  color: #2c3e50;
  margin-bottom: 20px;
  font-weight: 600;
}

.welcome-desc {
  font-size: 1.3em;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin: 0 auto;
}

.tool-wrapper {
  text-decoration: none;
  color: inherit;
  display: block;
}

.tool-card {
  transition: all 0.3s ease;
  height: 100%;
  border: none;
  background: #fff;
  position: relative;
  overflow: hidden;
  margin: 0;
}

.tool-wrapper:hover .tool-card {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.tool-icon {
  margin-bottom: 20px;
  background: rgba(64, 158, 255, 0.1);
  padding: 20px;
  border-radius: 8px;
  display: inline-block;
}

.tool-icon i {
  font-size: 3em;
  color: #409EFF;
}

.tool-content {
  padding: 0 20px 20px;
}

.tool-content h3 {
  font-size: 1.4em;
  color: #2c3e50;
  margin: 15px 0;
  font-weight: 600;
}

.tool-content p {
  color: #666;
  font-size: 1em;
  line-height: 1.6;
  margin-bottom: 20px;
  min-height: 3.2em;
}

.tool-link {
  color: #409EFF;
  font-weight: 500;
  padding: 0;
}

.tool-link i {
  margin-left: 5px;
  transition: transform 0.3s ease;
}

.tool-wrapper:hover .tool-link i {
  transform: translateX(5px);
}

@media (max-width: 768px) {
  .home {
    padding: 20px;
  }

  .welcome-section {
    padding: 30px 20px;
    margin-bottom: 30px;
  }

  .welcome-title {
    font-size: 2em;
  }

  .welcome-desc {
    font-size: 1.1em;
  }

  .tools-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .tool-content p {
    min-height: auto;
  }
}

/* Safari 特定样式 */
@supports (-webkit-touch-callout: none) {
  .tool-card {
    will-change: transform;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
  
  .tool-wrapper:hover .tool-card {
    -webkit-transform: translateY(-5px) translateZ(0);
    transform: translateY(-5px) translateZ(0);
  }
}
</style> 