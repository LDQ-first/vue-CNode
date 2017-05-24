import changeState from '../../lib/changeState.js'
import Buttons from '../button/button.vue'

export default {
    name: 'skinColor',
    data() {
        return {
            isActive: false
        }
    },
    computed: {
        showSkin() {
            return this.$store.state.showSkin;
        },
        skinColor() {
            return this.$store.state.skinColor;
        },
        skinColors() {
            return this.$store.state.skinColors;
        },
    },
    methods: {
        changeShowSkin(showSkin, value) {
            changeState('showSkin', value);
        },
        changeSkinColor(color){
            changeState('skinColor', color);
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