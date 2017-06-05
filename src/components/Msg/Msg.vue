<template>
   <div class="msg">
    <div class="msg-header" :style="{background:skinColor}">
      <i @click="hiddenMsg" class="fa fa-chevron-left" aria-hidden="true"></i>消息中心
    </div>

    <div class="msg-content">
      <div class="msg-read">
        <div :class="{selected: isOnRead}" @click="changeTab(true)" class="has-no">
          未读消息: {{ msg.hasnot_read_messages.length }}
        </div>
        <div :class="{selected: !isOnRead}" @click="changeTab(false)" class="has">
          已读消息: {{ msg.has_read_messages.length }}
        </div>
      </div>

        <div class="msg-list">
            <transition-group name="show">
                <div v-for="(item, index) of (isOnRead ? msg.hasnot_read_messages : msg.has_read_messages)" :key="item.id+index" class="msg-item">
                    <div class="msg-body">
                    <div class="msg-name">
                        <span @click="view">
                            <router-link  :to="{name: 'User', params: {name: item.author.loginname}}">{{ item.author.loginname }}</router-link>
                        </span> 的回复
                    </div>
                    <div v-html="item.reply.content" class="msg-msg"></div>
                    <div @click="view">
                        <div class="msg-from">
                            <router-link  :to="{name: 'Article', params: {id: item.topic.id}}">
                                来自：{{ item.topic.title }}
                            </router-link>
                        </div>
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