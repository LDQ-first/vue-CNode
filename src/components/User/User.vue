<template>
    <div class="user-center">
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
                <nav class="user-topic-nav" :style="{borderColor: skinColor.replace(/\sl[\S\s]+/, '').replace(/(1)(\))/, '0.4$2')}">
                    <ul class="topic-navs">
                        <li v-for="(nav, index) in navs" :key="index" class="topic-nav" 
                        :class="{active: currType === nav.tag}" 
                        :style="{borderRightColor: skinColor.replace(/\sl[\S\s]+/, ''),
                        borderTopColor: skinColor.replace(/\sl[\S\s]+/, '').replace(/(1)(\))/, '0.6$2'),
                        background: currType === nav.tag ? skinColor.replace(/\sl[\S\s]+/, '').replace(/(1)(\))/, '0.4$2'): '',
                        color: currType === nav.tag ? '' :skinColor.replace(/\sl[\S\s]+/, '')}">
                            {{nav.name}}
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
    import './User.scss'
    import User from './User.js'
    export default User
</script>