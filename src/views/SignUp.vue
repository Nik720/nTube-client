<template>
  <div class="login">
        <div class="login-form">
            <h2 class="text-center">Sign Up</h2>

            <div class="form-group">
                <input type="text" class="form-control" name="name" placeholder="Name" required="required">
            </div>

            <div class="form-group">
                <input type="text" class="form-control" name="email" placeholder="Email" required="required">
            </div>

            <div class="form-group">
                <input type="password" class="form-control" name="password" placeholder="Password" required="required">
            </div>

            <div class="form-group">
                <input type="password" class="form-control" name="cpassword" placeholder="Confirm Password" required="required">
            </div>

            <div class="form-group text-center">
                <button type="submit" class="btn btn-primary login-btn">REGISTER</button>
            </div>
            <div class="or-seperator"><i>or signup with</i></div>
            <div class="text-center social-btn">
                <a href="#" class="btn btn-info"><i class="fa fa-twitter"></i>&nbsp; Twitter</a>
                <a href="#" class="btn btn-primary"><i class="fa fa-facebook"></i>&nbsp; Facebook</a>
                <a href="#" class="btn btn-danger"><i class="fa fa-google"></i>&nbsp; Google</a>
            </div>
        </div>
        <p class="text-center text-muted small">Already have an account? <router-link  to="/">Login here!
</router-link></p>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'signup',
  data () {
    return {

    }
  },
  methods: {

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
