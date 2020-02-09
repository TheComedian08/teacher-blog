import Vue from 'vue'
import VueRouter from 'vue-router'
import { About, Main, News, NewArticle } from '../views'
Vue.use(VueRouter)

const routes = [
  {
    name: 'Main',
    path: '/',
    component: Main
  },
  {
    name: 'New article',
    path: '/create',
    component: NewArticle
  },
  {
    name: 'News',
    path: '/news',
    component: News
  },
  {
    name: 'About',
    path: '/about',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
