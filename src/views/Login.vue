<template>
  <div class="login">
        <div class="login-form">
            <alert :alert-message="alertMessage" :alert-type="alertType" v-if="isAlertActive"></alert>
            <b-form @submit="onSubmit" @reset="onReset">
                <h2 class="text-center">Sign in</h2>

                <b-form-group id="input-group-email">
                    <b-form-input
                    id="email"
                    v-model="form.email"
                    type="email"
                    placeholder="Email"
                    :class="errors.email.type !== '' ? 'is-invalid' : '' "
                    ></b-form-input>
                    <b-form-invalid-feedback :state="true">{{ errors.email.message }}</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group id="input-group-password">
                    <b-form-input
                    id="password"
                    v-model="form.password"
                    type="password"
                    placeholder="Password"
                    :class="errors.password.type !== '' ? 'is-invalid' : '' "
                    ></b-form-input>
                    <b-form-invalid-feedback :state="true">{{ errors.password.message }}</b-form-invalid-feedback>
                </b-form-group>


                <div class="clearfix">
                    <b-form-checkbox class="mb-sm-2 mr-sm-2 mb-sm-0 float-left"> Remember me</b-form-checkbox>
                </div>
                <div class="form-group clearfix">
                    <button type="submit" class="btn btn-primary login-btn float-left ">LOGIN</button>
                    <a href="#" class="float-right forget-link">Forgot Password?</a>
                </div>
                <div class="or-seperator"><i>or signup with</i></div>
                <div class="text-center social-btn">
                    <b-button size="sm" class="mr-1 btn-brand" variant="twitter">
                        <i class="fa fa-twitter"></i><span>Twitter</span>
                    </b-button>
                    <b-button size="sm" class="mr-1 btn-brand" variant="facebook">
                        <i class="fa fa-facebook"></i><span>Facebook</span>
                    </b-button>
                    <b-button size="sm" variant="google-plus" class="mr-1 btn-brand">
                        <i class="fa fa-google-plus"></i><span>Google+</span>
                    </b-button>
                </div>
            </b-form>
        </div>
        <p class="text-center text-muted small">Don't have an account? <router-link  to="/register">Sign up here!
</router-link></p>
  </div>
</template>

<script>
// @ is an alias to /src
import Alert from '@/components/Alert.component'
export default {
    name: 'login',
    components: {
        Alert
    },
    data () {
        return {
            form: {
                email: '',
                password: ''
            },
            errors: {
                email: {
                    type: '',
                    message: ''
                },
                password: {
                    type: '',
                    message: ''
                }
            },
            fields: ['email', 'password'],
            alertType: '',
            alertMessage: '',
            isAlertActive: false
        }
    },
    methods: {
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
            if(isError) {
                return false;
            }
            let email = this.form.email
            let password = this.form.password
            axios.post('api/login', {email, password}).then(response => {
                let user = response.data.user
                localStorage.setItem('nTube.user', JSON.stringify(user))
                localStorage.setItem('nTube.jwt', user.token)

                if (localStorage.getItem('nTube.jwt') != null) {
                    if(user.role == 'admin') {
                        this.$router.push('/admin/dashboard')
                    } else {
                        this.$router.push('/')
                    }
                }
            }).catch(error => {
                this.alertType = 'danger';
                this.alertMessage = error.response.data.message.error;
                this.isAlertActive = true;
            });
        },
        onReset(evt) {
            evt.preventDefault()
            this.form.email = ''
            this.form.password = ''
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
        background: #f7f7f7;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
        padding: 30px;
    }
    .login-form .form-control {
        font-size: 14px;
    }
    .login-form h2 {
        margin: 0 0 15px;
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
    .login-form .forget-link {
        font-size: 12px;
        color: #000000f2;
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
