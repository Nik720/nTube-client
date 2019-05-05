<template>
    <b-col col md="3" sm="4" xs="6" class="video-grid">
        <div class="video">
            <div class="thumbnail">
                <a href="#">
                    <b-img fluid src="https://picsum.photos/250/250/?image=53" alt="Image 1"></b-img>
                </a>
            </div>
            <div class="caption">
                <h3>
                    <a href="#/video/380/high-hopes" class="">High Hopes</a>
                </h3>
                <p>
                    <a href="#/channel/239/randy-gil" class="">Randy Gil</a> <br>  7 views • 4 days ago
                </p>
            </div>
        </div>
    </b-col>
</template>

<script>
export default {
    name: 'videoCard',
    components : {

    },
    data () {
        return {

        }
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
}
</style>

