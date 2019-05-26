<template>
    <b-navbar toggleable="lg" type="light" variant="light" fixed="top" class="p-0" >
        <b-container>
            <b-navbar-brand to="/">nTube</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-nav-form class="py-2 navbar-form ml-sm-5" v-on:submit.prevent="searchVideos">
                    <b-form-input size="md" class="search-box" placeholder="Search" v-model="searchQuery" autocomplete="off"></b-form-input>
                    <div class="search-result-box" v-if="searchResult.length > 0">
                        <ul class="list">
                            <li v-for="result of searchResult" :key="result.index">
                                <b-link :to="`/video/${result._id}/${result.slug}`" class="">{{ result.title }}</b-link >
                            </li>
                        </ul>
                    </div>
                    <b-button size="md" class="my-2 my-sm-0 search-button rounded-0" type="button" @click="searchVideos()">
                        <i class="fa fa-search"></i>
                    </b-button>
                </b-nav-form>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown right>
                        <template slot="button-content"><i class="fa fa-user"></i></template>
                        <b-dropdown-item href="#">Hi {{ getUsername }}</b-dropdown-item>
                        <b-dropdown-item href="javascript:void(0)" @click="logout()">Logout</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
</template>

<script>
export default {
    name: 'cHeader',
    data: () => {
        return {
            username: '',
            searchQuery: '',
            searchResult: []
        }
    },
    computed: {
        getUsername() {
            if (localStorage.getItem('nTube.user')  != null) {
                let user = localStorage.getItem('nTube.user');
                user = JSON.parse(localStorage.getItem('nTube.user'));
                return user.username;
            }
        }
    },
    mounted() {
        if (localStorage.getItem('nTube.user') == null) {
            this.fetchUserDetail();
        }
    },
    methods: {
        fetchUserDetail() {
            axios.get(`api/activeUser`)
            .then(response => {
                let user = response.data
                this.username = user.username
                localStorage.setItem('nTube.user', JSON.stringify(user))
            })
            .catch(error => {
                console.log(error);
            });
        },
        logout() {
            localStorage.removeItem('nTube.jwt')
            localStorage.removeItem('nTube.user')
            this.$router.replace('/login')
        },
        searchVideos() {
             axios.get(`api/videos/search?q=${this.searchQuery}`)
            .then(response => {
                this.searchResult = response.data

            })
            .catch(error => {
                console.log(error)
            });
        },
        clearSearch() {
            this.searchQuery = ''
            this.searchResult = ''
        }
    }
}
</script>

<style lang="scss" scoped>
.navbar {
    background-color: #ffffff !important;
    box-shadow: 1px 1px 3px #00000029;
    .navbar-form {
        width: 70%;
        position: relative;
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
            padding: 7px 26px;
            border-color: #ccc;
            color: #636b6f;
        }
        .search-result-box{
            position: absolute;
            top: 45px;
            z-index: 11111;
            background: #fff;
            width: 89%;
            border: 1px solid #e9e9e9;
            border-top: none;
            ul{
                list-style: none;
                padding: 0;
                margin: 0;
                li{
                    padding: 3px 10px;
                    &:hover{
                        background: #f4f4f4;
                    }
                }
            }
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
</style>


