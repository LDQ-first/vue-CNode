
import '../lib/dynamicRem.js'
import store from '../store/index'
import { router, routes } from '../router/index.js'

import Topbar from '../components/Topbar/Topbar.vue'
import AsideMenu from  '../components/AsideMenu/AsideMenu.vue'


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
      AsideMenu
  }
}