import Vue from 'vue'
import Router from 'vue-router'
import ArticleList from '../components/ArticleList/ArticleList.vue'
import Article from '../components/Article/Article.vue'
import User from '../components/User/User.vue'
import Login from '../components/Login/Login.vue'
import NewArticle from '../components/NewArticle/NewArticle.vue'
import Msg from '../components/Msg/Msg.vue'

Vue.use(Router)

const routes = [
    {
      path: '/',
      name: 'ArticleList',
      component: ArticleList
    },
    {
      path: '/articleList/:tab',
      name: 'ArticleListTab',
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
    },
    {
      path: '/login',
      name: 'Login',
      components: {
        login: Login
      } 
    },
    {
      path: '/newArticle',
      name: 'NewArticle',
      components: {
        newArticle: NewArticle
      } 
    },
    {
      path: '/msg',
      name: 'Msg',
      components: {
        msg: Msg
      } 
    },


  ];

const router =  new Router({
    routes
})


export {
  router,
  routes
}