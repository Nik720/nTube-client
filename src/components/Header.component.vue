<template>
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
</template>

<script>
export default {
    name: 'cHeader'
}
</script>

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
</style>


