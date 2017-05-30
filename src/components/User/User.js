import axios from 'axios'

export default {
    name: 'User',
    data() {
        return {
            user: {},
            collectTopics: [],
            navs: [
                { name: '最近创建的话题', tag: 'create', fa: 'fa-plus-circle'},
                { name: '最近参与的话题', tag: 'reply', fa: 'fa-reply' },
                { name: '最近收藏的话题', tag: 'collect', fa: 'fa-archive'}
            ],
            currType: 'create',
            
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
                { tag: 'create', topic: this.collectTopics, title: '最近创建的话题'},
                { tag: 'reply', topic: this.user.recent_replies, title: '最近参与的话题'},
                { tag: 'collect', topic: this.user.recent_topics, title: '收藏的话题'},
            ]
        }
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
             axios.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
             .then(result =>  result.data.data )
             .then(user => {
                 console.log(user);
                 this.user = user;
             })
             .then( () => axios.get(`https://cnodejs.org/api/v1/topic_collect/${this.$route.params.name}`))
             .then(result => result.data.data)
             .then(collectTopics => {
                 console.log(collectTopics);
                 this.collectTopics = collectTopics;
             })
        }
    }
}