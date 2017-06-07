<template>
    <div class="loading">
        <i class="fa fa-spin fa-circle-o-notch" aria-hidden="true" 
        :style="{color:skinColor.replace(/\sl[\S\s]+/, '')}"></i>
    </div>
</template>

<script>
    import './AticleLoading.scss'
    import AticleLoading from './AticleLoading.js'
    export default AticleLoading
</script>