<template>
    <div>
        <video-list-block :video-items="items"></video-list-block>
    </div>
</template>

<script>
import videoListBlock from '@/components/VideosBlock.component'
export default {
    name: 'videos',
    components: {
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
        }
    }
}
</script>


<style lang="scss" scoped>





</style>
