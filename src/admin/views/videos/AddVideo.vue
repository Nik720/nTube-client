<template>
    <b-row class="justify-content-md-center">
        <b-col md="8" sm="10" xs="12" md-pull-left="2">
            <alert :alert-message="alertMessage" :alert-type="alertType" v-if="isAlertActive"></alert>
            <loader :loaderShow="showLoader"></loader>
            <b-card>
                <div slot="header">
                    <strong>Add Video Details</strong>
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

                    <b-form-group
                        label="Video"
                        label-for="file"
                        :label-cols="3"
                        :horizontal="true"
                    >
                        <b-form-file
                            v-model="form.file"
                            :state="Boolean(form.file)"
                            placeholder="Choose a file..."
                            @change="onFileChange"
                            accept="video/*"
                            id="image"
                            no-drop
                            :class="fileError.type !== '' ? 'is-invalid' : '' "
                        ></b-form-file>
                        <b-form-text id="image-help">File size shold be less than 100 MB.</b-form-text>
                        <small class="text-danger" v-show="fileError.status">{{ fileError.message }}</small>
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
import Loader from '@/admin/components/PageLoader'
export default {
    name: "createVideo",
    components: {
        Alert,
        Loader
    },
    data: () => {
        return {
            rolesOption : [],
            form: {
                title: '',
                description: '',
                file: ''
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
            fileError : {
                status: false,
                type: '',
                message: ''
            },
            fields: ['title', 'description'],
            alertType: '',
            alertMessage: '',
            isAlertActive: false,
            attachment: null,
            data: new FormData(),
            showLoader: false

        };
    },
    methods: {
        initializeError() {
            this.fields.forEach(field => {
                this.errors[field].type = ""
                this.errors[field].message = ""
            })
        },
        onFileChange(event) {
            this.attachment = event.target.files[0];
            if (this.attachment.size > 100 * 1024 * 1024) {
                this.attachment = ""
                this.fileError.status = true
                this.fileError.type = 'is-danger'
                this.fileError.message = 'File size should not more than 100 MB'
                document.getElementById("image").value = ""
                return false;
            }
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
            if (!this.attachment) {
                isError = true;
                this.fileError.status = true
                this.fileError.type = 'is-danger'
                this.fileError.message = 'Please upload video'
            }
            if(isError) {
                return false;
            }

            this.data.append('file', this.attachment)
            this.data.append('title', this.form.title)
            this.data.append('description', this.form.description)


            var config = {
                headers: { 'Content-Type': 'multipart/form-data' }
            };
            this.showLoader = true
            axios.post('api/video/upload', this.data, config).then(response => {
                if(response.status) {
                    this.alertType = 'success'
                    this.alertMessage = "User register successfully"
                    this.isAlertActive = true
                    setTimeout(() => {
                        this.alertType = ""
                        this.alertMessage = ""
                        this.isAlertActive = false
                    }, 3000);
                }
                this.onReset()
                this.showLoader = false
            }).catch(() => {
                this.alertType = 'danger'
                this.alertMessage = "Problem with file upload, make sure file size is less than 100 MB"
                this.isAlertActive = true
                setTimeout(() => {
                    this.alertType = ""
                    this.alertMessage = ""
                    this.isAlertActive = false
                }, 8000);
                this.onReset()
                this.showLoader = false
            });
        },
        onReset() {
            this.form.title = ''
            this.form.description = ''
            this.form.file = ''
            this.fileError = {
                status: false,
                type: '',
                message: ''
            },
            document.getElementById("image").value = ""
            this.data = new FormData()

        }
    }
};
</script>
