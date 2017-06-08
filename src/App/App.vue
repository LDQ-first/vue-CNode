<template>
  <div id="app">
    <transition name="loading" mode="out-in">
      <BeginLoading v-show="BeginLoading" @BeginLoading="BeginLoading=false"></BeginLoading>
    </transition>

    <Topbar></Topbar>

    <AsideMenu></AsideMenu>

    <NContent></NContent>

    <ToTop></ToTop>

    <transition name="show">
      <router-view name="login"></router-view>
    </transition>

    <transition name="show">
      <router-view name="msg"></router-view>
    </transition>

    <transition name="show">
      <router-view name="newArticle"></router-view>
    </transition>

    <transition name="show">
      <router-view name="about"></router-view>
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


