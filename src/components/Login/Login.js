import axios from 'axios'
import Buttons from '../button/button.vue'

export default {
    name: 'Login',
    data() {
        return {
            AccessToken: ''
        }
    },
     computed: {
        skinColor() {
            return this.$store.state.skinColor;
        },
    },
    methods: {
        showLogin() {

        },
        check() {

        }
    },
    components: {
        Buttons
    },
}