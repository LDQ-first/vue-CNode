import axios from 'axios';

export default {
    name: 'Content',
    data() {
        return {
            page: 1,
            over: false, // 是否已经没有内容加载
            isShowTop: false
        }
    },
    computed: {
        tab() {
            return this.$store.state.tab;
        },
        isLoading() {
            return this.$store.state.isLoading;
        },
        articleList() {
            return this.$store.state.articleList;
        },
        skinColor() {
            return this.$store.state.skinColor;
        }
    },
    methods: {
        changeTab(type, page=1) {
            this.$store.commit('changeTab', {type, articleList:[], isLoading: true});
            axios.get(`https://cnodejs.org/api/v1/topics?page=${page}&tab=${type}`)
                 .then( result => {
                     console.log(result);
                     return result.data.data;
                 })
                 .then( articleList => {
                     console.log(articleList);
                     this.$store.commit('changeTab', {type, articleList, isLoading: false});
                 })
        },
        scroll(event) {

        },
        toTop() {
            if (this.$refs.article.scrollTop <= 0) {
                return;
            }
            let time = setInterval(() => {
                if (this.$refs.article.scrollTop <= 0) {
                    clearInterval(time);
                }
                this.$refs.article.scrollTop -= 200;
            }, 0)
        }
    }
}