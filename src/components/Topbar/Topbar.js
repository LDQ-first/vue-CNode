

export default {
    name: 'Topbar',
    data() {
        return {

        }
    },
    computed: {
        skinColor() {
            return this.$store.state.skinColor;
        }
    },
    methods: {
        showAsideMenu() {
            this.$store.commit('showAsideMenu', true);
        }
    }
}