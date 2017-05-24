import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

import mutations from './mutations'

export default new Vuex.Store({
    state: {
        isShowAsideMenu: false
    },
    mutations: mutations()
})

