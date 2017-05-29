<template>
    <div class="user-center">
        <div class="user-main">
            <div class="user-info" :style="{background:skinColor.replace(/(1)(\)\s)/, '0.4$2').replace(/\sl[\S\s]+/, '')}">
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
            </div>
        </div>
    </div>
</template>

<script>
    import './User.scss'
    import User from './User.js'
    export default User
</script>