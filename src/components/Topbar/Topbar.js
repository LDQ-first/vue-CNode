

export default {
    name: 'Topbar',
    data() {
        return {

        }
    },
    methods: {
        showAsideMenu() {
            this.$store.commit('showAsideMenu', true);
        }
    }
}