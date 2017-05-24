


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
        }
    },
    methods: {
        click() {
            setTimeout(()=>{
                this.$emit('click');
            },800);
            /*this.$emit('click');*/
        },
        mouseenter() {
            setTimeout(()=>{
                this.$emit('mouseenter');
            },0);
        },
        mouseleave() {
            setTimeout(()=>{
                this.$emit('mouseleave');
            },0);
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
            
           /* console.log(window.getComputedStyle(btns).backgroundColor);*/
            
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
               requestAnimFrame(this.draw);
            }
            else {
                 setTimeout(()=>{
                    this.context.clearRect(0, 0, this.width, this.height);
                },1600);    
            }
        }
    }
}