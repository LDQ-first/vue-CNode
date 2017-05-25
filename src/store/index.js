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
        skinColor: '#0091ea',
        skinColors: [
        '#0091ea linear-gradient(135deg, #33b5e5, #0091ea)',
        '#3ABB5D linear-gradient(135deg, #3ABB5D, #2E9549)', 
        '#FFB771 linear-gradient(135deg, #FFB771, #FF7E00)', 
        '#E4637D linear-gradient(135deg, #E4637D, #E4002E)',
        ],
},
    mutations: mutations()
})

