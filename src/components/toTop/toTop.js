import bus from '../../lib/bus.js'

export default {
    name: 'toTop',
    data() {
        return {
             isShowTop: false,
             e: '',
        }
    },
    created() {
        bus.$on('isShowTop', ({isShow, e}) => {
            this.isShowTop = isShow;
            this.e = e;
        })
    },
    computed: {
        skinColor() {
            return this.$store.state.skinColor;
        }
    },
    methods: {
        toTop() {
            if (this.e.scrollTop <= 0) {
                return;
            }
            let time = setInterval(() => {
                if (this.e.scrollTop <= 0) {
                    clearInterval(time);
                }
                this.e.scrollTop -= 120;
            }, 1000/60)
        }
    }
}