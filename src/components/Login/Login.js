import axios from 'axios'
import Buttons from '../button/button.vue'

export default {
    name: 'Login',
    data() {
        return {
            accessToken: ''
        }
    },
    created() {
      /*  this.accessToken = this.at;*/
      
    },
     computed: {
        skinColor() {
            return this.$store.state.skinColor;
        },
        at() {
            return this.$store.state.at;
        }
    },
    methods: {
        hiddenLogin() {
            this.$router.go(-1);
        },
        login(accessToken) {
            axios.post('https://cnodejs.org/api/v1/accesstoken', {accesstoken: accessToken})
                .then(result => {
                    console.log(result);
                    if(result.status === 200) {
                        return result.data;
                    }
                })
                .catch( error => {
                    console.log('登录失败', error);
                })
                .then( userInfo => {
                    this.$store.commit('updateUserInfo', userInfo);
                    this.$store.commit('updateAT', accessToken);
                    localStorage.userInfo = JSON.stringify(userInfo);
                    localStorage.at = accessToken;
                    this.hiddenLogin();
                })
        }
    },
    components: {
        Buttons
    },
}