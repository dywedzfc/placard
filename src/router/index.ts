import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import { TUIComponents, ElementUIComponents } from './modules'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/',
    name: '首页',
    component: () => import('views/Index.vue'),
    // redirect: { path: '/yxgb', name: '优秀年轻干部报表' },
    children: [
      // { path: '', name: '', component: () => import('') }
    ],
  },
  {
    path: '/t-ui',
    name: '组件',
    component: () => import('views/t-ui/Component.vue'),
    redirect: { path: '/t-ui/installation', name: '安装' },
    children: TUIComponents,
  },
  {
    path: '/element-ui',
    name: '组件',
    component: () => import('views/element-ui/Component.vue'),
    redirect: { path: '/element-ui/installation', name: 'E安装' },
    children: ElementUIComponents,
  },
]

const router = new VueRouter({
  routes,
})

export default router
