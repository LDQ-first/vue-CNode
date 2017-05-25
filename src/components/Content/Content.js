

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