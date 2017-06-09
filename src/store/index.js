import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

import mutations from './mutations'

export default new Vuex.Store({
    state: {
        isShowAsideMenu: false,
        isShowSkin: false,
        skinColor: 'rgba(51, 181, 229, 1)',
        skinColors: [
            'rgba(51, 181, 229, 1) linear-gradient(135deg, rgba(51, 181, 229, 1), rgba(0, 145, 234, 1))',
            'rgba(58, 187, 93, 1) linear-gradient(135deg, rgba(58, 187, 93, 1), rgba(46, 149, 73, 1))', 
            'rgba(255, 183, 113, 1) linear-gradient(135deg, rgba(255, 183, 113, 1), rgba(255, 126, 0, 1))', 
            'rgba(254, 151, 168, 1) linear-gradient(135deg, rgba(254, 151, 168, 1), rgba(215, 85, 123, 1))',
        ],
        tab:  localStorage.tab || 'all',
        isLoading: false,
        articleList: [],
        over: false,
        isMore: false,
        userInfo: localStorage.userInfo && JSON.parse(localStorage.userInfo) ||
                  { avatar_url: '', id: '', loginname: '', success: false},
        at: localStorage.at || '',
        collectTopics: [],
        msgCount: 0,
        
        
},
    mutations: mutations()
})

