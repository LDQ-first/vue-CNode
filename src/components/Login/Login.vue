<template>
    <div class="login">
        <div class="login-header" :style="{background:skinColor}">
            <i @click="showLogin" class="fa fa-chevron-left" aria-hidden="true"></i>登录
        </div>

        <div class="login-input">
            <div class="text">
                <input v-model="accessToken" type="text" placeholder="请输入Access Token">
                <span class="textBottom"></span>
            </div>
            <Buttons @click="login(accessToken)" text="登录" :style="{background:skinColor}"></Buttons>
         </div>

        <div class="login-tips">
            <ul class="tips">
                <li class="tip">为了更好的体验请登录<br class="br"/><b>（づ￣3￣）づ╭❤～</b></li>
                <li class="tip">在<a class="title" href="https://cnodejs.org">CNode官网</a>登录CNode账号</li>
                <li class="tip">在<a class="title" href="https://cnodejs.org/setting">设置</a>中可以获取CNode账号的Access Token</li>
                <li class="tip"><img class="accessTokenImg" src="../../assets/img/Access Token.jpg" alt="如何获取CNode账号的Access Token"></li>
            </ul>
        </div>
  </div>
</template>

<script>
    import './Login.scss'
    import Login from './Login.js'
    export default Login
</script>