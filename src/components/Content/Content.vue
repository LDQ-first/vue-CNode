<template>
    <div class="content" >
        <div class="tabs" :style="{background:skinColor}">
            <div @click="changeTab('all')" :class="{isBorder: tab ==='all'}" class="all tab">
                <router-link :to="{name:'ArticleListTab', params: {tab: 'all'}}" class="menu">首页</router-link>
            </div>
            <div @click="changeTab('good')" :class="{isBorder: tab ==='good'}" class="good tab">
                <router-link :to="{name:'ArticleListTab', params: {tab: 'good'}}" class="menu">精华</router-link>
            </div>
            <div @click="changeTab('share')" :class="{isBorder: tab ==='share'}" class="share tab">
                <router-link :to="{name:'ArticleListTab', params: {tab: 'share'}}" class="menu">分享</router-link>
            </div>
            <div @click="changeTab('ask')" :class="{isBorder: tab ==='ask'}" class="ask tab">
                <router-link :to="{name:'ArticleListTab', params: {tab: 'ask'}}" class="menu">问答</router-link>
            </div>
            <div @click="changeTab('job')" :class="{isBorder: tab ==='job'}" class="job tab">
                <router-link :to="{name:'ArticleListTab', params: {tab: 'job'}}" class="menu">招聘</router-link>
            </div>
            <div @click="changeTab('dev')" :class="{isBorder: tab ==='dev'}" class="dev tab">
                <router-link :to="{name:'ArticleListTab', params: {tab: 'dev'}}" class="menu">客户端测试</router-link>
            </div>
        </div>
        <div ref="articles" @scroll="scroll($event)" class="article">
            <div class="loading">
                <i v-show="isLoading" class="fa fa-spin fa-circle-o-notch" aria-hidden="true" 
                :style="{color:skinColor.replace(/\sl[\S\s]+/, '')}"></i>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import './Content.scss'
    import Content from './Content.js'
    export default Content
</script>