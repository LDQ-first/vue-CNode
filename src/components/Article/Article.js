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
            sortWay: 'normal'

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
             .then( article => this.article = article)
             .then( article => {
                 console.log(article);
                 return this.replies = article.replies.reverse();
             })
             .then( () => this.$store.commit('showLoading', false))
             .then( () => {
                 const articleContent = this.$refs.articleContent;
                 const articleReply = this.$refs.articleReply;
                 this.articleImgs = articleContent.querySelectorAll('img:not(.avatar-img)');
                 this.articleReplyImgs = articleReply.querySelectorAll('img:not(.avatar-img)');
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
             img.addEventListener('click', () => { 
                if(img.parentNode.tagName === 'A') {
                    return;
                }
                this.modalImgSrc = img.src;
             })
            }
        },
        sort( e, type) {
            if(this.replies && this.replies.length > 0) {
               const target = e.target;
               if(target.classList.contains('active')) {
                   return;
                }
               /* axios.get()*/
               this.replies.sort((a, b) => {
                   this.sortWay = type;
                   if(type === 'normal' ) {
                       return new Date(b.create_at) - new Date(a.create_at);
                   }
                   else if (type === 'farthest') {
                       return new Date(a.create_at) - new Date(b.create_at);
                   }
                   else if(type === 'ups') {
                       return b.ups.length - a.ups.length;
                   }
               })             
            }
        },
        collect() {

        },
        reply() {

        },
        ups() {

        }
    },
    watch: {
       
    },
    components: {
        Buttons,
        Close
    },
}