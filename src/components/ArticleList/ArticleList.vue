<template>
    <div class="article-list">
        
        <ul class="items" :key="1">
            <transition-group name="slide-top">
            <li v-for="(item, index) of articleList" :key="item.last_reply_at+index" class="article-brief"
            :style="{borderColor: skinColor.replace(/\sl[^\)]+\)/, '')}">
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
                        <span class="date"> {{changeTime(item.last_reply_at)}}</span>
                    </p>
                </div>
            </li>
            </transition-group>
        </ul>
        
        <div class="more">
            <!--<i v-show="isMore" class="icon-more"></i>-->
             <i v-show="isMore" class="fa fa-spin fa-circle-o-notch" aria-hidden="true" 
                :style="{color:skinColor}"></i>
        </div>
    </div>
</template>

<script>
    import './ArticleList.scss'
    import ArticleList from './ArticleList.js'
    export default ArticleList
</script>