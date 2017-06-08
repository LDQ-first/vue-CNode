<template>
    <div id="beginLoading">
        <div class="loading">
             <div class="logoImg">
                <img src="../../../static/img/cnodejs_light.svg">
            </div>
            <canvas id="canvas" width="200" height="200"  ref="canvasLoading"></canvas>
        </div>
        <canvas  id="particles"></canvas>
    </div>
</template>

<script>
    import './beginLoading.scss'
    import beginLoading from './beginLoading.js'
    export default beginLoading
</script>