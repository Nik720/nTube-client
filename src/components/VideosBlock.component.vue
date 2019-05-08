<template>
    <b-row>
        <b-col md="12">
            <b-card
                header-bg-variant="transparent"
                header=""
                class="rounded-0"
            >
                <b-row>
                    <video-card :video-detail="video" v-for="video of videoItems" :key="video.index"></video-card>
                </b-row>
            </b-card>
        </b-col>
    </b-row>
</template>

<script>
import videoCard from '@/components/VideoCard.component'
export default {
    name: 'videoListBlock',
    components : {
        videoCard
    },
    props: ['videoItems'],
    data () {
        return {

        }
    }
}
</script>


<style lang="scss" scoped>
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
