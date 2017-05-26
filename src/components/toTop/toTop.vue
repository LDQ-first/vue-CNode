<template>
    <transition name="slide-bottom">
        <div v-show="isShowTop" class="top">
            <i @click.stop.prevent="toTop" class="fa fa-fighter-jet fa-rotate-270" aria-hidden="true"
            :style="{color:skinColor}"></i>
        </div>
    </transition>
</template>

<script>
    import './toTop.scss'
    import ToTop from './toTop.js'
    export default ToTop
</script>