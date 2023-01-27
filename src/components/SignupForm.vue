<template>
    <div class="container">
        <h1>SIGN UP FORM (CODED)</h1>
        <p>Based on <a href="!#">Sign Up Design #39</a> by Denis Abdullin</p>
        <div class="form">
            <form class="register" method="post">
                <div class="fields">
                    <label for="email">Email</label>
                    <input class="email" type="text" name="email" id="email" v-model="email">
                    <span class="msg">{{ emailMsg }}</span>
                    <label for="password">Password <span>(6 or more characters required)</span></label>
                    <input class="password" type="password" name="password" id="password" v-model="password">
                    <span class="msg">{{ passwordMsg }}</span>
                    <label for="repeat_password">Repeat Password</label>
                    <input class="repeat_password" type="password" name="repeat_password" id="repeat_password"
                        v-model="repeatPassword">
                    <span class="msg">{{ repeatPasswordMsg }}</span>
                </div>
                <div class="action">
                    <input type="submit" value="Sign Up">
                    <span>teams & conditions</span>
                </div>

            </form>
            <div class="terms">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SignupForm',
    components: {

    },
    data() {
        return {
            email: '',
            password: '',
            repeatPassword: '',
            emailValid: false,
            passwordValid: true,
            repeatPasswordValid: true,
            emailMsg: '',
            passwordMsg: '',
            repeatPasswordMsg: '',
        }
    },
    methods: {
        name() {

        }
    },
    watch: {
        email(newValue) {
            //eslint-disable-next-line
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(newValue)) {
                this.emailValid = true;
                this.emailMsg = '';
            }
            else {
                this.emailValid = false;
                if (newValue.length > 0) {
                    this.emailMsg = 'Keep typing...waiting for a valid email';
                }
                else {
                    this.emailMsg = '';
                }
            }
        },
        password(newValue) {
            if (newValue.length < 6) {
                this.passwordValid = false;
                this.passwordMsg = 'Password must be at least 6 characters'
            }
            else {
                this.passwordValid = true;
                this.passwordMsg = '';
            }
            if (newValue.length == 0) {
                this.passwordMsg = '';
            }

            if (this.repeatPassword.length) {
                if (this.repeatPassword != this.password) {
                    this.repeatPasswordValid = false;
                    this.repeatPasswordMsg = 'Passwords do not match';
                }
                else {
                    this.repeatPasswordValid = true;
                    this.repeatPasswordMsg = '';
                }
            }
        },
        repeatPassword(newValue) {
            if (newValue != this.password) {
                this.repeatPasswordValid = false;
                this.repeatPasswordMsg = 'Passwords do not match';
            }
            else {
                this.repeatPasswordValid = true;
                this.repeatPasswordMsg = '';
            }
            if (newValue.length == 0) {
                this.repeatPasswordMsg = '';
            }
        }
    }
}

</script>

<style lang="scss" scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: linear-gradient(45deg, #B4D020, #79CB0A);
    width: 100%;
    height: 800px;

    h1+p {
        margin-top: 15px;
        margin-bottom: 20px;
    }

    .form {
        width: 700px;
        height: 460px;
        border-radius: 5px;
        background-color: #eee;
        position: relative;
        box-shadow: 5px 10px 30px rgb(116, 113, 113);
        display: flex;
        flex-direction: row-reverse;

        &::before {
            content: '';
            background: url(https://images.unsplash.com/photo-1442291928580-fb5d0856a8f1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MzkyMDc0Ng&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=900) no-repeat;
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 5px;
            top: 0;
            left: 0;
            transform: scaleX(-1);
            z-index: 0;
        }

        .register {
            position: absolute;
            z-index: 1;
            display: flex;
            flex-direction: column;
            width: 300px;
            height: 400px;
            margin-top: 30px;
            margin-right: 25px;

            .fields {
                .msg {
                    font-size: 10px;
                    color: red;
                    margin-top: 2px;
                }

                display: flex;
                flex-direction: column;
                align-items: flex-start;
                font-size: 14px;

                label {
                    margin-top: 20px;
                    margin-bottom: 25px;
                }

                span {
                    font-size: 12px;
                }

                input {
                    display: block;
                    width: 100%;
                    border: 0px;
                    border-bottom: dotted 1px #000000;
                    background-color: rgba($color: #000000, $alpha: 0);
                    outline: none;
                    padding: 3px 30px 3px 3px;
                }

                input[type=password] {
                    color: red;
                }

                .email {
                    position: relative;

                    &::before {
                        content: '';

                    }
                }

            }

            .action {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                margin-top: 40px;

                input {
                    background: linear-gradient(45deg, rgb(230, 198, 22), rgb(241, 118, 17));
                    border: none;
                    width: 85px;
                    height: 27px;
                    border-radius: 13px;
                    cursor: pointer;
                    font-size: 14px;
                }

                span {
                    font-size: 14px;
                    line-height: 27px;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>