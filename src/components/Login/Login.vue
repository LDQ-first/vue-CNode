<template>
    <div class="login">
        <div class="login-header" :style="{background:skinColor}">
            <i @click="showLogin" class="fa fa-chevron-left" aria-hidden="true"></i>登录
        </div>

        <div class="login-input text">
            <input v-model="AccessToken" type="text" placeholder="请输入Access Token">
            <span class="textBottom"></span>
            <!-- <button @click.stop.prevent="check(inputVal)">登录</button>-->
            <Buttons @click.stop.prevent="check(inputVal)" text="登录"></Buttons>
        </div>

        <div class="login-tips">
            <ul>
                <li>为了更好的体验请登录（づ￣3￣）づ╭❤～</li>
                <li>在<a class="title" href="https://cnodejs.org">CNode官网</a>登录CNode账号</li>
                <li>在<a class="title" href="https://cnodejs.org/setting">设置</a>中可以获取CNode账号的Access Token</li>
                <li><img src="../../assets/img/Access Token.jpg" alt="如何获取CNode账号的Access Token"></li>
            </ul>
        </div>
  </div>
</template>

<script>
    import './Login.scss'
    import Login from './Login.js'
    export default Login
</script>