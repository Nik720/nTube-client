<template>
    <div>
        <b-container class="mt-5 pt-4">

            <Media :kind="'video'" :src="activeVideo" controls autoplay id="videoPlayer" />

            <video-list-block :video-items="items"></video-list-block>

        </b-container>
    </div>
</template>

<script>
import videoListBlock from '@/components/VideosBlock.component'
import Media from '@dongido/vue-viaudio';
export default {
    name: 'videoDetail',
    components: {
        videoListBlock,
        Media
    },
    data () {
        return {
            items: [],
            activeVideo: ''
        }
    },
    mounted() {
        this.fetchVideoList(this.$route.params.id);
    },
    methods: {
        fetchVideoList(vid) {
            axios
            .get("api/videos")
            .then(response => {
                this.items = response.data.filter(video =>  video._id != vid )
            })
            .catch(error => {
                console.log(error);
            });
        },
        getImageUrl(imageId) {
            return `${this.API_ROOT}thumbnail/${imageId}`
        },
        setVideo(video) {
            this.activeVideo = `${this.API_ROOT}api/videoPlayback/${video}`
        }
    },
    beforeRouteUpdate (to, from, next) {
        this.setVideo(to.params.id)
        this.fetchVideoList(to.params.id);
        next()
    }
}
</script>


<style lang="scss" scoped>
#videoPlayer{
    width: 100%;
}
</style>
