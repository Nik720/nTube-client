<template>
    <div>
        <c-header></c-header>

        <b-container class="mt-5 pt-4">

            <video-list-block v-for="i of 2" :key="i" ></video-list-block>

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

        }
    },
}
</script>


<style lang="scss" scoped>





</style>
