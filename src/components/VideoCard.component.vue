<template>
    <b-col cols="6" lg="3" md="3" sm="4" class="video-grid">
        <div class="video">
            <div class="thumbnail">
                <b-link :to="`/video/${videoDetail._id}/${videoDetail.slug}`">
                    <b-img fluid :src="getImageUrl(videoDetail.thumbnail)" alt="Image 1"></b-img>
                </b-link >
            </div>
            <div class="caption">
                <h3>
                    <b-link :to="`/video/${videoDetail._id}/${videoDetail.slug}`" class="">{{ videoDetail.title }}</b-link >
                </h3>
                <p>
                    <a href="#" class="">Randy Gil</a>
                    <br>
                    7 views &bull; {{ videoDetail.createdAt | moment("from", "now") }}
                </p>
            </div>
        </div>
    </b-col>
</template>

<script>
export default {
    name: 'videoCard',
    props: ['video-detail'],
    data () {
        return {

        }
    },
    methods: {
        getImageUrl(image) {
            return `${this.API_ROOT}thumbnail/${image}`
        },
    }
}
</script>


<style lang="scss" scoped>
.video-grid {
    .video {
        .thumbnail {
            background-color: #f1f1f1;
            padding: 0;
            margin-bottom: .5em;
            max-height: 141px;
            overflow: hidden;
            display: block;
            line-height: 1.6;
            border: 1px solid #ddd;
            border-radius: 0;
            -webkit-transition: border 0.2s ease-in-out;
            transition: border 0.2s ease-in-out;
        }
        .caption {
            h3 {
                margin-right: 20px;
                margin-top: 0;
                font-size: 14px;
                margin-bottom: 1px;
                max-width: 196px;
                font-weight: 500;
                a {
                    height: 2.6em;
                    display: block;
                    line-height: 1.3em;
                    overflow: hidden;
                    position: relative;
                    text-overflow: ellipsis;
                    white-space: normal;
                    word-wrap: break-word;
                    color: #004660;
                }
            }
            p {
                font-size: .85em;
                color: #919191;
                a {
                    color: #000;
                }
            }
        }
    }
    &:hover {
         box-shadow: 0px 5px 6px #07070712;
    }
}
</style>

