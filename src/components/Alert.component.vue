<template>
    <div class="alert-div">
        <div :class="'alert alert-' + type" role="alert" v-if="type">
            <Strong>{{ type.toUpperCase() }}!</Strong> {{ alertMessage }}
        </div>
    </div>

</template>

<script>
    export default {
        props: ['alertMessage', 'alertType'],
        data () {
            return {
                type: this.alertType
            }
        },
        watch: {
            alertType: function(newVal, oldVal) {
                setTimeout(() => {
                    this.type = false,
                    this.alertMessage = ''
                },1000);
            }
        }
    }
</script>
