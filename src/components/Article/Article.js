import axios from 'axios'
import Buttons from '../button/button.vue'
import Close from '../close/close.vue'

export default {
    name: 'Article',
    data() {
        return {
            hasArticle: false,
            time: 5,
            id: this.$route.params.id,
            types: { 
                share: '分享',
                ask: '问答',
                 job: '招聘'
            },
            article: {},
            replies: [],
            articleImgs: [],
            articleReplyImgs: [],
            modalImgSrc: '',
            isCollected: false,
            replyContent: '',

        }
    },
    created() {
        this.$store.commit('showLoading', true);
        this.$store.commit('showInfo', true);
        axios.get(`https://cnodejs.org/api/v1/topic/${this.id}`)
            .catch(() => {
                this.time = 5;
                 this.$store.commit('showLoading', false);
                 const timer = setInterval(() => {
                    if(this.time === 0) {
                        clearInterval(timer);
                        this.$router.push({path: '/'});
                        return;
                    }
                    this.time--;
                }, 1000); 
            })
             .then( result => {
                 if(result) {
                     this.hasArticle = true;
                     return result.data.data;
                 }
             })
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
                 const articleReply = this.$refs.articleReply;
                 this.articleImgs = articleContent.querySelectorAll('img');
                 this.articleReplyImgs = articleReply.querySelectorAll('img');
                 this.showModal(this.articleImgs);
                 this.showModal(this.articleReplyImgs);
             })
    },
    computed: {
        isLoading() {
            return this.$store.state.isLoading;
        },
        skinColor() {
            return this.$store.state.skinColor;
        },
        userInfo() {
            return this.$store.state.userInfo;
        }
    },
    methods: {
        showModal(imgs) {
            for(let img of imgs) {
             img.onclick = () => { 
                if(img.parentNode.tagName === 'A') {
                    return;
                }
                this.modalImgSrc = img.src;
             }
            }
        },
        collect() {

        },
        reply() {

        },
        ups() {

        }
    },
    components: {
        Buttons,
        Close
    },
}