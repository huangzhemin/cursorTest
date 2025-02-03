import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'

Vue.use(ElementUI, { size: 'small' })
Vue.config.productionTip = false

// 添加错误处理
Vue.config.errorHandler = function(err, vm, info) {
  console.error('Vue error:', err)
  console.error('Error info:', info)
}

window.vm = new Vue({
  el: '#app',
  render: h => h(App)
}) 