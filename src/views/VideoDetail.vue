<template>
    <div>
        <b-row>
            <b-col cols="12" lg="8" md="7" sm="12">
                <Media :kind="'video'" :src="activeVideo" autoPlay   controls  id="videoPlayer" />
                <b-card
                    header-bg-variant="transparent"
                    header=""
                    class="rounded-0"
                >
                    <b-row>
                        <b-col cols="12" lg="10" md="9" sm="9">
                            <h5 class="text-dark m-0">{{ activeVideoDetail[0].title }}</h5>
                        </b-col>
                        <b-col>
                            <h4 class="m-0">12 Views</h4>
                        </b-col>
                    </b-row>
                    <div class="desc-text">
                        <p>Publised on {{ activeVideoDetail[0].createdAt|moment('from', 'now') }}</p>
                        <p class="m-0">{{activeVideoDetail[0].description}}</p>
                    </div>

                </b-card>
            </b-col>
            <b-col cols="12" lg="4" md="5" sm="12">
                <b-card
                    header-bg-variant="transparent"
                    header=""
                    class="rounded-0"
                >
                <ul class="list-unstyled">
                    <div class="media-video clearfix mb-2" v-for="video of mostViewed" :key="video._id" :title="video.title">
                        <div class="thumbnail">
                            <b-link :to="`/video/${video._id}/${video.slug}`">
                                <b-img fluid :src="getImageUrl(video.thumbnail)" alt="Image 1"></b-img>
                            </b-link >
                        </div>
                        <div class="caption">
                            <b-link :to="`/video/${video._id}/${video.slug}`" class="">
                            <h3 class="m-0">
                                {{ video.title }}
                            </h3>
                            <p class="text-muted">
                                7 views &bull; {{ video.createdAt | moment("from", "now") }}
                            </p>
                            </b-link >
                        </div>
                    </div>
                </ul>
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
            mostViewed: [],
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
                 let videoList = []
                this.activeVideoDetail = response.data.filter(video =>  video._id == vid )
                videoList = response.data.filter(video =>  video._id != vid )
                this.mostViewed = videoList.slice(0,6)
                this.items = videoList.slice(6,videoList.length)
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
    height: 410px;
}
.media-video {
    .thumbnail {
        width: 120px;
        float: left;
        margin-right: 10px;
    }
    .caption {
        float: left;
        width: 177px;
        h3 {
            height: 2.6em;
            display: block;
            line-height: 1.3em;
            overflow: hidden;
            position: relative;
            text-overflow: ellipsis;
            white-space: normal;
            word-wrap: break-word;
            font-size: 14px;
        }
        p {
            font-size: 12px;
        }
    }
    clear: both;
}
.card {
    margin-bottom: 22px;
    background-color: #fff;
    border: 1px solid transparent;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.05);
    border-color: #f5f8fa;
    .card-header{
        padding: 10px 20px;
        color: #333333;
        border-color: #f5f8fa;
    }
    .desc-text {
        font-size: 13px;
    }
}
</style>
