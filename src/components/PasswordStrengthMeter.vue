<template>
    <div class="container">
        <div class="password_meter">
            <h1>Vue Password Strength Meter</h1>
            <div class="password">
                <input v-model="password" type="password">
                <span>{{ password.length }}</span>
            </div>
            <div class="meter_group">
                <span ref="lowercase" class="meter">Lowercase
                    <span class="masker" :class="{ 'check_ok': hasLowercase }"></span>
                    <span>Lowercase</span>
                </span>
                <span ref="number" class="meter" >Number
                    <span class="masker" :class="{ 'check_ok': hasNumeric }"></span>
                    <span>Numeric</span>
                </span>
                <span ref="uppercase" class="meter">Uppercase
                    <span class="masker"  :class="{ 'check_ok': hasUppercase }"></span>
                    <span>Uppercase</span>
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
    height: 400px;

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
                background-color: rgb(222, 226, 231);

                &:focus {
                    outline: 1px solid rgb(115, 139, 241);
                }

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

                .masker {
                    position: absolute;
                    top: 0%;
                    left: 0%;
                    width: 0%;
                    height: 100%;
                    border-radius: 3px;
                    background-color: rgb(37, 99, 28);

                    color: #fff;
                    overflow: hidden;
                }

                .check_ok {
                    animation: progress 2s forwards;
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
</style>