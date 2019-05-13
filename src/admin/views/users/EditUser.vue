<template>
    <b-row class="justify-content-md-center">
        <b-col md="8" sm="10" xs="12" md-pull-left="2">
            <alert :alert-message="alertMessage" :alert-type="alertType" v-if="isAlertActive"></alert>
            <b-card>
                <div slot="header">
                    <strong>Create User</strong>
                </div>
                <b-form @submit="onSubmit" @reset="onReset">
                    <b-form-group
                        label="Name"
                        label-for="name"
                        :label-cols="3"
                        :horizontal="true"
                    >
                        <b-form-input
                            id="name"
                            v-model="form.name"
                            type="text"
                            placeholder="Name"
                            :class="errors.name.type !== '' ? 'is-invalid' : '' "
                        ></b-form-input>
                        <b-form-invalid-feedback :state="true">{{ errors.name.message }}</b-form-invalid-feedback>
                    </b-form-group>

                    <b-form-group
                        label="Email"
                        label-for="email"
                        :label-cols="3"
                        :horizontal="true"
                    >
                        <b-form-input
                            id="email"
                            v-model="form.email"
                            type="email"
                            placeholder="email"
                            :class="errors.email.type !== '' ? 'is-invalid' : '' "
                            disabled
                        ></b-form-input>
                        <b-form-invalid-feedback :state="true">{{ errors.email.message }}</b-form-invalid-feedback>
                    </b-form-group>

                    <b-form-group label="Role" label-for="role" :label-cols="3" :horizontal="true">
                        <b-form-select
                            id="role"
                            v-model="form.role"
                            :plain="true"
                            :options="rolesOption"
                            :class="errors.role.type !== '' ? 'is-invalid' : '' "
                        ></b-form-select>
                        <b-form-invalid-feedback :state="true">{{ errors.role.message }}</b-form-invalid-feedback>
                    </b-form-group>

                    <b-form-group
                        label="Password"
                        label-for="password"
                        :label-cols="3"
                        :horizontal="true"
                    >
                        <b-form-input
                            id="password"
                            v-model="form.password"
                            type="password"
                            placeholder="password"
                            :class="errors.password.type !== '' ? 'is-invalid' : '' "
                        ></b-form-input>
                        <b-form-invalid-feedback :state="true">{{ errors.password.message }}</b-form-invalid-feedback>
                    </b-form-group>

                    <b-form-group
                        label="Confirm Password"
                        label-for="cpassword"
                        :label-cols="3"
                        :horizontal="true"
                    >
                        <b-form-input
                            id="cpassword"
                            v-model="form.cpassword"
                            type="password"
                            placeholder="cpassword"
                            :class="errors.cpassword.type !== '' ? 'is-invalid' : '' "
                        ></b-form-input>
                        <b-form-invalid-feedback :state="true">{{ errors.cpassword.message }}</b-form-invalid-feedback>
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
    name: "createUser",
    components: {
        Alert
    },
    data: () => {
        return {
            rolesOption : [],
            form: {
                name: '',
                email: '',
                role: '',
                password: '',
                cpassword: ''
            },
            errors: {
                name: {
                    type: '',
                    message: ''
                },
                email: {
                    type: '',
                    message: ''
                },
                role: {
                    type: '',
                    message: ''
                },
                password: {
                    type: '',
                    message: ''
                },
                cpassword: {
                    type: '',
                    message: ''
                }
            },
            fields: ['name', 'email', 'role'],
            alertType: '',
            alertMessage: '',
            isAlertActive: false
        };
    },
    mounted() {
        if(this.$route.params.id) {
            this.getUserDetails(this.$route.params.id);
        }
        this.fetchRoleList();
    },
    methods: {
        getUserDetails(id) {
            axios.get(`api/user/${id}`)
            .then(response => {
                let user = response.data
                this.form.name = user.username
                this.form.email = user.email
                this.form.role = user.role
            })
            .catch(error => {
                console.log(error);
            });
        },
        fetchRoleList() {
            axios.get("api/roles")
            .then(response => {
                this.rolesOption = response.data.map(role => role.name);
            })
            .catch(error => {
                console.log(error);
            });
        },
        initializeError() {
            this.fields.forEach((field, index) => {
                this.errors[field].type = ""
                this.errors[field].message = ""
            })
        },
        onSubmit(evt) {
            evt.preventDefault()
            this.initializeError()
            var isError = false;
            this.fields.forEach((field, index) => {
                if(this.form[field] == "") {
                    this.errors[field].type = "is-danger"
                    this.errors[field].message = field+' should not empty.'
                    isError = true;
                }
            })
            if (this.form.password !== this.form.cpassword) {
                isError = true;
                this.errors.cpassword.type = "is-danger"
                this.errors.cpassword.message = 'Confirm Passwords does not match.'
            }
            if(isError) {
                return false;
            }

            axios.put(`api/user/${this.$route.params.id}`, {user: this.form}).then(response => {
                this.alertType = 'success'
                this.alertMessage = "User updated successfully"
                this.isAlertActive = true
                setTimeout(() => {
                    this.alertType = ""
                    this.alertMessage = ""
                    this.isAlertActive = false
                }, 5000);
                this.onReset(evt)
            }).catch(error => {
                this.alertType = 'danger'
                this.alertMessage = error.response.data.message
                this.isAlertActive = true
                setTimeout(() => {
                    this.alertType = ""
                    this.alertMessage = ""
                    this.isAlertActive = false
                }, 5000);
            });
        },
        onReset(evt) {
            evt.preventDefault()
            this.form.name = ''
            this.form.email = ''
            this.form.role = ''
            this.form.password = ''
            this.form.cpassword = ''
        }
    }
};
</script>
