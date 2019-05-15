<template>
    <b-row class="justify-content-md-center">
        <b-col md="8" sm="10" xs="12" md-pull-left="2">
            <alert :alert-message="alertMessage" :alert-type="alertType" v-if="isAlertActive"></alert>
            <b-card>
                <div slot="header">
                    <strong>Edit Video Details</strong>
                </div>
                <b-form @submit="onSubmit" @reset="onReset">
                    <b-form-group
                        label="Title"
                        label-for="title"
                        :label-cols="3"
                        :horizontal="true"
                    >
                        <b-form-input
                            id="title"
                            v-model="form.title"
                            type="text"
                            placeholder="Title"
                            :class="errors.title.type !== '' ? 'is-invalid' : '' "
                        ></b-form-input>
                        <b-form-invalid-feedback :state="true">{{ errors.title.message }}</b-form-invalid-feedback>
                    </b-form-group>

                    <b-form-group
                        label="Description"
                        label-for="description"
                        :label-cols="3"
                        :horizontal="true"
                    >
                         <b-form-textarea
                            id="description"
                            v-model="form.description"
                            placeholder="Enter Description..."
                            rows="3"
                            max-rows="6"
                            :class="errors.description.type !== '' ? 'is-invalid' : '' "
                        ></b-form-textarea>
                        <b-form-invalid-feedback :state="true">{{ errors.description.message }}</b-form-invalid-feedback>
                    </b-form-group>

                    <div slot="footer" class="text-center">
                        <b-button type="submit" size="sm" variant="primary" class="mr-2">
                            <i class="fa fa-dot-circle-o"></i> Submit
                        </b-button>
                        <b-button type="reset" size="sm" variant="danger">
                            <i class="fa fa-ban"></i> Reset
                        </b-button>
                    </div>
                </b-form>
            </b-card>
        </b-col>
    </b-row>
</template>

<script>
import Alert from '@/components/Alert.component'
export default {
    name: "editVideo",
    components: {
        Alert
    },
    data: () => {
        return {
            rolesOption : [],
            form: {
                title: '',
                description: ''
            },
            errors: {
                title: {
                    type: '',
                    message: ''
                },
                description: {
                    type: '',
                    message: ''
                }
            },
            fields: ['title', 'description'],
            alertType: '',
            alertMessage: '',
            isAlertActive: false,
            attachment: null

        };
    },
    mounted() {
        if(this.$route.params.id) {
            this.getVideoDetails(this.$route.params.id);
        }
    },
    methods: {
        getVideoDetails(id) {
            axios.get(`api/video/${id}`)
            .then(response => {
                let video = response.data
                this.form.title = video.title
                this.form.description = video.description
            })
            .catch(error => {
                console.log(error);
            });
        },
        initializeError() {
            this.fields.forEach(field => {
                this.errors[field].type = ""
                this.errors[field].message = ""
            })
        },
        onSubmit(evt) {
            evt.preventDefault()
            this.initializeError()
            var isError = false;
            this.fields.forEach(field => {
                if(this.form[field] == "") {
                    this.errors[field].type = "is-danger"
                    this.errors[field].message = field+' should not empty.'
                    isError = true;
                }
            })

            if(isError) {
                return false;
            }

            let video = {
                title: this.form.title,
                description: this.form.description
            }

            axios.put(`api/video/${this.$route.params.id}`, video).then(response => {
                if(response.status) {
                    this.alertType = 'success'
                    this.alertMessage = "Video Updated successfully"
                    this.isAlertActive = true
                    setTimeout(() => {
                        this.alertType = ""
                        this.alertMessage = ""
                        this.isAlertActive = false
                    }, 3000);
                }
                this.onReset(evt)
            }).catch(() => {
                this.alertType = 'danger'
                this.alertMessage = ""
                this.isAlertActive = true
                setTimeout(() => {
                    this.alertType = ""
                    this.alertMessage = ""
                    this.isAlertActive = false
                }, 3000);
            });
        },
        onReset(evt) {
            evt.preventDefault()
            this.form.title = ''
            this.form.description = ''
        }
    }
};
</script>
