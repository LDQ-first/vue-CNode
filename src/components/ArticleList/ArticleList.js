import axios from 'axios'


export default {
    name: 'ArticleList',
    data() {
        return {
            types: {
                ask: '问答',
                job: '招聘',
                share: '分享'
            }
        }
    },
    computed: {
        tab() {
            return this.$store.state.tab;
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
    methods: {
        renFirScreen(tab) {
            this.$store.commit('changeTab', {tab, isLoading: true});
            axios.get(`https://cnodejs.org/api/v1/topics`)
                 .then( result => {
                     console.log(result);
                     return result.data.data;
                 })
                 .then( articleList => {
                     console.log(articleList);
                     this.$store.commit('changeTab', {tab, articleList, isLoading: false});
                 })
        },
    }

}