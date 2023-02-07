<template>
    <div class="container" ref="container">
        <div class="menu" @mousemove="mouseMoveHandle" @mouseout="mouseOutHandle" ref="menu" :style="style_transform3d">
            <div class="background" :style="style_background_url">

            </div>
            <div class="tab-menu">
                <ul v-show="contents.length">
                    <li v-for="content in contents" :key="content.id" @click="tabClickHandle(content)">
                        {{ content.name }}
                    </li>
                </ul>
            </div>
            <div class="content">
                <h1 class="header">
                    {{ contents[index].header }}
                </h1>
                <p class="paragraph">
                    {{ contents[index].paragraph }}
                </p>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'TabMenu',
    data() {
        return {
            contents: [
                {
                    id: 0,
                    name: 'First Tab',
                    imageUrl: 'image/tab-menu/bg1.avif',
                    header: 'First Header',
                    paragraph: 'Trong khi đó, Bộ Công Thương khẳng định đang theo dõi sát để xử lý tình hình. "Dự kiến nhà máy này vận hành trở lại vào giữa tháng 1 và sẽ tăng sản xuất để bù sản lượng thiếu hụt từ nay tới Tết Nguyên đán", đại diện Bộ thông tin.',
                },
                {
                    id: 1,
                    name: 'Second Tab',
                    imageUrl: 'image/tab-menu/bg2.avif',
                    header: 'Second Header',
                    paragraph: 'Đại diện NSRP xác nhận và cho biết "nhà máy đã và đang trong quá trình sửa chữa để phân xưởng RFCC vận hành trở lại trong thời gian sớm nhất".',
                },
                {
                    id: 2,
                    name: 'Third Tab',
                    imageUrl: 'image/tab-menu/bg3.avif',
                    header: 'Third Header',
                    paragraph: 'Tình hình sản xuất của Nghi Sơn ổn định trong giai đoạn nửa cuối năm 2022, với 100% công suất. Sản lượng xăng dầu cung ứng bình quân mỗi tháng nhà máy này khoảng 600.000 m3.',
                }
            ],
            index: 0,
            coordinates: {
                x: 0,
                y: 0,
            },
        }
    },
    computed: {
        style_transform3d() {
            let x = (this.coordinates.x * 15 / (500 / 2))
            let y = (this.coordinates.y * 20 / (400 / 2))
            if (x == 0 && y == 0) {
                return `transform: perspective(800px) rotateX(${y}deg) rotateY(${-x}deg); transition: transform 0.3s`
            }
            return `transform: perspective(800px) rotateX(${y}deg) rotateY(${-x}deg)`
        },
        style_background_url() {
            return `background-image: url('${this.contents[this.index].imageUrl}')`
        }
    },
    methods: {
        mouseMoveHandle(e) {
            this.coordinates.x = e.clientX - (this.$refs.menu.getBoundingClientRect().x + this.$refs.menu.clientWidth / 2);
            this.coordinates.y = e.clientY - (this.$refs.menu.getBoundingClientRect().y + this.$refs.menu.clientHeight / 2);

        },
        mouseOutHandle() {
            this.coordinates.x = 0;
            this.coordinates.y = 0;
        },
        tabClickHandle(event) {
            this.index = event.id
        }
    }
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
    height: 100vh;
}

.menu {
    width: 500px;
    height: 400px;
    position: relative;
}

.background {
    width: 500px;
    height: 400px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0;
    border-radius: 7px;
    &::after {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba($color: rgb(12, 11, 11), $alpha: 0.5);
    }
}

.tab-menu {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    background-color: #071011;
    li {
        display: inline-block;
        list-style: none;
        text-decoration: none;
        color: rgba($color: #fff, $alpha: 0.7);
        font-size: 18px;
        padding: 15px 15px;
        transition: background-color 0.2s;
        user-select: none;
        cursor: pointer;
        &:hover {
            background-color: #fff;
            color: #bbb;
        }
    }
}

.content {
    position: absolute;
    top: 20%;
    padding: 30px 50px;
    text-align: left;
    h1 {
        margin-bottom: 10px;
    }
    z-index: 100;
    color: rgba($color: #fff, $alpha: 0.8)
}



</style>