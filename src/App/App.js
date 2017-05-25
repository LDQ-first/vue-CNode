
import '../lib/dynamicRem.js'
import store from '../store/index'
import { router, routes } from '../router/index.js'
/*import Vue from 'vue'
import axios from 'axios'
Vue.use(axios);*/

import Topbar from '../components/Topbar/Topbar.vue'
import AsideMenu from  '../components/AsideMenu/AsideMenu.vue'
import NContent from '../components/Content/Content.vue'


export default {
  name: 'App',
  store,
  router,
  computed: {
      
  },
  methods: {
     
  },
  components: {
      Topbar,
      AsideMenu,
      NContent
  }
}