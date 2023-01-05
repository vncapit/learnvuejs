<template>
    <div class="container" ref="container">
        <div class="menu" @mousemove="mouseMoveHandle" @mouseout="mouseOutHandle" ref="menu" :style="transfrom3d">
            <div class="background">

            </div>
            <div class="tab-menu">
                <ul>
                    <li><a href="#!">First Tab</a></li>
                    <li><a href="#!">Second Tab</a></li>
                    <li><a href="#!">Third Tab</a></li>
                </ul>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'TabMenu',
    data() {
        return {
            coordinates: {
                x: 0,
                y: 0,
            },
            transfrom3d: '',
        }
    },
    methods: {
        mouseMoveHandle(e) {
            this.coordinates.x = e.clientX - (this.$refs.menu.getBoundingClientRect().x + this.$refs.menu.clientWidth / 2);
            this.coordinates.y = e.clientY - (this.$refs.menu.getBoundingClientRect().y + this.$refs.menu.clientHeight / 2);

            this.transfrom3d = `transform: perspective(800px) rotateX(${this.coordinates.x}deg) rotateY(${this.coordinates.y}deg)`
            
        },
        mouseOutHandle() {
            this.coordinates.x = 0;
            this.coordinates.y = 0;
        }
    },
    watch: {
        coordinates: {
            handler(newValue) {
                console.log(newValue.x)
                console.log(newValue.y)
            },
            deep: true
        }
    },
}
</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to bottom, #2193b0, #6dd5ed);
    width: auto;
    height: 600px;
}

.menu {
    width: 500px;
    height: 400px;
    position: relative;
    transition:
        transform .4s ease,
        box-shadow .4s ease;
}

.transform3d {
    transform:
        perspective(800px) rotateX(15deg) rotateY(-20deg)
}

.background {
    width: 500px;
    height: 400px;
    background-color: rgb(77, 75, 75);
    background-image: url('../assets/bg1.avif');
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.75;
}

.tab-menu {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;

    background-color: #071011;

    li {
        display: inline-block;
        list-style: none;

        a {
            display: block;
            text-decoration: none;
            color: rgba($color: #fff, $alpha: 0.5);
            font-size: 18px;
            padding: 15px 15px;

            &:hover {
                background-color: #fff;
                color: #bbb;
            }

            transition: background-color 0.2s;
        }
    }
}
</style>