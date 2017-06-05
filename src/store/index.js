import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

import mutations from './mutations'

export default new Vuex.Store({
    state: {
        isShowAsideMenu: false,
        /*isShowLogin: false,*/
        isShowMsg: false,
        /*isShowNewArticle: false,*/
        /*isShowInfo: false,*/
        isShowAbout: false,
        isShowSkin: false,
        skinColor: 'rgba(51, 181, 229, 1)',
        skinColors: [
            /*'#33b5e5 linear-gradient(135deg, #33b5e5, #0091ea)',
            '#3ABB5D linear-gradient(135deg, #3ABB5D, #2E9549)', 
            '#FFB771 linear-gradient(135deg, #FFB771, #FF7E00)', 
            '#E4637D linear-gradient(135deg, #E4637D, #E4002E)',*/
            'rgba(51, 181, 229, 1) linear-gradient(135deg, rgba(51, 181, 229, 1), rgba(0, 145, 234, 1))',
            'rgba(58, 187, 93, 1) linear-gradient(135deg, rgba(58, 187, 93, 1), rgba(46, 149, 73, 1))', 
            'rgba(255, 183, 113, 1) linear-gradient(135deg, rgba(255, 183, 113, 1), rgba(255, 126, 0, 1))', 
            'rgba(228, 99, 125, 1) linear-gradient(135deg, rgba(228, 99, 125, 1), rgba(228, 0, 46, 1))',
        ],
        tab:  'all',
        isLoading: false,
        articleList: [],
        over: false,
        isMore: false,
        userInfo: localStorage.userInfo && JSON.parse(localStorage.userInfo) ||
                  { avatar_url: '', id: '', loginname: '', success: false},
        at: localStorage.at || '',
        collectTopics: [],
        
        
},
    mutations: mutations()
})

