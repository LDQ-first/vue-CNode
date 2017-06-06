<template>
    <transition name="slide-top">
        <div class="replay-modal">
            <div class="modal-header">
                <h4 class="modal-title">回复</h4>
                <Close  @close="hiddenReplay" v-show="isShowClose"></Close>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label for="reply" aria-hidden="true"></label>
                    <textarea name="post" id="reply" class="replys" ref="reply"></textarea>
                </div>
            </div>
            <div class="modal-footer">
                <Buttons @click="reply(mde)" :text="text" :style="{background:skinColor}"></Buttons>
            </div>
        </div>
    </transition>
</template>

<script>
    import './Reply.scss'
    import Reply from './Reply.js'
    export default Reply
</script>