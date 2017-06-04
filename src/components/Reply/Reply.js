import Buttons from '../button/button.vue'
import Close from '../close/close.vue'
import createSimplemde from '../../lib/simplemde.js'
import bus from '../../lib/bus.js'

export default {
    name: 'Reply',
    props: ['isShowclose', 'placeholderOpt', 'loginnmaeOpt', 'item'],
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
       this.setMde();
    },
    methods: {
        setMde() {
              let privateOpt = {};
              if(this.placeholderOpt) {
                 privateOpt = Object.assign(privateOpt, {placeholder: this.placeholderOpt});
              }
              else if(this.loginnmaeOpt) {
                  privateOpt = Object.assign(privateOpt, {initialValue: `@${this.loginnmaeOpt}  `});
              }
            const addOpt = Object.assign({element: this.$refs.reply}, privateOpt);
           /* console.log(addOpt);*/
            this.mde = createSimplemde(addOpt);
        },
        reply(mde) {
            if(this.item) {
                bus.$emit('reply', mde, this.item );
            }
            else {
                bus.$emit('reply', mde);
            }
          /*  this.$emit('reply', mde );*/
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