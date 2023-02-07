<template>
    <div class="container">
        <div class="password_meter">
            <h1>Vue Password Strength Meter</h1>
            <div class="password">
                <input :class="{'input_ok' : (hasLowercase && hasNumeric && hasUppercase)}" v-model="password" type="password">
                <span :class="{'password_ok' : (hasLowercase && hasNumeric && hasUppercase)}">{{ password.length }}</span>
            </div>
            <div class="meter_group">
                <span ref="lowercase" class="meter">Lowercase
                    <span class="mask_bgr" :class="{ 'ok_bgr_anim': hasLowercase }"></span>
                    <span class="mask_text" :class="{'ok_text_color' : hasLowercase}">Lowercase</span>
                </span>
                <span ref="number" class="meter" >Numeric
                    <span class="mask_bgr" :class="{ 'ok_bgr_anim': hasNumeric }"></span>
                    <span class="mask_text" :class="{'ok_text_color' : hasNumeric}">Numeric</span>
                </span>
                <span ref="uppercase" class="meter">Uppercase
                    <span class="mask_bgr"  :class="{ 'ok_bgr_anim': hasUppercase }"></span>
                    <span class="mask_text" :class="{'ok_text_color' : hasUppercase}">Uppercase</span>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PasswordStrengthMeter',
    data() {
        return {
            password: '',
        }
    },
    computed: {
        hasUppercase() {
            let result = false;
            let arr = [...this.password];
            for (let index = 0; index < arr.length; index++) {
                const char = arr[index];
                if (/^[A-Z]/.test(char)) {
                    result = true;
                    break;
                }
            }
            return result;
        },
        hasLowercase() {
            let result = false;
            let arr = [...this.password];
            for (let index = 0; index < arr.length; index++) {
                const char = arr[index];
                if (/^[a-z]/.test(char)) {
                    result = true;
                    break;
                }
            }
            return result;
        },
        hasNumeric() {
            let result = false;
            let arr = [...this.password];
            for (let index = 0; index < arr.length; index++) {
                const char = arr[index];
                if (/^[0-9]/.test(char)) {
                    result = true;
                    break;
                }
            }
            return result;
        }
    },

}
</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: linear-gradient(26deg, rgb(168, 61, 133), rgb(214, 247, 71));

    .password_ok {
        background-color: rgb(7, 87, 7) !important;
        color: #fff !important;
    }

    .password_meter {
        width: 300px;
        height: 230px;
        font-family: 'Times New Roman', Times, serif;

        h1 {
            font-size: 30px;
            margin-bottom: 15px;
        }

        .password {
            position: relative;

            input {
                width: 100%;
                padding: 12px;
                margin: 5px auto;
                border-radius: 3px;
                border: none;
                transition: background 0.4s linear;
                background: linear-gradient(to right,rgb(27, 141, 65) 50%,#eee 50%);
                background-size: 200% 100%;
                background-position: right;

                &:focus {
                    outline: 1px solid rgb(115, 139, 241);
                }

            }

            .input_ok {
                background-position: left;
            }

            span {
                position: absolute;
                display: inline-block;
                padding: 0 5px;
                min-width: 30px;
                height: 25px;
                line-height: 25px;
                z-index: 1;
                top: 11px;
                left: 88%;
                background-color: rgb(245, 188, 82);
                border-radius: 2px;
            }
        }

        .meter_group {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            .meter {
                position: relative;
                display: inline-block;
                font-size: 14px;
                width: 95px;
                background-color: rgb(222, 226, 231);
                border-radius: 3px;


                .mask_bgr {
                    position: absolute;
                    top: 0%;
                    left: 0%;
                    width: 0%;
                    height: 100%;
                    border-radius: 3px;
                    background-color: rgb(37, 99, 28);
                    transition: all 0.4s linear;
                }

                .mask_text {
                    position: absolute;
                    top: 0%;
                    left: 0%;
                    width: 100%;
                    height: 100%;
                }

                .ok_bgr_anim {
                    width: 100%;
                    color: #fff !important;
                }
                .ok_text_color {

                    color: #fff !important;
                }
            }
        }
    }
}

@keyframes progress {
    100% {
        width: 100%;
    }
}

@keyframes color_anim {
    100% {
        color: #fff;
    }
}

</style>