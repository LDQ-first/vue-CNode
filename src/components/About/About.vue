<template>
    <div class="about">
      <div class="about-header" :style="{background:skinColor}">
            <i @click="hiddenAbout" class="fa fa-chevron-left" aria-hidden="true"></i>关于
        </div>
      <div class="about-content">
        <h2 class="about-content-title">Vue全家桶开发开源的CNode社区</h2>
        <p class="skill-title"><b>技术栈</b>：</p>
        <ul class="skills" :style="{borderLeftColor: skinColor.replace(/\sl[\S\s]+/, '').replace(/(1)(\))/, '0.4$2')}">
            <li v-for="(skill, index) in skills" :key="index" class="skill" :class="{active: index === skillIndex}" @click="skillClick(index)"
            :style="{background: index === skillIndex ? skinColor.replace(/\sl[\S\s]+/, '').replace(/(1)(\))/, '0.4$2'): '',
                    borderRightColor: skinColor.replace(/\sl[\S\s]+/, '')}">
                <span class="name">{{skill.name}}</span>
                <span class="des" v-show="skill.des">[ {{skill.des}} ]</span>
            </li>
        </ul>
        <div class="project">
             <p class="link"><b>项目地址: </b><a class="title" href="https://github.com/LDQ-first/vue-CNode-1">GitHub</a></p>
             <p class="link"><b>反馈: </b><a class="title" href="https://github.com/LDQ-first/vue-CNode-1/issues">Issues</a></p>
             <p class="state"><b>声明: </b>本项目只供学习使用，请不要用作任何商业用途。</p>
        </div>
      </div>
    </div>
</template>

<script>
    import './About.scss'
    import About from './About.js'
    export default About
</script>