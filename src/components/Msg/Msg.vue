<template>
   <div class="msg">
    <div class="msg-header" :style="{background:skinColor}">
      <i @click="hiddenMsg" class="fa fa-chevron-left" aria-hidden="true"></i>消息中心
    </div>

    <div class="msg-content">
      <div class="msg-read">
        <div v-for="(msgReadTab, index) in msgReadTabs" :key="index" class="msgReadTab" 
        :class="{active: tag === msgReadTab.tag}"  @click="changeTab(msgReadTab.tag)" 
        :style="{
            background: tag === msgReadTab.tag ? skinColor.replace(/\sl[\S\s]+/, '').replace(/(1)(\))/, '0.2$2') : '',
            borderBottomColor: skinColor.replace(/\sl[\S\s]+/, ''), 
        }" >
            <span class="title">{{msgReadTab.title}}</span>
            <span class="length" :style="{background:skinColor}">{{msgReadTab.messages}}</span>
        </div>
      </div>

        <div class="msg-list">
            <transition-group name="show">
                <div v-for="(item, index) of (tag === 'unread' ? msg.hasnot_read_messages : msg.has_read_messages)" 
                :key="index" class="msg-item">
                    <div class="msg-author-avatar">
                        <div class="avatar ">
                            <span class="img-border" :style="{borderTopColor: skinColor.replace(/\sl[\S\s]+/, ''),
                            borderRightColor: skinColor.replace(/\sl[\S\s]+/, '')}"></span>
                            <img :src="item ? item.author.avatar_url : ''" class="avatar-img" alt="">
                        </div> 
                    </div>
                    <div class="msg-reply">
                        <router-link  class="title" :to="{name: 'User', params: {name: item.author.loginname}}">
                            {{ item.author.loginname }}
                        </router-link>
                        回复你的话题
                        <router-link class="title" :to="{name: 'Article', params: {id: item.topic.id}}">
                            {{ item.topic.title }}
                        </router-link>
                        <div class="msg-data">
                            {{changeTime(item.create_at)}}                               
                        </div>
                    </div>
                </div>
            </transition-group>
        </div>
    </div>
  </div>
</template>

<script>
    import './Msg.scss'
    import Msg from './Msg.js'
    export default Msg
</script>