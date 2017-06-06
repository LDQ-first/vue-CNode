import Buttons from '../button/button.vue'
import Close from '../close/close.vue'
import createSimplemde from '../../lib/simplemde.js'
import bus from '../../lib/bus.js'

export default {
    name: 'Reply',
    props: ['isShowclose', 'placeholderOpt', 'loginnmaeOpt', 'item', 'btnText', 'event'],
    data() {
        return {
            mde: null,
            text: this.btnText ? this.btnText : '回复'
        }
    },
    computed: {
        skinColor() {
            return this.$store.state.skinColor;
        },
        isShowClose() {
            return this.isShowclose === "false" ?  false : true;
        },
    },
    mounted(){
       this.setMde();
    },
    methods: {
        setMde() {
              let privateOpt = {};
              if(this.placeholderOpt) {
                 privateOpt = Object.assign(privateOpt, {placeholder: this.placeholderOpt});
              }
              else if(this.loginnmaeOpt) {
                  privateOpt = Object.assign(privateOpt, {placeholder: `自动添加了@${this.loginnmaeOpt}`});
              }
            const addOpt = Object.assign({element: this.$refs.reply}, privateOpt);
            this.mde = createSimplemde(addOpt);
        },
        reply(mde) {
            if(this.item) {
                bus.$emit(`${this.event}`, mde, this.item );
            }
            else {
                bus.$emit(`${this.event}`, mde);
            }
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