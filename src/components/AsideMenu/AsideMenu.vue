<template>
    <transition name="slide-left">
         <div class="aside-menu" v-show="isShowAsideMenu">
             <div class="menu">
                 <div class="user" >
                      <Close @close="hiddenAsideMenu"></Close>
                      <Buttons class="user-avatar" @click="showLogin">
                        <img :src="userInfo.avatar_url" >
                      </Buttons>
                      <div class="username">
                          {{userInfo.success ? userInfo.loginname : '点击头像登录'}}
                      </div>
                 </div>
                 <div class="options">
                    <Buttons @click="showMsg" class="option">
                        <i class="fa fa-volume-up" aria-hidden="true"></i>
                        <span class="option-text">我的消息</span>
                    </Buttons>
                    <Buttons @click="showNewArticle" class="option bg-green">
                        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                        <span class="option-text">发布话题</span>
                    </Buttons>
                    <Buttons @click="showInfo" class="option bg-yellow">
                        <i class="fa fa-user-o" aria-hidden="true"></i>
                        <span class="option-text">个人中心</span>
                    </Buttons>
                    <Buttons @click="showAbout" class="option bg-orange">
                        <i class="fa fa-info-circle" aria-hidden="true"></i>
                        <span class="option-text">关于</span>
                    </Buttons>
                </div>
                <SkinColor></SkinColor>
             </div>
             <div @click="hiddenAsideMenu" class="mask"></div>
        </div>
    </transition>
</template>

<script>
    import './AsideMenu.scss'
    import AsideMenu from './AsideMenu.js'
    export default AsideMenu
</script>