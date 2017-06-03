import axios from 'axios'
import Buttons from '../button/button.vue'

export default {
    name: 'Login',
    data() {
        return {
            accessToken: ''
        }
    },
     computed: {
        skinColor() {
            return this.$store.state.skinColor;
        },
    },
    methods: {
        showLogin() {
            this.$store.commit('showLogin', false);
            this.$store.commit('showMsg', false);
        },
        check() {

        }
    },
    components: {
        Buttons
    },
}