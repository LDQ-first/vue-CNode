


export default {
    name: 'button',
    props: ['text'],
    data() {
        return {
            ex: 0,
            ey: 0,
            radius: 0,
            backgroundColor: '#EAF5FE',
            context: '',
            width: 0,
            height: 0,
            timer: null
        }
    },
    methods: {
        can() {
            if(this.context) {
                cancelAnimationFrame(this.timer);
                this.context.clearRect(0, 0, this.width, this.height);
            }
        },
        mouseenter() {
           this.$refs.btnCan.style.zIndex = 1;
        },
        mouseleave() {
            this.$refs.btnCan.style.zIndex = 0;
        },
        click(e) {
            setTimeout(()=>{
                this.$emit('click', e);
            },400);
        },
        init() {   
            this.ex = 0;
            this.ey = 0;
            this.radius = 0;
            this.backgroundColor = '#EAF5FE';
            this.context = '';
            this.width = 0;
            this.height = 0;
            
            window.requestAnimFrame = (function(){
            return  window.requestAnimationFrame       ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame    ||
                    window.oRequestAnimationFrame      || 
                    window.msRequestAnimationFrame     || 
                    function( callback ){
                        window.setTimeout(callback, 1000 / 60);
                    };
            })();
        },
        press(e) {
            this.init();
            const btns = this.$refs.btns;
            const canvas = e.target;
            const context = canvas.getContext('2d');
            this.width = canvas.width = btns.offsetWidth;
            this.height = canvas.height = btns.offsetHeight;
            this.context = context;
            
            this.ex = e.offsetX;
            this.ey = e.offsetY;
            context.clearRect(0, 0, this.width, this.height);
            
            this.draw();
        },
        draw() {
            this.context.beginPath();
            this.context.arc(this.ex, this.ey, this.radius, 0, 2*Math.PI, false);
            this.context.fillStyle = this.backgroundColor;
            this.context.fill();
            this.radius += 2;
            if(this.radius < this.width) {
               this.timer = requestAnimFrame(this.draw);
            }
            else {
                 setTimeout(()=>{
                    this.context.clearRect(0, 0, this.width, this.height);
                },1000);    
            }
        }
    }
}