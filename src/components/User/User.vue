<template>
    <div class="user-center" v-show="!isLoading">
        <div class="user-main">
            <div class="user-info" :style="{background: skinColor.replace(/\sl[\S\s]+/, '').replace(/(1)(\))/, '0.4$2')}">
                <div class="avatar user-info-avatar">
                    <span class="img-border" :style="{borderTopColor: skinColor.replace(/\sl[\S\s]+/, ''),
                    borderRightColor: skinColor.replace(/\sl[\S\s]+/, '')}"></span>
                    <img :src="user? user.avatar_url : ''" class="avatar-img" alt="">
                </div>
                <span class="user-name">{{ user.loginname}}</span>
                <span class="user-score">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    {{ user.score}}
                </span>
                <span class="user-github">
                    <i class="fa fa-github" aria-hidden="true"></i>
                    <a :href="`https://github.com/${user.githubUsername}`" class="title" target="new">
                        {{ user.githubUsername || 'github' }}
                    </a>
                </span>
                <span class="user-data">
                    <i class="fa fa-calendar" aria-hidden="true"></i>
                    {{ createTime(user.create_at) }}
                </span>
            </div>
            <div class="user-topic" :style="{borderColor: skinColor.replace(/\sl[\S\s]+/, '')}">
                <nav class="user-topic-nav" :style="{borderRightColor: skinColor.replace(/\sl[\S\s]+/, '').replace(/(1)(\))/, '0.4$2')}">
                    <ul class="topic-navs">
                        <li v-for="(nav, index) in navs" :key="index" class="topic-nav" 
                        :class="{active: currType === nav.tag}" 
                        :style="{borderRightColor: skinColor.replace(/\sl[\S\s]+/, ''),
                        borderTopColor: skinColor.replace(/\sl[\S\s]+/, '').replace(/(1)(\))/, '0.6$2'),
                        background: currType === nav.tag ? skinColor.replace(/\sl[\S\s]+/, '').replace(/(1)(\))/, '0.4$2'): '',
                        color: currType === nav.tag ? '' :skinColor.replace(/\sl[\S\s]+/, '')}"
                        @click="currType = nav.tag" >
                            <i class="fa" :class="nav.fa" aria-hidden="true"></i>
                            {{nav.name}}
                        </li>
                    </ul>
                </nav>
                <div class="user-topic-content">
                    <ul class="topic-contents">
                        <li class="topic-content"  v-for="(content, index) in contents" :key="index" v-show="content.tag === currType">
                            <div v-if="content.topic? content.topic.length: true">
                                <div class="topic-content-main" v-for="(topic, key) in content.topic" :key="key" 
                                    :style="{borderColor: skinColor.replace(/\sl[\S\s]+/, '')}" >  
                                    <div class="avatar topic-content-avatar">
                                        <router-link class="topic-user" :to="{name: 'User', params: {name: topic.author && topic.author.loginname}}"
                                        :title="topic.author.loginname">
                                            <span class="img-border" :style="{borderTopColor: skinColor.replace(/\sl[\S\s]+/, ''),
                                            borderRightColor: skinColor.replace(/\sl[\S\s]+/, '')}"></span>
                                            <img :src="topic.author? topic.author.avatar_url : ''" class="avatar-img" alt="">
                                        </router-link>
                                    </div>
                                    <div class="topic-content-title">
                                        <router-link class="title" :to="{name: 'Article', params: {id: topic.id}}">
                                            {{topic.title}}
                                        </router-link>
                                    </div>
                                    <div class="topic-brief-count">
                                        <span class="reply" v-show="topic.reply_count">
                                            <i class="fa fa-comment" aria-hidden="true"></i>{{topic.reply_count}}
                                        </span>
                                        <span class="visit" v-show="topic.visit_count">
                                            <i class="fa fa-eye" aria-hidden="true"></i>{{topic.visit_count}}
                                        </span>
                                        <span class="date"> 
                                            {{changeTime(topic.last_reply_at)}}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="topic-error-tip" v-else :style="{background: skinColor.replace(/\sl[\S\s]+/, '').replace(/(1)(\))/, '0.4$2')}">
                                该用户没有此类数据
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import './User.scss'
    import User from './User.js'
    export default User
</script>