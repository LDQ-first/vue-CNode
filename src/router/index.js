import Vue from 'vue'
import Router from 'vue-router'
import ArticleList from '../components/ArticleList/ArticleList.vue'
import Article from '../components/Article/Article.vue'
import User from '../components/User/User.vue'

Vue.use(Router)

const routes = [
    {
      path: '/',
      name: 'ArticleList',
      component: ArticleList
    },
    {
      path: '/article/:id',
      name: 'Article',
      component: Article
    },
    {
      path: '/user/:name?',
      name: 'User',
      component: User
    }
  ];

const router =  new Router({
    routes
})


export {
  router,
  routes
}