<template>
    <div class="container">
        <div class="calculator">
            <div class="display">
                <div class="result">
                    <div :class="{'big_number' : isBigNumber }" >{{ result }}</div>
                </div>
                <div class="expression">
                    <div>{{ expressionRaw }}</div>
                </div>
            </div>
            <div class="numpad">
                <div class="row">
                    <span value="7" @click="clickHandle($event)" class="num">7</span>
                    <span value="8" @click="clickHandle($event)" class="num">8</span>
                    <span value="9" @click="clickHandle($event)" class="num">9</span>
                </div>
                <div class="row">
                    <span value="4" @click="clickHandle($event)" class="num">4</span>
                    <span value="5" @click="clickHandle($event)" class="num">5</span>
                    <span value="6" @click="clickHandle($event)" class="num">6</span>
                </div>
                <div class="row">
                    <span value="1" @click="clickHandle($event)" class="num">1</span>
                    <span value="2" @click="clickHandle($event)" class="num">2</span>
                    <span value="3" @click="clickHandle($event)" class="num">3</span>
                </div>
                <div class="row">
                    <span value="." @click="clickHandle($event)" class="num dot">.</span>
                    <span value="0" @click="clickHandle($event)" class="num">0</span>
                </div>
                <span value=" = " @click="clickHandle($event)" class="equal">=</span>
                <div class="operator-group">
                    <span value=" ac " @click="clickHandle($event)" class="operator">AC</span>
                    <i value=" + " operator="+" @click="clickHandle($event)" class="fa-solid fa-plus operator"></i>
                    <i value=" - " operator="+" @click="clickHandle($event)"
                        class="fa-sharp fa-solid fa-minus operator"></i>
                    <i value=" x " operator="+" @click="clickHandle($event)" class="fa-solid fa-xmark operator"></i>
                    <i value=" / " operator="+" @click="clickHandle($event)"
                        class="fa-sharp fa-solid fa-divide operator"></i>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'CalculatorVue',
    data() {
        return {
            result: '',
            expression: '',
            expressionRaw: '',
            isBigNumber: false,
        }
    },
    watch: {
        expression(newValue) {
            let cur_result = '';

            try {
                cur_result = eval(newValue);
                this.result = cur_result;
                this.isBigNumber = (cur_result + '').length > 12;
            }
            /* eslint-disable */
            catch (error) {

            }
        }
    },
    methods: {
        clickHandle($event) {
            this.animaHandle($event);
            let value = $event.target.getAttribute('value');

            if (value == ' ac ') {
                this.acHandle();
                return;
            }
            if (value == ' = ') {
                try {
                    this.expressionRaw = eval(this.expression);
                } catch (error) {

                }
                return;
            }
            this.expressionRaw += value;
            this.expression = this.expressionRaw.replace(/x/g, "*").trimStart();

        },
        acHandle() {
            this.result = '';
            this.expression = '';
            this.expressionRaw = '';
        },
        animaHandle(e) {

            if ([' * ', ' / ', ' + ', ' - ', ' = '].includes(e.target.getAttribute('value'))) {
                e.target.classList.add('released_2');
                setTimeout(() => {
                    e.target.classList.remove('released_2');
                }, 90);
            }
            else {
                e.target.classList.add('released_1');
                setTimeout(() => {
                    e.target.classList.remove('released_1');
                }, 90);
            }
        },
    },
}
</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.released_1 {
    background-color: #1939F6 !important;
}

.released_2 {
    background-color: #333335 !important;
}

.container {
    background: linear-gradient(45deg, rgb(119, 237, 241), rgb(113, 216, 110));
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .calculator {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 300px;
        border-radius: 6px;
        background-color: #191B1D;
        box-shadow: 10px 10px 60px 0px;
        user-select: none;

        .display {
            width: 100%;

            .result {
                width: 100%;
                height: 100px;
                display: flex;
                flex-direction: row-reverse;
                align-items: flex-end;

                div {
                    font-family: 'Times New Roman', Times, serif;
                    font-size: 45px;
                    font-weight: 600;
                    color: #1939F6;
                    padding-right: 15px;
                    padding-left: 15px;
                    overflow: hidden;

                }

                .big_number {
                    font-size: 30px;
                }
            }

            .expression {
                position: relative;
                width: 100%;
                height: 100px;
                display: flex;
                flex-direction: row-reverse;

                div {
                    font-family: 'Times New Roman', Times, serif;
                    font-size: 28px;
                    color: #fefeff;
                    padding-right: 15px;
                    padding-left: 15px;
                    overflow: hidden;
                }
            }
        }

        .numpad {
            position: relative;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            cursor: pointer;

            .row {
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                width: 100%;

                .num {
                    width: 99px;
                    height: 83px;
                    background-color: #1e2022;
                    border: 0.5px solid #191b1d;
                    line-height: 83px;
                    font-family: 'Times New Roman', Times, serif;
                    font-size: 30px;
                    color: #fff;
                }

                .num.dot {
                    border-radius: 0 0 0 6px;
                }
            }

            .equal {
                position: absolute;
                width: 123px;
                height: 104px;
                background-color: #1939F6;
                border-radius: 0 0 6px 0;
                top: 240px;
                left: 188px;
                line-height: 104px;
                color: #fff;
                font-family: 'Times New Roman', Times, serif;
                font-size: 22px;
                font-weight: 600;
            }
        }

        .operator-group {
            position: absolute;
            top: -100px;
            left: -20px;
            z-index: 1;
            display: flex;
            flex-direction: column;
            border-radius: 6px 0 6px 0;
            overflow: hidden;

            span.operator {
                background-color: #1E2022;
                color: #fff;
            }

            .operator {
                width: 40px;
                height: 36px;
                line-height: 36px;
                color: #1939F6;
                background-color: #fff;
                font-size: 14px;
            }

        }
    }
}
</style>