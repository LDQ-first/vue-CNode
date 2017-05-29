import axios from 'axios'

export default {
    name: 'User',
    data() {
        return {
            user: {},

        }
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
        }
    },
    created() {
        this.$store.commit('showAsideMenu', false);
        axios.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
             .then(result =>  result.data.data )
             .then(user => {
                 console.log(user);
                 this.user = user;
             })
    },
    methods: {

    }
}