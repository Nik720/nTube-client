<template>
    <div>
        <c-header></c-header>

        <b-container class="mt-5 pt-4">

            <video-list-block :video-items="items"></video-list-block>

        </b-container>
    </div>
</template>

<script>
import cHeader from '@/components/Header.component'
import videoListBlock from '@/components/VideosBlock.component'
export default {
    name: 'videos',
    components: {
        cHeader,
        videoListBlock
    },
    data () {
        return {
            items: []
        }
    },
    mounted() {
        this.fetchVideoList();
    },
    methods: {
        fetchVideoList() {
            axios
            .get("api/videos")
            .then(response => {
                this.items = response.data;
            })
            .catch(error => {
                console.log(error);
            });
        },
        getImageUrl(imageId) {
            return `${this.API_ROOT}thumbnail/${imageId}`
        },
        loadVideoModel(video) {
            this.videoLink = `${this.API_ROOT}api/videoPlayback/${video._id}`
            this.videoTitle = video.title
            this.$refs.videoModelRef.showModel()
        }
    }
}
</script>


<style lang="scss" scoped>





</style>
