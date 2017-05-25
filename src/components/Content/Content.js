import axios from 'axios';

export default {
    name: 'Content',
    data() {
        return {
            page: 3,
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
        changeTab(tab, page=1) {
            this.$store.commit('changeTab', {tab, articleList:[], isLoading: true});
            axios.get(`https://cnodejs.org/api/v1/topics?page=${page}&tab=${tab}`)
                 .then( result => {
                    /* console.log(result);*/
                     return result.data.data;
                 })
                 .then( articleList => {
                     /*console.log(articleList);*/
                     this.$store.commit('changeTab', {tab, articleList, isLoading: false});
                 })
        },
        scroll(e) {
            console.log(e.target.clientHeight);
            console.log(e.target.scrollTop);
            if(e.target.clientHeight * 4 > e.target.scrollTop) {
                this.isShowTop = false;
            }
            else {
                this.isShowTop = true;
            }
            if (this.$route.path !== '/') {
                return;
            } else if(!this.over) {
                let isOver = e.target.clientHeight + e.target.scrollTop === e.target.scrollHeight;
                if(isOver) {
                    this.$store.commit('changeMore', true);
                    this.page ++;
                    console.log(this.page);
                     this.$store.commit('changeTab',{isLoading: true});
                    axios.get(`https://cnodejs.org/api/v1/topics?page=${this.page}&tab=${this.tab}`)
                          .then(result => {
                              console.log(result);
                              return result.data.data;
                            })
                          .then(articleList => {
                              if(!articleList.length) {
                                  this.over = true;
                                  this.$store.commit('changeMore', false);
                                  return ;
                              }
                              this.$store.commit('changeTab',
                               {articleList: this.articleList.concat(articleList), isLoading: false});
                          })
                          .then(() => this.$store.commit('changeMore', false));
                }
            }
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
            }, 1000/60)
        }
    }
}