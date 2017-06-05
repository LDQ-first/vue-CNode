<template>
    <div class="new-article">
        <div class="new-article-header" :style="{background:skinColor}">
            <i @click="hiddenNewArticle" class="fa fa-chevron-left" aria-hidden="true"></i>新建话题
        </div>

        <div class="new-article-content">
            <div class="new-article-type">
                <span>请选择主题类别:</span>
                <select v-model.trim = "newArticleType">
                    <option  v-for="(opt, index) in  types" :key="index">{{opt}}</option>
                </select>
            </div>

            <div class="new-article-title text">
                <input v-model.trim="newArticleTitle" type="text" class="title-input" pattern=".{10,}"
                placeholder="请输入标题，不少于十个字符(去除前后空格)">
                <span class="textBottom"></span>
            </div>

            <div class="new-article-body">
                <!--<textarea v-model="newArticleContent" placeholder="请输入内容"></textarea>-->
                <Reply placeholderOpt='请发表主题 (づ｡◕ᴗᴗ◕｡)づ' isShowclose="false" :btnText="'发布'"></Reply>
            </div>

            <!--<div class="new-article-send">
                <Buttons @click="sendNewArticle" text="发布"></Buttons>
            </div>-->
        </div>
   </div>
</template>

<script>
    import './NewArticle.scss'
    import NewArticle from './NewArticle.js'
    export default NewArticle
</script>