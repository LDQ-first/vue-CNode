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
                 let articleReply = this.$refs.articleReply;
                 this.articleImgs = articleContent.querySelectorAll('img:not(.avatar-img)');
                 this.articleReplyImgs = articleReply.querySelectorAll('img:not(.avatar-img)');
                 this.showModal(this.articleImgs);
                 this.showModal(this.articleReplyImgs);
                 //  console.log(this.articleReplyImgs);
                 
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
            console.log(imgs);
            imgs.forEach((img, idx) => {
                console.log(img);
            })
            for(let img of imgs) {
              //  console.log(img);
             img.onclick = () => { 
                if(img.parentNode.tagName === 'A') {
                    return;
                }
              /*  console.log(img);*/
                this.modalImgSrc = img.src;
             }
            }
        },
        sort( e, type) {
            if(this.replies && this.replies.length > 0) {
               const target = e.target;
               if(target.classList.contains('active')) {
                   return;
                }
               this.replies.sort((a, b) => {
                   this.sortWay = type;
                 //  console.log(this.articleReplyImgs);
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
                const articleReply = this.$refs.articleReply;
                this.articleReplyImgs = articleReply.getElementsByTagName('img');
                //console.log( this.articleReplyImgs);
                this.showModal( this.articleReplyImgs);
             
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
        replies() {
             let articleReply = this.$refs.articleReply;
            // console.log(articleReply);
           //  this.articleReplyImgs = articleReply.getElementsByTagName('img');
          //   this.articleReplyImgs = articleReply.querySelectorAll('img:not(.avatar-img)');
            // console.log(this.articleReplyImgs);
             if(this.articleReplyImgs && this.articleReplyImgs.length) {
             //  this.showModal(this.articleReplyImgs);
               // console.log(this.articleReplyImgs);
             }
          
             
             /*this.articleReplyImgs = articleReply.querySelectorAll('img:not(.avatar-img)');*/
             
            /* this.showModal(this.articleReplyImgs);*/
            /*  console.log(this.articleReplyImgs);*/
        }
    },
    components: {
        Buttons,
        Close
    },
}