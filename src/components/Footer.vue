<template>
  <el-footer class="footer">
    <p>© {{ currentYear }} 在线工具集合. All rights reserved.</p>
  </el-footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.footer {
  background-color: #fff;
  text-align: center;
  padding: 20px;
  color: #909399;
  margin-top: 40px;
}
</style> 