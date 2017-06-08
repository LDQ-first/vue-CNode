<template>
    <transition name="toTop">
        <div v-show="isShowTop" class="top">
            <i @click.stop.prevent="toTop" class="fa fa-fighter-jet fa-rotate-270" aria-hidden="true"
            :style="{color:skinColor.replace(/\sl[\S\s]+/, '')}"></i>
        </div>
    </transition>
</template>

<script>
    import './toTop.scss'
    import ToTop from './toTop.js'
    export default ToTop
</script>