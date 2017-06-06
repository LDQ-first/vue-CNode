<template>
     <nav class="skin clearfix">
        <Buttons class="chooseSkin" @click="changeShowSkin(!isShowSkin)" title="点击展示" text="皮肤"></Buttons>
        <transition name="skin-show">
            <ol class="clearfix" v-show="isShowSkin==true" >
                <li v-for="(color, key) in skinColors" :key="key" @click="bounce($event)" >
                    <Buttons class="color" @click="changeSkinColor(color)" :style="{background: color}" ref="color"></Buttons>
                </li>
            </ol>
        </transition>
    </nav>
</template>

<script>
    import './skinColor.scss'
    import skinColor from './skinColor.js'
    export default skinColor
</script>