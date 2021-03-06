import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: {title: '后台首页', icon: 'dashboard'}
    }]
  },
  {
    path: '/article',
    component: Layout,
    name: 'Article',
    meta: {
      title: '文章',
      icon: 'form'
    },
    children: [
      {
        path: 'manage',
        name: 'ManageArticle',
        component: () => import('@/views/article/Manage'),
        meta: {title: '文章管理', icon: 'form'}
      },
      {
        path: 'publish',
        name: 'PublishArticle',
        component: () => import('@/views/article/Add'),
        meta: {title: '发布文章', icon: 'form'}
      },
      {
        path: 'draft',
        name: 'DraftArticle',
        component: () => import('@/views/article/Draft'),
        meta: {title: '草稿夹', icon: 'form'}
      }
    ]
  },
  {
    path: '/comment',
    component: Layout,
    children: [{
      path: 'index',
      component: () => import('@/views/comment/Index'),
      name: 'icons',
      meta: {title: '评论管理', icon: 'example'}
    }]
  },
  {
    path: '/tool',
    component: Layout,
    name: 'Tool',
    meta: {
      title: '工具',
      icon: 'tree'
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/tool/Skin'),
        name: 'Index',
        meta: {title: '偏好设置', icon: 'tree'}
      },
      {
        path: 'skin',
        component: () => import('@/views/tool/Skin'),
        name: 'Skin',
        meta: {title: '皮肤管理', icon: 'tree'}
      },
      {
        path: 'class',
        component: () => import('@/views/tool/Skin'),
        name: 'Class',
        meta: {title: '分类管理', icon: 'tree'}
      },
      {
        path: 'nav',
        component: () => import('@/views/tool/Skin'),
        name: 'Nav',
        meta: {title: '导航管理', icon: 'tree'}
      },
      {
        path: 'link',
        component: () => import('@/views/tool/Skin'),
        name: 'Link',
        meta: {title: '链接管理', icon: 'tree'}
      },
      {
        path: 'user',
        component: () => import('@/views/tool/Skin'),
        name: 'User',
        meta: {title: '用户管理', icon: 'tree'}
      },
      {
        path: 'plugin',
        component: () => import('@/views/tool/Skin'),
        name: 'Plugin',
        meta: {title: '插件管理', icon: 'tree'}
      },
      {
        path: 'others',
        component: () => import('@/views/tool/Skin'),
        name: 'Others',
        meta: {title: '其他', icon: 'tree'}
      },
    ]
  },
  {
    path: '/about',
    component: Layout,
    children: [{
      path: 'index',
      component: () => import('@/views/comment/Index'),
      name: 'About',
      meta: {title: '关于', icon: 'table'}
    }]
  },
  {path: '/login', component: () => import('@/views/login/index'), hidden: true},
  {path: '/404', component: () => import('@/views/404'), hidden: true},
  {path: '*', redirect: '/404', hidden: true}
]

const createRouter = () => new Router({
  mode: 'history',
  scrollBehavior: () => ({y: 0}),
  routes: constantRoutes
})

const router = createRouter()


export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
