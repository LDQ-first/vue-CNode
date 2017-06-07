import axios from 'axios'
import AticleLoading from '../AticleLoading/AticleLoading.vue'

export default {
    name: 'ArticleList',
    data() {
        return {
            types: {
                ask: '问答',
                job: '招聘',
                share: '分享',
                dev: '客户端测试'
            }
        }
    },
    computed: {
        tab() {
            return this.$route.params.tab || this.$store.state.tab;
        },
        articleList() {
            return this.$store.state.articleList;
        },
        isMore() {
            return this.$store.state.isMore;
        },
        skinColor() {
            return this.$store.state.skinColor;
        }
    },
    created() { 
        this.renFirScreen(this.tab);
    },
    components: {
        AticleLoading
    },
    methods: {
        isShowArticle(item, tab) {
            if(tab === 'all' || item.tab === tab 
            || (item.top && item.tab === 'all' || item.tab === 'good' || item.tab === 'share')) {
                return true;
            }
            return false;
        },
        renFirScreen(tab, page = 1) {
            this.$store.commit('changeTab', {tab, articleList:[], isLoading: true});
            axios.get(`https://cnodejs.org/api/v1/topics?page=${page}&tab=${tab}`)
                 .then( result =>  result.data.data )
                 .then( articleList => {
                     this.$store.commit('changeTab', {tab, articleList, isLoading: false});
                 })
        },
    }

}