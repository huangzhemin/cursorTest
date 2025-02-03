<template>
  <el-header class="header">
    <div class="logo">
      <router-link to="/">
        <h1>在线工具集合</h1>
      </router-link>
    </div>
    <el-menu
      mode="horizontal"
      :router="true"
      class="nav-menu"
    >
      <el-menu-item index="/file-convert">
        <el-icon><Document /></el-icon>
        文件转换
      </el-menu-item>
      <el-menu-item index="/image-compress">
        <el-icon><Picture /></el-icon>
        图片压缩
      </el-menu-item>
      <el-menu-item index="/image-crop">
        <el-icon><Crop /></el-icon>
        图片裁剪
      </el-menu-item>
      <el-menu-item index="/image-format">
        <el-icon><PictureFilled /></el-icon>
        格式转换
      </el-menu-item>
      <el-menu-item index="/watermark">
        <el-icon><Stamp /></el-icon>
        图片水印
      </el-menu-item>
    </el-menu>
  </el-header>
</template>

<script>
import { Document, Picture, Crop, PictureFilled, Stamp } from '@element-plus/icons-vue'

export default {
  name: 'Header',
  components: {
    Document,
    Picture,
    Crop,
    PictureFilled,
    Stamp
  }
}
</script>

<style scoped>
.header {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12);
  position: fixed;
  width: 100%;
  z-index: 999;
  display: flex;
  align-items: center;
  padding: 0 20px;
}

.logo {
  margin-right: 40px;
}

.logo a {
  text-decoration: none;
  color: #409EFF;
}

.logo h1 {
  margin: 0;
  font-size: 24px;
}

.nav-menu {
  border-bottom: none;
}

.el-menu-item {
  font-size: 16px;
}

.el-icon {
  margin-right: 5px;
}
</style> 