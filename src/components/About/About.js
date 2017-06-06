

export default {
    name: 'About',
    data() {
        return {
            
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
    methods: {
        hiddenAbout() {
            this.$router.go(-1);
        },
    }
}