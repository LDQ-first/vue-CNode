import Buttons from '../button/button.vue'
import Close from '../close/close.vue'


export default {
    name: 'Reply',
    props: ['isShowclose'],
    data() {
        return {
            
        }
    },
    computed: {
        skinColor() {
            return this.$store.state.skinColor;
        },
        isShowClose() {
            return this.isShowclose === "false" ?  false : true;
        }  
    },
    methods: {
        reply() {
            this.emit('reply');
        },
        hiddenReplay() {
            this.emit('hiddenReplay');
        }
    },
    components: {
        Buttons,
        Close
    },
}