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
                            <span class="img-border" :style="{borderTopColor: skinColor.replace(/\sl[\S\s]+/, ''),
                            borderRightColor: skinColor.replace(/\sl[\S\s]+/, '')}"></span>
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
      <div class="other">
        <div @click="collect" class="collect">
            <i class="fa" :class="[isCollected ? 'fa-star' : 'fa-star-o']" aria-hidden="true"></i>收藏文章
        </div>
        <!-- <div class="total-reply">{{article.reply_count}} 回复</div>-->
     </div>
      <div class="article-reply" ref="articleReply">
        
        <div class="article-reply-input">
          <textarea v-model.trim="replyContent" type="text" placeholder="请发表评论 (・ω・)"
          :style="{borderColor: skinColor.replace(/\sl[\S\s]+/, '')}"></textarea>
           <!--<button @click="reply('')" type="button">回复</button>-->
           <Buttons @click="reply('')" text="回复" :style="{background:skinColor}"></Buttons>
        </div>
        <div v-for="(item, index) of replies" class="article-reply-item" :style="{borderColor: skinColor.replace(/\sl[\S\s]+/, '')}">
          <div class="article-reply-author">
            <div class="article-reply-avatar">
             <!-- <img :src="item.author? item.author.avatar_url : ''" alt="">-->
              <div class="article-reply-desc">
                <router-link class="title" :to="{name: 'User', params: {name: item.author && item.author.loginname}}">
                    <div class="avatar">
                        <span class="img-border" :style="{borderTopColor: skinColor.replace(/\sl[\S\s]+/, ''),
                        borderRightColor: skinColor.replace(/\sl[\S\s]+/, '')}"></span>
                        <img :src="item.author? item.author.avatar_url : ''" class="avatar-img" alt="">
                    </div>
                    {{item.author.loginname}}
                </router-link>
                <span class="article-reply-index">
                  {{replies.length - index}}楼
                </span>
                <span class="article-reply-option">
                    <span @click="currentIndex=index" class="article-reply-at">回复</span>
                    <i @click="ups(index, item.id, item)" :class="[item.ups.indexOf(userInfo.id) !== -1 ? 'fa-thumbs-up' : 'fa-thumbs-o-up']" 
                    class="icon-reply-at fa"></i>
                    <span class="ups-count">{{ item.ups.length }}</span>
                </span>
              </div>
            </div>
          </div>
          <div v-html="item.content" class="article-reply-content"></div>
          <span class="article-reply-data">
             {{changeTime(item.create_at)}}
          </span>
        </div>
      </div>
    </div>
     <transition name="slide-in">
        <div class="preview-modal"  aria-hidden="false" v-show="modalImgSrc">
            <div class="modal-body" style="max-height: initial;">
                <Close @close="modalImgSrc=''"></Close>
                <img :src="modalImgSrc" class="preview-image">
            </div>
        </div>
    </transition>
    <div class="back">
      <i class="fa fa-chevron-left" @click.stop.prevent="$router.go(-1)" aria-hidden="true"
      :style="{color: skinColor.replace(/\sl[\S\s]+/, '')}"></i>
    </div>
  </div>
</template>

<script>
    import './Article.scss'
    import Article from './Article.js'
    export default Article
</script>