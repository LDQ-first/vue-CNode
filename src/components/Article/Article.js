import axios from 'axios'
import Buttons from '../button/button.vue'

export default {
    name: 'Article',
    data() {
        return {
            id: this.$route.params.id,
            types: { 
                share: '分享',
                ask: '问答',
                 job: '招聘'
            },
            article: {},
            replies: [],
            articleImgs: [],
            isCollected: false,
            replyContent: '',

        }
    },
    created() {
        this.$store.commit('showLoading', true);
        this.$store.commit('showInfo', true);
        axios.get(`https://cnodejs.org/api/v1/topic/${this.id}`)
             .then( result => result.data.data)
             .then( article => {
                 console.log(article);
                 return this.article = article;
             })
             .then( article => {
                 console.log(article);
                 return this.replies = article.replies.reverse();
             })
             .then( () => this.$store.commit('showLoading', false))
             .then( () => {
                 const articleContent = this.$refs.articleContent;
                 console.log(articleContent);
                 this.articleImgs = articleContent.querySelectorAll('img');
                 for(let img of this.articleImgs) {
                     img.onclick = () => location.href = img.src; 
                 }
             })
    },
    computed: {
        isLoading() {
            return this.$store.state.isLoading;
        },
        skinColor() {
            return this.$store.state.skinColor;
        }
    },
    methods: {
        collect() {

        },
        reply() {

        }
    },
    components: {
        Buttons,
    },
}