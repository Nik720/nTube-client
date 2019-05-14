<template>
    <div class="loader" v-show="loaderShow">
         <b-spinner class="spnr" label="Loading..."></b-spinner>
    </div>
</template>

<script>
export default {
    name: 'loader',
    props: ['loaderShow'],
    data () {
        return {
        }
    }
}
</script>

<style lang="scss" scoped>
.loader{
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 11000;
    background-color: #0000001c;
    text-align: center;
    .spnr{
        position: absolute;
        top: 50%;
    }
}
</style>
