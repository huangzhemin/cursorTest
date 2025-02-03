import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/file-convert',
    name: 'FileConvert',
    component: () => import('../views/FileConvert/index.vue')
  },
  {
    path: '/image-compress',
    name: 'ImageCompress',
    component: () => import('../views/ImageCompress/index.vue')
  },
  {
    path: '/image-crop',
    name: 'ImageCrop',
    component: () => import('../views/ImageCrop/index.vue')
  },
  {
    path: '/image-format',
    name: 'ImageFormat',
    component: () => import('../views/ImageFormat/index.vue')
  },
  {
    path: '/watermark',
    name: 'Watermark',
    component: () => import('../views/Watermark/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 