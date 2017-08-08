import axios from 'axios'
import bus from '@/lib/bus.js'
import ArticleLoading from '../ArticleLoading/ArticleLoading.vue'

export default {
    name: 'Content',
    data() {
        return {
            page: 1
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
        },
        over() {
            return this.$store.state.over;
        }
    },
    components: {
        ArticleLoading
    },
    methods: {
        changeTab(tab, page = 1) {
            this.$store.commit('Over', false);
            this.$store.commit('changeTab', {tab, articleList:[], isLoading: true});
            axios.get(`https://cnodejs.org/api/v1/topics?page=${page}&tab=${tab}`)
                 .then( result => result.data.data)
                 .then( articleList => {
                     this.$store.commit('changeTab', {tab, articleList, isLoading: false});
                 })
        },
        scroll(e) {
            if(e.target.clientHeight  > e.target.scrollTop) {
                const e = this.$refs.articles;
                bus.$emit('isShowTop', {isShow: false, e});
            }
            else {
                  const e = this.$refs.articles;
                bus.$emit('isShowTop', {isShow: true, e});
            }
            const pathArr = ['/', '/articleList/all', '/articleList/good', '/articleList/share', '/articleList/ask', '/articleList/job', '/articleList/dev'];
            if(pathArr.indexOf(this.$route.path) === -1) {
                return;
            }
            if(!this.over && !this.isLoading) {
                let isOver = e.target.clientHeight + Math.ceil(e.target.scrollTop) >= e.target.scrollHeight;
                if(isOver) {
                    console.log(this.page)
                    this.page ++;
                    this.$store.commit('changeMore', true);
                    this.$store.commit('changeTab',{isLoading: true});
                    axios.get(`https://cnodejs.org/api/v1/topics?page=${this.page}&tab=${this.tab}`)
                          .then(result =>result.data.data)
                          .then(articleList => {
                              if(!articleList.length) {
                                  this.$store.commit('Over', true);
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
        
    }
}