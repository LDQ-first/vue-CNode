<template>
    <div class="about">
      <div class="about-header" :style="{background:skinColor}">
            <i @click="hiddenAbout" class="fa fa-chevron-left" aria-hidden="true"></i>关于
        </div>
      <div class="about-content">
        <h2 class="about-content-title">Vue.js打造一个开源的CNode社区</h2>
        <p class="skill-title"><b>技术栈</b>：</p>
        <ul class="skills">
            <li v-for="(skill, index) in skills" :key="index" class="skill">
                <span class="name">{{skill.name}}</span>
                <span class="des" v-show="skill.des">{{[skill.des]}}</span>
            </li>
        </ul>
      </div>
       
         
    </div>
</template>

<script>
    import './About.scss'
    import About from './About.js'
    export default About
</script>