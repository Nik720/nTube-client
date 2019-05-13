<template>
    <b-row class="justify-content-md-center">
        <b-col md="8" sm="10" xs="12" md-pull-left="2">
            <alert :alert-message="alertMessage" :alert-type="alertType" v-if="isAlertActive"></alert>
            <b-card>
                <div slot="header">
                    <strong>Edit Role</strong>
                </div>
                <b-form @submit="onSubmit" >
                    <b-form-group
                        label="Name"
                        label-for="name"
                        :label-cols="3"
                        :horizontal="true"
                    >
                        <b-form-input
                            id="name"
                            v-model="name"
                            type="text"
                            placeholder="Name"
                            :class="errors.name.type !== '' ? 'is-invalid' : '' "
                        ></b-form-input>
                        <b-form-invalid-feedback :state="true">{{ errors.name.message }}</b-form-invalid-feedback>
                    </b-form-group>

                    <div slot="footer" class="text-center">
                        <b-button type="submit" size="sm" variant="primary" class="mr-2">
                            <i class="fa fa-dot-circle-o"></i> Submit
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
    name: "editRole",
    components: {
        Alert
    },
    data: () => {
        return {
            rolesOption : [],
            name: '',
            errors: {
                name: {
                    type: '',
                    message: ''
                }
            },
            alertType: '',
            alertMessage: '',
            isAlertActive: false
        };
    },
    mounted() {
        if(this.$route.params.id) {
            this.fetchRoleDetails(this.$route.params.id);
        }
    },
    methods: {
        fetchRoleDetails(id) {
            axios.get(`api/roles/${id}`)
            .then(response => {
                let role = response.data
                this.name = role.name
            })
            .catch(error => {
                console.log(error);
            });
        },
        onSubmit(evt) {
            evt.preventDefault()

            this.errors.name.type = ""
            this.errors.name.message = ""

            if(this.name == "") {
                this.errors.name.type = "is-danger"
                this.errors.name.message = 'Role Name should not empty.'
                return false;
            }

            axios.put(`api/roles/${this.$route.params.id}`, {name: this.name}).then(response => {
                this.alertType = 'success'
                this.alertMessage = "Role Updated successfully"
                this.isAlertActive = true
                setTimeout(() => {
                    this.alertType = ""
                    this.alertMessage = ""
                    this.isAlertActive = false
                }, 3000);
                this.name = ''
            }).catch(error => {
                this.alertType = 'danger'
                this.alertMessage = "errors"
                this.isAlertActive = true
                setTimeout(() => {
                    this.alertType = ""
                    this.alertMessage = ""
                    this.isAlertActive = false
                }, 3000);
            });
        }
    }
};
</script>
