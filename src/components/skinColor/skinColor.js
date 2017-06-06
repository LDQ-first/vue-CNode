import Buttons from '../button/button.vue'

export default {
    name: 'skinColor',
    data() {
        return {
            isActive: false
        }
    },
    computed: {
        isShowSkin() {
            return this.$store.state.isShowSkin;
        },
        skinColor() {
            return this.$store.state.skinColor;
        },
        skinColors() {
            return this.$store.state.skinColors;
        },
    },
    methods: {
        changeShowSkin(value) {
           this.$store.commit('showSkin', value)
        },
        changeSkinColor(color){
           this.$store.commit('changeSkinColor', color);
        },
        bounce(e) {
            const btn = e.target.parentNode;
            for(let i of this.$refs.color) {
                i.$el.style.animation = '';
            }
            btn.style.animation = 'bounce .8s linear';
        }
    },
    components: {
        Buttons
    }
}