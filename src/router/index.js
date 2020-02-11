import Vue from 'vue'
import VueRouter from 'vue-router'
import { About, Main, News, NewArticle, Article, Login } from '../views'
Vue.use(VueRouter)

const routes = [
  {
    name: 'Login',
    path: '/login',
    component: Login
  },
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
  },
  {
    name: 'Article',
    path: '/article/:id',
    component: Article
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
