<template>
  <!-- <button class="btns" @click="click" @mouseenter="mouseenter" @mouseleave="mouseleave" ref="btns">-->
   <button class="btns" @click="click" ref="btns"  @mouseenter="mouseenter" @mouseleave="mouseleave">
       {{text}}
       <canvas id="canvas" @click="press" ref="btnCan" @mouseenter="can" ></canvas>
       <slot></slot>
   </button>
</template>

<script>
    import './button.scss'
    import buttons from './button.js'
    export default buttons
</script>