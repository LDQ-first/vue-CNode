
import '../lib/dynamicRem.js'
import store from '../store/index'
import { router, routes } from '../router/index.js'
import Vue from 'vue'
/*import axios from 'axios'
Vue.use(axios);*/
import moment from 'moment'


import Topbar from '../components/Topbar/Topbar.vue'
import AsideMenu from  '../components/AsideMenu/AsideMenu.vue'
import NContent from '../components/Content/Content.vue'

Vue.prototype.moment = moment;
Vue.prototype.changeTime = time => 
        moment(time).startOf('minute').fromNow()
        .replace(/hours?/, '小时').replace('ago', '前').replace(/days?/, '天').replace(/minutes?/, '分钟')
        .replace(/\ban?/, '1').replace(/months?/, '个月').replace(/\byears?/, '年').replace(/\s/g, '').replace('fewseconds','分钟');



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