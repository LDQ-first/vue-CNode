<template>
  <div id="app">
    <Topbar></Topbar>

    <AsideMenu></AsideMenu>

    <NContent></NContent>

    <ToTop></ToTop>

    <transition name="show">
      <Login v-if="isShowLogin"></Login>
    </transition>

  <!--  <transition name="show">
      <router-view name="login"></router-view>
    </transition>-->

    <transition name="show">
      <Info v-if="isShowInfo"></Info>
    </transition>

    <transition name="show">
      <Msg v-if="isShowMsg"></Msg>
    </transition>

    <transition name="show">
      <NewArticle v-if="isShowNewArticle"></NewArticle>
    </transition>
    
    <transition name="show">
      <About v-if="isShowAbout"></About>
    </transition>
  </div>
</template>

<script>
  import 'normalize.css/normalize.css'
  import 'font-awesome/css/font-awesome.min.css'
  import '../assets/style/reset.scss'
  
  
  import './App.scss'
  import App from './App.js'
  export default App
</script>


