<template>
  <div class="login">
        <div class="login-form">
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
                    <a href="#" class="btn btn-info"><i class="fa fa-twitter"></i>&nbsp; Twitter</a>
                    <a href="#" class="btn btn-primary"><i class="fa fa-facebook"></i>&nbsp; Facebook</a>
                    <a href="#" class="btn btn-danger"><i class="fa fa-google"></i>&nbsp; Google</a>
                </div>
            </b-form>
        </div>
        <p class="text-center text-muted small">Don't have an account? <router-link  to="/register">Sign up here!
</router-link></p>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'login',
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
        fields: ['email', 'password']
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
                localStorage.setItem('bigStore.user', JSON.stringify(user))
                localStorage.setItem('bigStore.jwt', response.data.token)

                if (localStorage.getItem('bigStore.jwt') != null) {
                    this.$emit('loggedIn')
                    this.$router.push('/products')
                }
            }).catch(error => {
                this.isLoggedInFail = true;
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
    .social-btn .btn:hover {
        opacity: 0.9;
    }
	.social-btn .btn-primary {
        background: #507cc0;
    }
	.social-btn .btn-info {
		background: #64ccf1;
	}
	.social-btn .btn-danger {
		background: #df4930;
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
