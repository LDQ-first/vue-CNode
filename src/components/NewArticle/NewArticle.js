import Reply from '../Reply/Reply.vue'
import axios from 'axios'
import Buttons from '../button/button.vue'
import bus from '../../lib/bus.js'

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
            newArticleType: '',
            newArticleTitle: '',

        }
    },
    computed: {
        skinColor() {
            return this.$store.state.skinColor;
        },
        at() {
            return this.$store.state.at;
        }
    },
    created() {
        bus.$on('reply', (mde) => {
            this.sendNewArticle(mde);
        })
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
            if(!mde.value()) {
                console.log('内容不能为空');
                return;
            }


        }

    }
}