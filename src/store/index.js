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
        isShowAbout: false,
        isShowSkin: false,
        skinColor: '#42B983',
        skinColors: [
        '#6CBCF3 linear-gradient(135deg, #6CBCF3, #0093F8)',
        '#FFB771 linear-gradient(135deg, #FFB771, #FF7E00)', 
        '#5BDEA3 linear-gradient(135deg, #5BDEA3, #42B983)', 
        '#E4637D linear-gradient(135deg, #E4637D, #E4002E)',
        ],
},
    mutations: mutations()
})

