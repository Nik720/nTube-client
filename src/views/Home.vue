<template>
    <div>
        <c-header></c-header>
        <b-container class="mt-5 pt-4">
            <router-view ></router-view>
        </b-container>
    </div>
</template>

<script>
import cHeader from '@/components/Header.component'
export default {
    name: 'Home',
    components: {
        cHeader
    },
    data () {
        return {
        }
    },

}
</script>


<style lang="scss" scoped>

</style>
