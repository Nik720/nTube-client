<template>
    <div>
        <b-row>
            <b-col cols="12" lg="8" md="7" sm="12">
                <Media :kind="'video'" :src="activeVideo" controls autoplay id="videoPlayer" />
            <b-card
                header-bg-variant="transparent"
                :header="activeVideoDetail[0].title"
                class="rounded-0"
            >
                {{activeVideoDetail[0].description}}
            </b-card>
            </b-col>
            <b-col cols="12" lg="4" md="5" sm="12">
                <b-card
                    header-bg-variant="transparent"
                    :header="activeVideoDetail[0].title"
                    class="rounded-0"
                >
                   {{activeVideoDetail[0].description}}
                </b-card>
            </b-col>
        </b-row>

        <video-list-block :video-items="items"></video-list-block>

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
            activeVideo: '',
            activeVideoDetail : {}

        }
    },
    mounted() {
        this.fetchVideoList(this.$route.params.id);
        this.setVideo(this.$route.params.id)
    },
    methods: {
        fetchVideoList(vid) {
            axios
            .get("api/videos")
            .then(response => {
                this.activeVideoDetail = response.data.filter(video =>  video._id == vid )
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
.card {
    margin-bottom: 22px;
    background-color: #fff;
    border: 1px solid transparent;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
    border-color: #f5f8fa;
    .card-header{
        padding: 10px 20px;
        color: #333333;
        border-color: #f5f8fa;
    }
}
</style>
