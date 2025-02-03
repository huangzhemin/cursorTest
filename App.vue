<template>
  <div class="app">
    <h1>在线工具集合</h1>
    <p>简单高效的文件处理工具</p>
    <el-button type="primary">测试按钮</el-button>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    console.log('App component created')
  },
  mounted() {
    console.log('App component mounted')
  }
}
</script>

<style>
.app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

h1 {
  font-size: 2.5em;
  color: #2c3e50;
  margin-bottom: 20px;
}

p {
  font-size: 1.2em;
  color: #666;
  margin-bottom: 40px;
}
</style> 