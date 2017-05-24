<template>
     <nav class="skin clearfix">
        <span class="chooseSkin" @click="changeShowSkin(showSkin, !showSkin)" title="点击展示">皮肤</span>
        <transition name="skin-show">
            <ol class="clearfix" v-show="showSkin==true" >
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