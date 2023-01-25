<template>
    <div class="container_">
        <span>
            <svg viewBox="0 0 24 24" class="icon">
                <path fill="currentColor" d="M18.984 12.984h-6v6h-1.969v-6h-6v-1.969h6v-6h1.969v6h6v1.969z"></path>
            </svg>
        </span>

    </div>
</template>

<script>
export default {
    name: "HotSpotEl"
}
</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
}

.container_ {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 30%;
    left: 40%;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgb(253, 253, 253);
        border-radius: 50%;
        z-index: 0;
        animation: wave 3s ease-in infinite;
    }
}

span {
    background-color: #CF00F1;
    position: absolute;
    display: inline-block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 50%;
    z-index: 1;
    animation: pulse 3s ease infinite;
}

svg {
    fill: currentColor;
    width: 100%;
    height: 100%;
}

.icon {
    color: #CF00F1;
}

@keyframes pulse {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
}

@keyframes wave {
    0% {
        opacity: 1;
        transform: scale(.8);
    }
    100% {
        opacity: 0;
        transform: scale(2);
    }
}


</style>