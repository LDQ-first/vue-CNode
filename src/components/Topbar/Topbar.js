import axios from 'axios'

export default {
    name: 'Topbar',
    data() {
        return {
            msgCount: 0
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
            return ;
        }
        axios.get(`https://cnodejs.org/api/v1/message/count?accesstoken=${this.at}`)
             .then(result => result.data) 
             .then(data => {
                 if(data.success) {
                     this.msgCount = data.data;
                 }
             })
    },
    methods: {
        showAsideMenu() {
            this.$store.commit('showAsideMenu', true);
        }
    }
}