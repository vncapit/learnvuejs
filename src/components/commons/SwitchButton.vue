<template>
    <div class="switch-button" :class="{'switch-on' : isCheck}" @click="clickHandle">
        <input type="checkbox" :checked="value" ref="cb">
        <span></span>
    </div>

</template>

<script>
export default {
    name: 'SwitchButton',
    data() {
        return {
            isCheck: false
        }
    },
    props: {
        value: {
            type: Boolean,
            default: false
        },
    },
    methods: {
        clickHandle() {
            this.isCheck = !this.isCheck
            this.$refs.cb.checked = this.isCheck
            this.$emit('input', this.isCheck)
        },

    },
}
</script>

<style lang="scss" scoped>
    .switch-button {
        background-color: #ccc;
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 30px;
        border-radius: 15px;
        transition: all 0.4s;
        cursor: pointer;
        input {
            opacity: 0;
            width: 0;
            height: 0;
        }
        span {
            display: inline-block;
            position: absolute;
            left: 4px;
            width: 24px;
            height: 24px;
            background-color: #fff;
            border-radius: 50%;
            transition: all 0.2s;
        }
    }
    .switch-on {
        background-color: rgb(51, 113, 245);
    }
    input:checked + span {
        transform: translateX(28px);
    }

</style>