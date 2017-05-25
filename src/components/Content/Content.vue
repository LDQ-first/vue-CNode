<template>
    <div class="content" >
        <div class="tabs" :style="{background:skinColor}">
            <div @click="changeTab('all')" :class="{isBorder: tab==='all'}" class="all tab">
                <router-link to="/" class="menu">首页</router-link>
            </div>
            <div @click="changeTab('good')" :class="{isBorder: tab==='good'}" class="good tab">
                <router-link to="/" class="menu">精华</router-link>
            </div>
            <div @click="changeTab('share')" :class="{isBorder: tab==='share'}" class="share tab">
                <router-link to="/" class="menu">分享</router-link>
            </div>
            <div @click="changeTab('ask')" :class="{isBorder: tab==='ask'}" class="ask tab">
                <router-link to="/" class="menu">问答</router-link>
            </div>
            <div @click="changeTab('job')" :class="{isBorder: tab==='job'}" class="job tab">
                <router-link to="/" class="menu">招聘</router-link>
            </div>
        </div>
        <div ref="article" @scroll="scroll($event)" class="article">
            <div class="loading">
                <i v-show="isLoading" class="fa fa-spin fa-circle-o-notch" aria-hidden="true" 
                :style="{color:skinColor}"></i>
            </div>
            <router-view></router-view>
        </div>
        <transition name="slide-top-enter">
            <div v-show="isShowTop" class="top">
                <i @click.stop.prevent="toTop" class="fa fa-fighter-jet" aria-hidden="true"
                :style="{color:skinColor}"></i>
            </div>
        </transition>
    </div>
</template>

<script>
    import './Content.scss'
    import Content from './Content.js'
    export default Content
</script>