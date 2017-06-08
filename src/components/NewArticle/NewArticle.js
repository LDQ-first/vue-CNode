import Reply from '../Reply/Reply.vue'
import axios from 'axios'
import Buttons from '../button/button.vue'


export default {
    name: 'NewArticle',
    data() {
        return {
            types: { 
                share: '分享',
                ask: '问答',
                job: '招聘',
                dev: '客户端测试'
            },
            newArticleType: '客户端测试',
            type: 'dev',
            newArticleTitle: '',
            isActive: false
        }
    },
    computed: {
        skinColor() {
            return this.$store.state.skinColor;
        },
        at() {
            return this.$store.state.at;
        },
    },
    components: {
        Reply,
        Buttons
    },
    methods: {
        hiddenNewArticle()  {
            this.$router.go(-1);
        },
        sendNewArticle(mde) {
            console.log(mde.value());
            if(!this.newArticleTitle.match('.{10,}')) {
                console.log('标题不能少于十个字符');
                return;
            }
            if(!mde.value()) {
                console.log('内容不能为空');
                return;
            }
            for(let type in this.types) {
                if(this.newArticleType === this.types[type]) {
                    this.type = type;
                }
            }
             console.log(!this.isActive);
             if(!this.isActive) {
                this.isActive = true;
                axios.post(`https://cnodejs.org/api/v1/topics`, {
                    accesstoken: this.at,
                    title: this.newArticleTitle,
                    tab: this.type,
                    content: mde.value()
                })
                .then(result => {
                    if (result.data && result.data.success) {
                        this.$store.commit('showAsideMenu', false);
                        this.$store.commit('changeTab', this.type)
                        this.$router.push({name: 'Article', params: {id: result.data.topic_id}});
                    } else {
                        console.log('发布失败');
                    }
                    this.isActive = false;
                })
                .catch(() => {
                     this.isActive = false;
                 })
             }
        }
    }
}