import axios from 'axios'

export default {
    name: 'Msg',
    data() {
        return {
            msg: {
                hasnot_read_messages: [],
                has_read_messages: []
            },
            isOnRead: true
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
        if(!this.at) {
            this.$router.push({name: 'Login'});
            return ;
        }
        axios.get(`https://cnodejs.org/api/v1/messages?accesstoken=${this.at}`)
             .then(result => result.data.data)
             .then(msg => this.msg = msg)
    },
    methods: {
        hiddenMsg() {
            this.$router.go(-1);
        },
        changeTab(flag) {
            this.isOnRead = flag;
        },
        view() {
            this.$store.commit('showMsg', false);
        }
    }
}