<template>
    <div class="article-detail">

    <div v-show="!isLoading" class="article-body">
      
      <div class="article-main">
        <div class="article-title">
            <div>
                <div class="article-tag">
                    <span class="tag" v-show="article.top || article.good" :style="{background:skinColor}">
                        {{article.top ? '置顶' : '精华'}}
                    </span>
                </div>
                <div class="title-ct">
                    <a class="title">
                        {{article.title}}
                    </a>
                </div>
             </div>
             <div class="article-desc">
                <div class="article-author">
                    <router-link class="title" :to="{name: 'User', params: {name: article.author && article.author.loginname}}">
                        <div class="avatar">
                                <span class="img-border" :style="{borderTopColor: skinColor.replace(/\sl[^\)]+\)/, ''),
                        borderRightColor: skinColor.replace(/\sl[^\)]+\)/, '')}"></span>
                                <img :src="article.author? article.author.avatar_url : ''" class="avatar-img" alt="">
                        </div>
                        {{article.author && article.author.loginname}}
                    </router-link> 
                </div>
                <div class="article-count">
                
                    <span class="reply">
                        <i class="fa fa-comment" aria-hidden="true"></i>{{article.reply_count}}
                    </span>
                    <span class="visit">
                        <i class="fa fa-eye" aria-hidden="true"></i>{{article.visit_count}}
                    </span>
                    <span class="date"> 
                        {{changeTime(article.last_reply_at)}}
                    </span>
                    <span class="tab">
                         来自 {{types[article.tab]}}
                    </span>
                </div>
            </div>
        </div>
        <div v-html="article.content" class="article-content" ref="articleContent"></div>
      </div>

      <div class="reply">

        <!--<div class="other">
          <div @click="collect" class="collect"><i :class="[isCollected ? 'collected' : 'collected-no']"></i>收藏文章</div>
          <div class="total-reply">{{article.reply_count}} 回复</div>
        </div>-->

       <!-- <div class="reply-input">
          <input v-model.trim="replyContent" type="text" placeholder="请输入回复内容">
          <button @click="reply('')" type="button">回复</button>
        </div>-->

        <!--<div v-for="(item, index) of replies" class="reply-item">

          <div class="reply-author">
            <div class="reply-avatar">
              <img :src="item.author.avatar_url" alt="">
              <div class="reply-desc">
                <router-link :to="{name: 'user', params: {name: item.author && item.author.loginname}}">{{item.author.loginname}}</router-link>
                  {{replies.length - index}}楼 • {{changeTime(item.create_at)}}
                  <span @click="currentIndex=index" class="reply-at">回复</span>
                  <i @click="ups(index, item.id, item)" :class="[item.ups.indexOf(userInfo.id) !== -1 ? 'ups-yes' : 'ups-no']" class="icon-reply-at"></i>
                  <span class="ups-count">{{ item.ups.length }}</span>
              </div>
            </div>
          </div>-->

       <!--   <div v-html="item.content" class="reply-content"></div>-->

         <!-- <transition name="slide-top">
            <div v-show="currentIndex===index" class="reply-one">
              <input type="text" name="" v-model.trim="replyOneContent" :placeholder="'@' + item.author.loginname">
              <button @click="reply(item.id, item.author.loginname)">回复</button>
              <button @click="currentIndex=null;replyOneContent=''">取消</button>
            </div>
          </transition>-->


        </div>

      </div>

    </div>

   <!-- <div class="back">
      <i @click.stop.prevent="$router.go(-1)" class="icon-back"></i>
    </div>-->

  </div>
</template>

<script>
    import './Article.scss'
    import Article from './Article.js'
    export default Article
</script>