<template>
    <div class="article-list">
        <!--<transition-group name="slide-top">-->
        <ul class="items">
            <li v-for="(item, index) of articleList" :key="item.last_reply_at+index" class="article-brief"
            :style="{borderColor: (skinColor.replace(/\sl[^\)]+\)/, '') === '#FFF' ? '' : skinColor.replace(/\sl[^\)]+\)/, ''))}">
                <div class="avatar">
                    <img :src="item.author.avatar_url" alt="">
                </div>
                <div class="title">
                    <p>
                        <span class="flag" :class="{special: item.top || item.good}">{{(item.top ? '置顶' : '') || (item.good ? '精华': '') || types[item.tab]}}</span>
                       <!-- <router-link :to="{name: 'article', params: {id: item.id}}">{{item.title}}</router-link>-->
                    </p>
                    <p class="view">
                        <span class="viewed">{{item.reply_count}}</span>/{{item.visit_count}}
                        <!--<span class="date"> {{changeTime(item.last_reply_at)}}</span>-->
                        <span class="date"> {{item.last_reply_at}}</span>
                    </p>
                </div>
            </li>
        </ul>
        <!--</transition-group>-->
        <div class="more">
            <!--<i v-show="isMore" class="icon-more"></i>-->
        </div>
    </div>
</template>

<script>
    import './ArticleList.scss'
    import ArticleList from './ArticleList.js'
    export default ArticleList
</script>