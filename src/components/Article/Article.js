import axios from 'axios'
import Buttons from '../button/button.vue'
import Close from '../close/close.vue'
import highlightjs from 'highlight.js'
import 'highlight.js/styles/agate.css'
import Reply from '../Reply/Reply.vue'
import bus from '../../lib/bus.js'


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
                job: '招聘',
                dev: '客户端测试'
            },
            article: {},
            replies: [],
            articleImgs: [],
            modalImgSrc: '',
            isCollected: false,
            replyContent: '',
            sortWay: 'normal',
            infos: {},
            currentIndex: null, // 回复某个人的 index
        }
    },
    created() {
        bus.$on('common', mde => {
            this.reply(mde);
        })
        bus.$on('reply', (mde, item) => {
            this.reply(mde, item);
        })
        this.$store.commit('showLoading', true);
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
                  this.$store.commit('changeTab', {tab: article.tab});
                 return this.replies = article.replies.reverse();
             })
             .then( () => this.$store.commit('showLoading', false))
             .then( () => {
                  this.chooseImg();
                  this.chooseCode();
             })
             .then( () => { 
                 if(this.userInfo.loginname) {
                      axios.get(`https://cnodejs.org/api/v1/topic_collect/${this.userInfo.loginname}`)
                            .then( result => result.data.data)
                            .then( collectTopics => {
                                this.$store.commit('updateCollectTopics', collectTopics);
                                collectTopics.forEach( item => {
                                    item.id === this.id ? this.isCollected = true : '';
                                })
                            })
                    }
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
        },
        at() {
            return this.$store.state.at;
        },
        collectTopics() {
            return this.$store.state.collectTopics;
        }
    },
    methods: {
        chooseCode() {
            const articleBody = this.$refs.articleBody;
            let codes = null;
            if(articleBody) {
                codes =  articleBody.querySelectorAll('pre code');
            }
            if(codes) {
                for(let code of codes) {
                    highlightjs.highlightBlock(code);
                }
            }
            
        },
        chooseImg() {
              const articleBody = this.$refs.articleBody;
              if(articleBody) {
                   this.articleImgs = articleBody.querySelectorAll('img:not(.avatar-img)');
              }
              if(this.articleImgs) {
                   this.showModal(this.articleImgs);
              }
        },
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
        sort( e, type) {
            if(this.replies && this.replies.length > 0) {
                if(e != null) {
                     const target = e.target;
                    if(target.classList.contains('active')) {
                        return;
                    }
                }
                 axios.get(`https://cnodejs.org/api/v1/topic/${this.id}`)
                      .then( result => {
                            return result.data.data;
                    })
                    .then( article => {
                        return this.replies = sortFun(article.replies);
                    })
                    .then( ()=> {
                        this.chooseImg();
                        this.chooseCode();
                    })

                   const sortFun =  (replies) => {
                    return replies.sort((a, b) => {
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
            }
        },
        collect() {
            if(!this.at) {
                this.$router.push({name: 'Login'});
                 return ;
            }
            if(!this.isCollected) {
                axios.post('https://cnodejs.org/api/v1/topic_collect/collect', {
                    accesstoken: this.at,
                    topic_id: this.id
                }).then( result => {
                    if(result.data.success) {
                        this.isCollected = true;
                    }
                })
            }
            else {
                axios.post(`https://cnodejs.org/api/v1/topic_collect/de_collect`, {
                    accesstoken: this.at,
                    topic_id: this.id
                }).then( result => {
                    if(result.data.success) {
                        this.isCollected = false;
                    }
                })
            }
        },
        ups(index, upsId, item) {
            if(!this.at) {
                this.$router.push({name: 'Login'});
                 return ;
            }
            if(item.author.loginname === this.userInfo.loginname) {
                alert('不能给自己点赞');
                return;
            }
            axios.post(`https://cnodejs.org/api/v1/reply/${upsId}/ups`, {
                accesstoken: this.at
            }).then( result => {
                if(result.data.success) {
                    this.sort(null, this.sortWay);
                }
            })
        },
        reply(mde, item) {
            if(!this.at) {
                this.$router.push({name: 'Login'});
                 return ;
            }
            if(!mde.value()) {
                console.log('内容不能为空');
                return;
            }
            if(!item) {
                 axios.post(`https://cnodejs.org/api/v1/topic/${this.id}/replies`, {
                     accesstoken: this.at,
                     content: mde.value()
                 }).then(result => {
                      if(result.data.success) {
                            this.sort(null, this.sortWay);
                      }
                 }).then(()=> {
                     mde.value('');
                 })
            }
            else {
                axios.post(`https://cnodejs.org/api/v1/topic/${this.id}/replies`, {
                    accesstoken: this.at,
                    content: `@${item.author.loginname}  ${mde.value()}`,
                    reply_id: item.id
                }).then(result => {
                     if(result.data.success) {
                        this.sort(null, this.sortWay);
                    }
                }).then(() => {
                    this.hiddenReplay();
                    mde.value('');
                })
            }
        },
        hiddenReplay() {
            this.currentIndex = null;
        }
        
    },
    watch: {
     
    },
    components: {
        Buttons,
        Close,
        Reply
    },
}