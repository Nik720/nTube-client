<template>
    <div>
        <b-modal id="modal-1" :title="videoTitle" ref="my-modal" size="lg" hide-footer @hidden="resetModal">
            <Media :kind="'video'" :src="video" controls autoplay id="videoPlayer" />
        </b-modal>
    </div>
</template>

<script>
import Media from '@dongido/vue-viaudio';
export default {
    name: 'videoModel',
    components: {
        Media
    },
    props : ['video', 'video-title'],
    data () {
        return {

        }
    },
    methods: {
        showModel() {
            this.$refs['my-modal'].show()
        },
        resetModal() {
            this.$parent.resetVideo()
        }
    }
}
</script>

<style lang="scss" scoped>
#videoPlayer {
    width: 100%;
}
</style>

