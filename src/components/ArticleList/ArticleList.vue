<template>
    <div class="article-list">

        <ul class="items" :key="1">
            <transition-group name="slide-top">
                <li v-for="(item, index) of articleList" :key="item.last_reply_at+index" v-if="isShowArticle(item, tab)" class="article-brief" :style="{borderColor: skinColor.replace(/\sl[\S\s]+/, '')}">
                        <div class="avatar">
                            <router-link class="item-author" :to="{name: 'User', params: {name: item.author.loginname}}" :title="item.author.loginname">
                                <span class="img-border" :style="{borderTopColor: skinColor.replace(/\sl[\S\s]+/, ''),
                                borderRightColor: skinColor.replace(/\sl[\S\s]+/, '')}"></span>
                               <!-- <img :src="item.author.avatar_url" class="avatar-img" alt="">-->
                                <img v-lazy="item.author ? item.author.avatar_url: '' " class="avatar-img" alt="">
                            </router-link>
                        </div>
                    <div class="article-brief-group">
                        <h2 class="article-brief-title">
                             <router-link class="title" :to="{name: 'Article', params: {id: item.id}}">
                                {{item.title}}
                             </router-link>
                        </h2>
                        <div class="article-brief-tag">
                            <span class="tag" :class="{special: item.top || item.good}" :style="{background:skinColor}" v-show="item.tab">
                            {{(item.top ? '置顶' : '') || (item.good ? '精华': '') || types[item.tab]}}
                        </span>
                        </div>
                        <div class="article-brief-count">
                            <span class="reply">
                                <i class="fa fa-comment" aria-hidden="true"></i>{{item.reply_count}}
                            </span>
                            <span class="visit">
                                <i class="fa fa-eye" aria-hidden="true"></i>{{item.visit_count}}
                            </span>
                            <span class="date"> 
                                {{changeTime(item.create_at)}}
                            </span>
                        </div>
                    </div>
                </li>
            </transition-group>
        </ul>
        <AticleLoading v-show="isMore"></AticleLoading>
    </div>
</template>

<script>
    import './ArticleList.scss'
    import ArticleList from './ArticleList.js'
    export default ArticleList
</script>