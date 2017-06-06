<template>
    <div class="Topbar" :style="{background:skinColor}">
        <div class="title">
            <i class="fa fa-bars" aria-hidden="true" 
            @click.stop.prevent="showAsideMenu"></i>
            <h1 class="logo" title="CNode">
                <span class="logo-text color-blue">C</span>
                <span class="logo-text color-red">N</span>
                <span class="logo-text color-yellow">o</span>
                <span class="logo-text color-green">d</span>
                <span class="logo-text color-orange">e</span>
            </h1>
            <span class="hasMsg" @click.stop.prevent="showAsideMenu">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <span v-show="at" class="msg-count" >{{msgCount}}</span>
            </span>
        </div>
    </div>
</template>

<script>
    import './Topbar.scss'
    import Topbar from './Topbar.js'
    export default Topbar
</script>