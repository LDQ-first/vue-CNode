import axios from 'axios'


export default {
    name: 'User',
    data() {
        return {
            hasUser: false,
            user: {},
            collectTopics: [],
            navs: [
                { name: '最近创建的主题', tag: 'create', fa: 'fa-plus-circle'},
                { name: '最近参与的主题', tag: 'reply', fa: 'fa-reply' },
                { name: '最近收藏的主题', tag: 'collect', fa: 'fa-archive'}
            ],
            currType: 'create',
            time: 5
        }
    },
     computed: {
        isLoading() {
            return this.$store.state.isLoading;
        },
        skinColor() {
            return this.$store.state.skinColor;
        },
        userInfo() {
            return this.$store.state.userInfo;
        },
        contents() {
            return [
                { tag: 'create', topic: this.user ? this.user.recent_topics : '', title: '最近创建的主题'},
                { tag: 'reply', topic: this.user ? this.user.recent_replies : '', title: '最近参与的主题'},
                { tag: 'collect', topic: this.collectTopics ? this.collectTopics : '', title: '收藏的主题'},
            ]
        },
    },
    created() {
        this.$store.commit('showAsideMenu', false);
        this.fetchData();
    },
    watch: {
        $route() {
            this.fetchData();
        }
    },
    methods: {
        fetchData() {
             console.log('fetchData');
             this.$store.commit('showLoading', true);
             this.hasUser = false;
             console.log(`${this.$route.params.name}`);
             axios.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
             .catch(() => {
                 this.time = 5;
                 this.$store.commit('showLoading', false);
                 const timer = setInterval(() => {
                    if(this.time === 0) {
                        clearInterval(timer);
                        this.$router.go(-1);
                         return;
                    }
                    this.time--;
                }, 1000); 
             })
             .then(result => {
                 console.log(result);
                 if(result) {
                     this.hasUser = true;
                     return result.data.data
                 }
             })
             .then(user =>  this.user = user)
             .then( () => axios.get(`https://cnodejs.org/api/v1/topic_collect/${this.$route.params.name}`))
             .then(result => result.data.data)
             .then(collectTopics => {
                 this.collectTopics = collectTopics;
             })
             .then(() =>  this.$store.commit('showLoading', false))
        }
    }
}