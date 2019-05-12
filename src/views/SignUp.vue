<template>
  <div class="login">
        <div class="login-form">
            <alert :alert-message="alertMessage" :alert-type="alertType" v-if="isAlertActive"></alert>
            <b-form @submit="onSubmit" @reset="onReset">
                <h2 class="text-center">Sign Up</h2>

                <b-form-group id="input-group-name">
                    <b-form-input
                    id="name"
                    v-model="form.name"
                    type="text"
                    placeholder="Name"
                    :class="errors.name.type !== '' ? 'is-invalid' : '' "
                    ></b-form-input>
                    <b-form-invalid-feedback :state="true">{{ errors.name.message }}</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group id="input-group-email">
                    <b-form-input
                    id="email"
                    v-model="form.email"
                    type="email"
                    placeholder="email"
                    :class="errors.email.type !== '' ? 'is-invalid' : '' "
                    ></b-form-input>
                    <b-form-invalid-feedback :state="true">{{ errors.email.message }}</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group id="input-group-password">
                    <b-form-input
                    id="password"
                    v-model="form.password"
                    type="password"
                    placeholder="password"
                    :class="errors.password.type !== '' ? 'is-invalid' : '' "
                    ></b-form-input>
                    <b-form-invalid-feedback :state="true">{{ errors.password.message }}</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group id="input-group-cpassword">
                    <b-form-input
                    id="cpassword"
                    v-model="form.cpassword"
                    type="password"
                    placeholder="cpassword"
                    :class="errors.cpassword.type !== '' ? 'is-invalid' : '' "
                    ></b-form-input>
                    <b-form-invalid-feedback :state="true">{{ errors.cpassword.message }}</b-form-invalid-feedback>
                </b-form-group>

                <div class="form-group text-center">
                    <button type="submit" class="btn btn-primary login-btn">REGISTER</button>
                </div>
            </b-form>
        </div>
        <p class="text-center text-muted small">Already have an account? <router-link  to="/">Login here!
</router-link></p>
  </div>
</template>

<script>
// @ is an alias to /src
import Alert from '@/components/Alert.component'
export default {
  name: 'signup',
  components: {
        Alert
    },
    data () {
        return {
            form: {
                name: '',
                email: '',
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
                password: {
                    type: '',
                    message: ''
                },
                cpassword: {
                    type: '',
                    message: ''
                }
            },
            fields: ['name', 'email', 'password','cpassword'],
            alertType: '',
            alertMessage: '',
            isAlertActive: false
        }
    },
    methods: {
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
            if (this.form.password !== this.form.cpassword || this.form.cpassword.length <= 0) {
                isError = true;
                this.errors.cpassword.type = "is-danger"
                this.errors.cpassword.message = 'Confirm Passwords does not match.'
            }
            if(isError) {
                return false;
            }

            axios.post('api/user/register', {user: this.form}).then(response => {
                if(response.status) {
                    this.alertType = 'success'
                    this.alertMessage = "User register successfully"
                    this.isAlertActive = true
                    this.onReset(evt)
                }
            }).catch(error => {
                this.alertType = 'danger'
                this.alertMessage = error.response.data.errors.message
                this.isAlertActive = true
            });
        },
        onReset(evt) {
            evt.preventDefault()
            this.form.name = ''
            this.form.email = ''
            this.form.password = ''
            this.form.cpassword = ''
        }
    }
}
</script>

<style lang="css" scoped>
    .login {
		width: 385px;
		margin: 30px auto;
	}
    .login-form {
    	margin-bottom: 15px;
        background: #ffffff;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
        padding: 30px;
    }
    .login-form h2 {
        margin: 0 0 15px;
    }
    .login-form .form-control {
        font-size: 14px;
    }
    .input-group-addon .fa {
        font-size: 18px;
    }
    .login-btn {
        border-radius: 2px;
        font-size: 12px;
        font-weight: bold;
        padding: 10px 20px;
        min-height: 13px;
        line-height: 12px;
        background-color: #f85438;
        border-color: #f85438;
    }
    .login-btn:hover {
        background-color: #f85438;
        border-color: #f85438;
    }
	.social-btn .btn {
		border: none;
        margin: 10px 3px 0;
        opacity: 1;
	}
    .or-seperator {
        margin-top: 20px;
        text-align: center;
        border-top: 1px solid #ccc;
    }
    .or-seperator i {
        padding: 0 10px;
        background: #f7f7f7;
        position: relative;
        top: -11px;
        z-index: 1;
    }
</style>
