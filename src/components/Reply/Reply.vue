<template>
    <transition name="slide-top">
        <div class="replay-modal">
            <div class="modal-header">
                <!--<button type="button" class="close" @click.stop="close">
                <span aria-hidden="true">×</span>
                </button>-->
                <Close  @close="hiddenReplay" v-show="isShowClose"></Close>
                <h4 class="modal-title">回复</h4>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label for="reply" aria-hidden="true"></label>
                    <textarea name="post" id="reply"></textarea>
                </div>
            </div>
            <div class="modal-footer">
               <!-- <button class="btn btn-default"  :disabled="state === 'posting'">
                {{ state === 'posting' ? '回复中...' : '回复' }}
                </button>-->
                <Button @click="reply" text="回复"></Button>
            </div>
        </div>
    </transition>
</template>

<script>
    import './Reply.scss'
    import Reply from './Reply.js'
    export default Reply
</script>