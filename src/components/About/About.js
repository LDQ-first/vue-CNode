

export default {
    name: 'About',
    data() {
        return {
            skills:[
             {name: 'Vue2.2', des: '前端框架'},
             {name: 'Vuex', des: '状态管理,组件通信'}, 
             {name: 'Vue-router', des: '配置路由，组件切换'},
             {name: 'Vue-lazyload', des: '图片懒加载'},
             {name: 'ES6/7', des: 'JS版本'},
             {name: 'Webpack', des: '模块化处理，编译打包'},
             {name: 'Express', des: '服务器'},
             {name: 'Axios', des: '基于Promise处理HTTP请求'},
             {name: 'SASS(SCSS)', des: 'css预处理器'},
             {name: 'Normalize.css', des: '处理浏览器默认样式'},
             {name: 'Font-awesome', des: '字体图标'},
             {name: 'Moment.js', des: '处理时间显示'},
             {name: 'Simplemde', des: 'markdown编辑器'},
             {name: 'Highlight.js', des: '语法高亮'},
             {name: 'Flex', des: '弹性布局'},
             {name: 'Canvas', des: '首页loading效果，按钮的波纹效果'},
             {name: 'loaclStorge', des: '本地存储用户信息'}
            ],
            skillIndex: 0,
        }
    },
    computed: {
        skinColor() {
            return this.$store.state.skinColor;
        },
        at() {
            return this.$store.state.at;
        }
    },
    methods: {
        hiddenAbout() {
            this.$router.go(-1);
        },
        skillClick(idx) {
            this.skillIndex = idx;
        }
    }
}