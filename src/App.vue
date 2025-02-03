<template>
  <div class="app">
    <header class="header">
      <div class="logo" @click="$router.push('/')">在线工具集合</div>
      <nav class="nav">
        <el-menu mode="horizontal" :router="true" :default-active="$route.path">
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/file-convert">文件转换</el-menu-item>
          <el-menu-item index="/image-compress">图片压缩</el-menu-item>
          <el-menu-item index="/image-crop">图片裁剪</el-menu-item>
          <el-menu-item index="/image-format">格式转换</el-menu-item>
          <el-menu-item index="/watermark">图片水印</el-menu-item>
        </el-menu>
      </nav>
      <div class="user">
        <el-button type="text">登录</el-button>
        <el-button type="primary">注册</el-button>
      </div>
    </header>

    <router-view class="main"></router-view>

    <footer class="footer">
      <p>&copy; 2024 在线工具集合. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    // 确保路由正确加载
    console.log('Current route:', this.$route.path)
  }
}
</script>

<style>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo {
  font-size: 1.5em;
  font-weight: bold;
  color: #409EFF;
  cursor: pointer;
  padding: 10px 0;
}

.nav {
  flex: 1;
  margin: 0 40px;
}

.nav .el-menu {
  border-bottom: none;
}

.nav .el-menu-item {
  font-size: 1.1em;
}

.user {
  display: flex;
  gap: 10px;
}

.main {
  flex: 1;
  width: 100%;
  background: #f5f7fa;
}

.footer {
  text-align: center;
  padding: 20px;
  background-color: #f8f9fa;
  margin-top: auto;
}

/* 全局样式 */
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #f5f7fa;
}

* {
  box-sizing: border-box;
}

/* Safari 特定样式 */
@supports (-webkit-touch-callout: none) {
  .tool-card {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
  
  .tool-card:hover {
    -webkit-transform: translateY(-5px) translateZ(0);
    transform: translateY(-5px) translateZ(0);
  }
}
</style> 