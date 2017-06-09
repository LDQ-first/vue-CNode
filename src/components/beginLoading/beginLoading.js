import particles from '../../lib/particles.js'

export default {
    name: 'beginLoading',
    data() {
        return {
            canvas: {},
            context: {},
            centerX: 0,
            centerY: 0,
            radius: 80,
            rad: 0,
            speed: 0.1,
            timer: '',
        }
    },
    mounted() {
        particles("particles");
        this.init();
    },
    methods: {
        init() {
            const canvas = this.$refs.canvasLoading;
            const context = canvas.getContext('2d');

            this.canvas = canvas;
            this.context = context;
            this.centerX = canvas.width/2;
            this.centerY = canvas.height/2;
            this.rad = 2*Math.PI/100;
            this.speed = 0.2;

             window.requestAnimFrame = (function(){
            return  window.requestAnimationFrame       ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame    ||
                    window.oRequestAnimationFrame      || 
                    window.msRequestAnimationFrame     || 
                   function ( callback ){
                        window.setTimeout(callback, 1000 / 60);
                    };
            })();

             window.cancelAnimationFrame = (function(){
            return  window.cancelAnimationFrame       ||
                    window.webkitCancelAnimationFrame ||
                    window.mozCancelAnimationFrame    ||
                    window.oCancelAnimationFrame      || 
                    window.msCancelAnimationFrame     || 
                    function(){
                        window.clearTimeout(this.timer);
                    };
            })();
            this.loading();
        },  
        loading() {
            this.timer = requestAnimationFrame(this.loading, this.canvas);
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.whiteCircle();
            this.text();
            this.blueCircle();
            if(this.speed > 100) {
                this.speed = 0;
                cancelAnimationFrame(this.timer);                
            this.$emit('BeginLoading');
            }
            else {
                this.speed += 0.4;
            }
        },
        whiteCircle() {
            this.context.save();
            this.context.beginPath();
            this.context.strokeStyle = '#FFF';
            this.context.arc(this.centerX, this.centerY, this.radius, 0, Math.PI * 2, false );
            this.context.stroke();
            this.context.closePath();
            this.context.restore();
        },
        text() {
            this.context.save();
            this.context.strokeStyle = '#FFF';
            this.context.font = '30px Arial';
            const text = this.speed.toFixed(0) + '%';
            const textWidth = this.context.measureText(text).width;
            const translateWidth = (textWidth/2).toFixed(0);
             this.context.strokeText(text, 
                this.centerX - translateWidth + 5, this.centerY + 10);

            this.context.stroke();
            this.context.restore();
        },
        blueCircle() {
            this.context.save();
            this.context.strokeStyle = 'rgba(3,169,244,1)';
            this.context.lineWidth = 10;
            this.context.beginPath();
            this.context.arc(this.centerX, this.centerY, this.radius,
             -Math.PI/2, -Math.PI/2 + this.speed * this.rad, false );
            this.context.stroke();
            this.context.closePath();
            this.context.restore();
        },
        
    }
}