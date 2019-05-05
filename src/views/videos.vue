<template>
    <div>
        <b-navbar toggleable="lg" type="light" variant="light" fixed="top" class="p-0" >
            <b-container>
                <b-navbar-brand to="/videos">nTube</b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-nav-form class="py-2 navbar-form ml-sm-5">
                        <b-form-input size="md" class="mr-sm-2 search-box" placeholder="Search"></b-form-input>
                        <b-button size="md" class="my-2 my-sm-0 search-button rounded-0" type="submit">
                            <i class="fa fa-search"></i>
                        </b-button>
                    </b-nav-form>

                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item-dropdown right>
                            <template slot="button-content"><i class="fa fa-user"></i></template>
                            <b-dropdown-item href="#">Account</b-dropdown-item>
                            <b-dropdown-item href="#">Logout</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </b-collapse>
            </b-container>
        </b-navbar>

        <b-container class="mt-5 pt-4">
            <b-row>
                <b-col md="12">
                    <b-card
                        header-bg-variant="transparent"
                        header="Category"
                        class="rounded-0"
                    >
                        <b-row>
                            <b-col col md="3" sm="4" xs="6" class="video-grid">
                                <div class="video">
                                    <div class="thumbnail">
                                        <a href="#">
                                            <b-img src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img>
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

                            <b-col col md="3" sm="4" xs="6" class="video-grid">
                                <div class="video">
                                    <div class="thumbnail">
                                        <a href="#">
                                            <b-img src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img>
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

                            <b-col col md="3" sm="4" xs="6" class="video-grid">
                                <div class="video">
                                    <div class="thumbnail">
                                        <a href="#">
                                            <b-img src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img>
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

                            <b-col col md="3" sm="4" xs="6" class="video-grid">
                                <div class="video">
                                    <div class="thumbnail">
                                        <a href="#">
                                            <b-img src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img>
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

                            <b-col col md="3" sm="4" xs="6" class="video-grid">
                                <div class="video">
                                    <div class="thumbnail">
                                        <a href="#">
                                            <b-img src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img>
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

                            <b-col col md="3" sm="4" xs="6" class="video-grid">
                                <div class="video">
                                    <div class="thumbnail">
                                        <a href="#">
                                            <b-img src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img>
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
                        </b-row>
                    </b-card>
                </b-col>
            </b-row>

             <b-row>
                <b-col md="12">
                    <b-card
                        header-bg-variant="transparent"
                        header="Category"
                        class="rounded-0"
                    >
                        <b-row>
                            <b-col col md="3" sm="4" xs="6" class="video-grid">
                                <div class="video">
                                    <div class="thumbnail">
                                        <a href="#">
                                            <b-img src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img>
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

                            <b-col col md="3" sm="4" xs="6" class="video-grid">
                                <div class="video">
                                    <div class="thumbnail">
                                        <a href="#">
                                            <b-img src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img>
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

                            <b-col col md="3" sm="4" xs="6" class="video-grid">
                                <div class="video">
                                    <div class="thumbnail">
                                        <a href="#">
                                            <b-img src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img>
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

                            <b-col col md="3" sm="4" xs="6" class="video-grid">
                                <div class="video">
                                    <div class="thumbnail">
                                        <a href="#">
                                            <b-img src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img>
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

                            <b-col col md="3" sm="4" xs="6" class="video-grid">
                                <div class="video">
                                    <div class="thumbnail">
                                        <a href="#">
                                            <b-img src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img>
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

                            <b-col col md="3" sm="4" xs="6" class="video-grid">
                                <div class="video">
                                    <div class="thumbnail">
                                        <a href="#">
                                            <b-img src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img>
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
                        </b-row>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<style lang="scss" scoped>

.navbar {
    background-color: #ffffff !important;
    box-shadow: 1px 1px 3px #00000029;
    .navbar-form {
        width: 70%;
        .search-box {
            width: 80%;
            border-radius: 0;
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
            height: 36px;
            padding: 6px 12px;
            font-size: 14px;
            line-height: 1.6;
            color: #555555;
        }
        .search-button {
            background-color: #ffffff;
            padding: 6px 26px;
            border-color: #ccc;
            color: #636b6f;
        }
    }
    .navbar-nav {
        .nav-link {
            color: #777;
            padding: 16px 10px;
            &:hover,
            &:focus{
                background-color: #eeeeee;
                color: #555;
            }
        }
    }
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
