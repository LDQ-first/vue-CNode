<template>
    <div class="article-detail" v-show="!isLoading">
    <div  class="article-body" v-if="hasArticle" ref="articleBody">   
      <div class="article-main" >
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
            <span class="article-collect">
                <i class="fa" :class="[isCollected ? 'fa-star' : 'fa-star-o']" aria-hidden="true"></i>收藏主题
            </span>
             <span class="total-reply">评论数：{{article.replies ? article.replies.length: ''}} </span>
        </div>
        
     </div>
      <div class="article-reply" ref="articleReply">
          <Reply isShowclose="false" placeholderOpt='请登录后再发表评论 (・ω・)' class="article-reply-input"></Reply>
          
        <!--<div class="article-reply-input">
          <textarea v-model.trim="replyContent" type="text" placeholder="请发表评论 (・ω・)"
          :style="{borderColor: skinColor.replace(/\sl[\S\s]+/, '')}"></textarea>
           <Buttons @click="reply('')" text="回复" :style="{background:skinColor}"></Buttons>
        </div>-->
        <div class="article-reply-handle">
            
             <span class="sort-reply">
                 <span class="button-group">
                     <Buttons @click="sort($event,'normal')" :class="{active: sortWay === 'normal'}" text="默认" :style="{background:skinColor}"></Buttons>
                     <Buttons @click="sort($event, 'farthest')" :class="{active: sortWay === 'farthest'}" text="最早" :style="{background:skinColor}"></Buttons>
                     <Buttons @click="sort($event, 'ups')" :class="{active: sortWay === 'ups'}" text="赞数" :style="{background:skinColor}"></Buttons>
                 </span>
             </span>
        </div>
            <transition-group>
            <div v-for="(item, index) of replies" :key="index" class="article-reply-item" :style="{borderColor: skinColor.replace(/\sl[\S\s]+/, '')}">
                <div class="article-reply-author">
                    <div class="article-reply-avatar">
                        <div class="article-reply-desc">
                            <router-link class="title" :to="{name: 'User', params: {name: item.author.loginname}}">
                                <div class="avatar">
                                    <span class="img-border" :style="{borderTopColor: skinColor.replace(/\sl[\S\s]+/, ''),
                                    borderRightColor: skinColor.replace(/\sl[\S\s]+/, '')}"></span>
                                    <img :src="item.author? item.author.avatar_url : ''" class="avatar-img" alt="">
                                </div>
                                {{item.author.loginname}}
                            </router-link>
                            <span class="article-reply-index">
                                {{index + 1}}楼
                            </span>
                            <span class="article-reply-option">
                                <span @click="currentIndex=index" class="article-reply-at" :style="{background:skinColor}">回复</span>
                                <i @click="ups(index, item.id, item)" :class="[item.ups.indexOf(userInfo.id) !== -1 ? 'fa-thumbs-up' : 'fa-thumbs-o-up']" 
                                class="icon-reply-at fa"></i>
                                <span class="ups-count">{{ item.ups.length }}</span>
                            </span>
                        </div>
                    </div>
                    <div v-html="item.content" class="article-reply-content"></div>
                    <span class="article-reply-data">
                        {{changeTime(item.create_at)}}
                    </span>
                </div>   
                <Reply v-show="currentIndex===index" :loginnmaeOpt="item.author.loginname" :item="item" @hiddenReplay="hiddenReplay"></Reply>
                <!--<transition name="slide-top">
                    <div v-show="currentIndex===index" class="reply-one">
                    <input type="text" name="" v-model.trim="replyOneContent" :placeholder="'@' + item.author.loginname">
                    <button @click="reply(item.id, item.author.loginname)">回复</button>
                    <button @click="currentIndex=null;replyOneContent=''">取消</button>
                    </div>
                </transition>-->
            </div>
            </transition-group>
        
      </div>
    </div>
    <div class="article-error" v-else :style="{background: skinColor.replace(/\sl[\S\s]+/, '').replace(/(1)(\))/, '0.4$2')}">
        文章不存在, {{ time }} 秒后返回首页
    </div>
     <transition name="slide-in">
        <div class="preview-modal"  aria-hidden="false" v-show="modalImgSrc">
            <div class="modal-body" style="max-height: initial;">
                <header>
                    <h3 class="modal-title">手机浏览时横屏更佳</h3>
                    <Close @close="modalImgSrc=''"></Close>
                </header>
                <img :src="modalImgSrc" class="modal-image">
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