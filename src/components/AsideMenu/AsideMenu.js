import Buttons from '../button/button.vue'
import Close from '../close/close.vue'
import SkinColor from '../skinColor/skinColor.vue'

export default {
    name: 'AsideMenu',
    data() {
        return {
            
        }
    },
    computed: {
        userInfo() {
            return this.$store.state.userInfo;
        },
        isShowAsideMenu() {
            return this.$store.state.isShowAsideMenu;
        },
        skinColor() {
            return this.$store.state.skinColor;
        },
        at() {
            return this.$store.state.at;
        },
    },
    components: {
        Buttons,
        Close,
        SkinColor
    },
    methods: {
        hiddenAsideMenu() {
            this.$store.commit('showAsideMenu', false);
        },
        showLogin() {
           this.$router.push({name: 'Login'});
        },
        showMsg() {
            if(!this.at) {
                this.$router.push({name: 'Login'});
                return ;
            }
            this.$router.push({name: 'Msg'});
            /*this.$store.commit('showMsg', true);*/
        },
        showNewArticle() {
            if(!this.at) {
                this.$router.push({name: 'Login'});
                return ;
            }
            this.$router.push({name: 'NewArticle'});
            /*this.$store.commit('showNewArticle', true);*/

        },
      /*  showInfo() {
            this.$store.commit('showInfo', true);
        },*/
        showUserCenter() {
            if(!this.at) {
                /*this.$store.commit('showLogin', true);*/
                this.$router.push({name: 'Login'});
                return ;
            }
            this.$router.push({name: 'User', params: {name: this.userInfo.loginname}});
        },
        showAbout() {
            this.$store.commit('showAbout', true);
        },
        logout() { 
            localStorage.userInfo = '';
            localStorage.at = '';
             this.$store.commit('updateUserInfo', 
            localStorage.userInfo && JSON.parse(localStorage.userInfo) ||
             { avatar_url: '', id: '', loginname: '', success: false});
            this.$store.commit('updateAT', '');
        },
        

    }
}