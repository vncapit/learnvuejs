<template>
    <div class="container">
        <form action="" class="form">
            <div class="error-message">
                <span v-show="!formData.email.valid">Oh, please enter a valid email address.</span>
            </div>
            <fieldset>
                <legend>Vue Contact Form</legend>
                <div class="form-field">
                    <label>Name</label>
                    <input type="text" required="true" v-model="formData.name">
                </div>
                <div class="form-field">
                    <label>Email</label>
                    <input type="text" required="true" v-model="formData.email.value">
                </div>
                <div class="form-field">
                    <label>Team Member</label>
                    <select v-model="formData.selection.member">
                        <option v-show="teamMemberOptions.length" v-for="teamMember in teamMemberOptions"
                            :key="teamMember.id" :value="teamMember.id">
                            {{ teamMember.name }}
                        </option>
                    </select>
                </div>
                <div class="form-field">
                    <label>Framework</label>
                    <ul v-if="frameworks.length">
                        <li v-for="framework in frameworks" :key="framework.id">
                            <input type="radio" :value="framework.value" :id="`radio-${framework.id}`" name="radio"
                                v-model="formData.selection.framework">
                            <label :for="`radio-${framework.id}`">{{ framework.name }}</label>
                        </li>
                    </ul>
                </div>
                <div class="form-field">
                    <label>Features</label>
                    <ul v-if="features.length">
                        <li v-for="(feature, index ) in features" :key="index">
                            <input type="checkbox" v-model="formData.selection.features" :id="`checkbox-${index}`"
                                :value="feature">
                            <label :for="`checkbox-${index}`">{{ feature }}</label>
                        </li>
                        <li>
                            <input type="checkbox" value="all" id="checkbox-all" @change="handleChangeAll($event)">
                            <label for="checkbox-all">Check All</label>
                        </li>
                    </ul>
                </div>
                <div class="form-field">
                    <label>Message with Counter</label>
                    <textarea name="" maxlength="255" required="true" v-model="formData.message.text"></textarea>
                    <span class="counter">{{formData.message.text.length + '/' + formData.message.maxlength}}</span>
                </div>
                <div class="submit">
                    <input type="submit" value="Send Form">
                </div>
            </fieldset>
        </form>
        <div class="form-info">
            <pre><code>{{ formData }}</code></pre>
        </div>

    </div>
</template>

<script>

export default {
    name: 'ContactForm',
    data() {
        return {
            teamMemberOptions: [
                { id: 0, name: "Sarah Drasner" },
                { id: 1, name: "Even You" },
            ],
            frameworks: [
                { id: 0, value: "angular", name: "AngularJS" },
                { id: 1, value: "react", name: "ReactJS" },
                { id: 2, value: "vue", name: "VueJS" },
            ],
            features: [
                "Reactivity", "Encapsulation", "Data Binding"
            ],
            formData:
            {
                name: "Cap",
                email: {
                    value: "vncapit@gmail.com",
                    valid: true
                },
                features: [
                    "Reactivity",
                    "Encapsulation",
                    "Data Binding"
                ],
                selection: {
                    member: "1",
                    framework: "vue",
                    features: [
                        "Reactivity", "Encapsulation",
                    ]
                },
                message: {
                    text: "",
                    maxlength: 255
                },
            },
        }
    },
    methods: {

        handleChangeAll($event) {
            if ($event.target.checked) {
                this.formData.selection.features = [...this.features];
            }
            else {
                this.formData.selection.features = [];
            }
        }
    },
    watch: {
        "formData.email.value": {
            handler(newValue) {
                //eslint-disable-next-line
                this.formData.email.valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(newValue);
            },
            deep: true
        },
    }
}

</script>

<style lang="scss" scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

ul {
    list-style: none;
}

.container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background: linear-gradient(to bottom right, #56D8E4 0%, #9F01EA 100%);
    width: 100%;
    height: 100vh;
}

.form {
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 730px;
    padding: 20px 30px;
    background: #fff;
    border-radius: 5px;

    .error-message {
        width: 100%;
        height: 45px;
        text-align: center;
        color: #fff;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 18px;
        line-height: 45px;
        span {
            display: block;
            background-color: #f74747;
            border-radius: 4px;
        }
    }

    fieldset {
        border: none;

        legend {
            color: rgb(255, 255, 255);
            border-bottom: solid 1px #e2e5e6;
            width: 100%;
        }
    }

    .form-field {
        text-align: left;
        position: relative;

        label {
            display: block;
            color: #666;
            font-size: 16px;
            margin-top: 20px;
        }

        input,
        select {
            display: block;
            border: solid 1px #bbb;
            width: 100%;
            padding: 11px;
            margin-top: 5px;
            border-radius: 3px;

            &:focus {
                border: none;
                outline: 1px solid #1C0C2F;
            }
        }

        ul {
            display: block;
            user-select: none;

            li {
                display: inline-block;

                input {
                    display: inline;
                    width: 15px;
                    height: 15px;

                    &:focus {
                        outline: none;
                    }

                    &:checked {
                        animation: inputChange 0.15s ;
                    }
                }

                label {
                    display: inline;
                    margin-left: 7px;
                    margin-right: 24px;
                    color: rgb(0, 0, 0);
                    font-family: Arial, Helvetica, sans-serif;
                    font-size: 15px;
                    user-select: none;
                }
            }
        }

        textarea {
            border: solid 1px #bbb;
            width: 100%;
            padding: 11px;
            height: 100px;
            margin-top: 5px;
            resize: vertical;

            &:focus {
                border: none;
                outline: 1px solid #1C0C2F;
            }

        }

        span {
            position: absolute;
            top: 3%;
            right: 0%;
            font-family: 'Courier New', Courier, monospace;
            font-size: 12px;
        }
    }

    .submit {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;

        input[type=submit] {
            width: 110px;
            height: 40px;
            background-color: #2C3E50;
            color: #fff;
            font-weight: 600;
            border-radius: 4px;
            border: none;
            cursor: pointer;
            margin-top: 15px;
        }
    }
}

.form-info {
    width: 500px;
    height: 730px;
    background: #1C0C2F;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    pre {
        display: block;
        margin: 10px;
        text-align: left;
        color: #e2e5e6;
        font-size: 18px;
        line-height: 1.5rem;
    }
}

@keyframes inputChange {
    0% {
        scale: 0.8;
    }
    70% {
        scale: 1.2;
    }
    100% {
        scale: 0.8;
    }
}
</style>