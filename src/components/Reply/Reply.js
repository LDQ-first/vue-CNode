import Buttons from '../button/button.vue'
import Close from '../close/close.vue'
import createSimplemde from '../../lib/simplemde.js'

export default {
    name: 'Reply',
    props: ['isShowclose'],
    data() {
        return {
            mde: null,
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
    mounted(){
        console.log(this.$refs);
       /* console.log(document.getElementById('reply'));*/
        createSimplemde({
            element: this.$refs.reply
        })
    },
    methods: {
        reply() {
            this.$emit('reply');
        },
        hiddenReplay() {
            this.$emit('hiddenReplay');
        }
    },
    components: {
        Buttons,
        Close
    },
}