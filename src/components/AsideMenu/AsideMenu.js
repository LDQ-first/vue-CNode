import Buttons from '../button/button.vue'
import Close from '../close/close.vue'

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
        }
    },
    components: {
        Buttons,
        Close
    },
    methods: {
        hiddenAsideMenu() {
            this.$store.commit('showAsideMenu', false);
        },
        showLogin() {
            this.$store.commit('showLogin', true);
        },
        showMsg() {
            this.$store.commit('showMsg', true);
            /*this.$router.push('/');*/
        },
        showNewArticle() {
            this.$store.commit('showNewArticle', true);
        },
        showInfo() {
            this.$store.commit('showInfo', true);
           /* this.$router.push('/');*/
        },
        showAbout() {
            this.$store.commit('showAbout', true);
        },

    }
}