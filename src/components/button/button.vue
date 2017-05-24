<template>
   <button class="btns" @click="click" @mouseenter="mouseenter" @mouseleave="mouseleave" ref="btns">
       {{text}}
       <canvas id="canvas" @click="press" ></canvas>
       <slot></slot>
   </button>
</template>

<script>
    import './button.scss'
    import buttons from './button.js'
    export default buttons
</script>