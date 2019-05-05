<template>
    <router-view></router-view>
</template>

<script>
export default {
}
</script>

<style lang="scss">
    /* Import Font Awesome Icons Set */
    $fa-font-path: '~font-awesome/fonts/';
    @import '~font-awesome/scss/font-awesome.scss';

    // Import bootstrap.css
    @import "~bootstrap/dist/css/bootstrap.min.css";

    // Import Main styles for this application
    @import 'assets/scss/style';
    body {
        color: #636b6f;
        background-color: #f5f8fa;
    }

</style>
