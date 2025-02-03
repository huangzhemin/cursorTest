import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import router from './router'

Vue.use(ElementUI, { size: 'small' })
Vue.config.productionTip = false

// 添加错误处理
Vue.config.errorHandler = function(err, vm, info) {
  console.error('Vue error:', err)
  console.error('Error info:', info)
}

// 添加路由调试信息
router.beforeEach((to, from, next) => {
  console.log('Route change:', {
    from: from.path,
    to: to.path
  })
  next()
})

// 创建 Vue 实例
new Vue({
  router,
  render: h => h(App),
  mounted() {
    console.log('Vue app mounted')
    console.log('Current route:', this.$route.path)
  }
}).$mount('#app') 