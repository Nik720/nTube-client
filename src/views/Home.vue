<template>
    <div>
        <c-header></c-header>
        <router-view ></router-view>
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
