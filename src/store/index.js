import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

import mutations from './mutations'

export default new Vuex.Store({
    state: {
        isShowAsideMenu: false,
        userInfo: localStorage.userInfo && JSON.parse(localStorage.userInfo) ||
                  { avatar_url: '', id: '', loginname: '', success: false},
        isShowLogin: false,
        isShowMsg: false,
        isShowNewArticle: false,
        isShowInfo: false,
        isShowAbout: false
},
    mutations: mutations()
})

