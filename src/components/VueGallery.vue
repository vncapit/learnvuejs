<template>
    <div class="container">
        <div class="wrap">
            <h1 class="title">Vue Gallery</h1>
            <p class="desc">A simple photo gallery built atop Vue.js</p>
            <div class="gallery">
                <div class="active-photo" :style="style_active_url">
                    <button class="btn-left btn" @click="handlePrevious()">
                        <i class="fa-solid fa-circle-chevron-left"></i>
                    </button>
                    <button class="btn-right btn" @click="handleNext()">
                        <i class="fa-solid fa-circle-chevron-right"></i>
                    </button>
                </div>
                <div class="photo-list">
                        <div v-for="photo, indexx in photoList" :key="indexx" class="photo"
                            :class="{'is-active' : (index == indexx)}" @click="handleClick(indexx)"
                            :style="`background-image: url('${photo}');`"></div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    name: 'VueGallery',
    data() {
        return {
            photoList: [
                'image/gallery1.jpg',
                'image/gallery2.jpg',
                'image/gallery3.jpg',
                'image/gallery4.jpg',
                'image/gallery5.jpg',
                'image/gallery6.jpg',
                'image/gallery7.jpg',
                'image/gallery8.jpg',

            ],
            index: 0,
        }
    },
    computed: {
        style_active_url() {
            return `background-image: url('${this.photoList[this.index]}');`;
        }
    },
    methods: {
        handlePrevious() {
            this.index--;
            if (this.index < 0) {
                this.index = this.photoList.length - 1;
            }
        },
        handleNext() {
            this.index++;
            if (this.index + 1 >= this.photoList.length) {
                this.index = 0;
            }
        },
        handleClick(index) {
            this.index = index;
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #5C4084;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;

    h1 {
        background: linear-gradient(#fff, #8f70ba);
        -webkit-text-fill-color: transparent;
        background-clip: text;
        -webkit-background-clip: text;

        margin-top: 50px;
    }

    p {
        color: #8f70ba;
        margin-top: 10px;
        margin-bottom: 20px;
    }


    .wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        width: calc(100vw - 80px);

        .gallery {
            width: 100%;
            max-width: 790px;
            background-color: rgb(255, 255, 255);
            display: flex;
            flex-direction: column;
            padding: 8px;

            .active-photo {
                position: relative;
                width: 100%;
                aspect-ratio: 27/18;
                background-color: #34418f;
                background-size: cover;
                z-index: 0;

                .btn {
                    position: absolute;
                    width: 80px;
                    height: 100%;
                    border: none;
                    cursor: pointer;
                    user-select: none;

                    i {
                        font-size: 30px;
                        color: #fff;
                    }
                }

                .btn-left {
                    top: 0;
                    left: 0;
                    background: transparent;

                    &:hover {
                        background: linear-gradient(90deg, rgba(50, 50, 50, 0.5), rgba(50, 50, 50, 0));
                    }
                }

                .btn-right {
                    top: 0;
                    right: 0;
                    background: transparent;

                    &:hover {
                        background: linear-gradient(90deg, rgba(50, 50, 50, 0), rgba(50, 50, 50, 0.5));
                    }
                }
            }

            .photo-list {
                display: grid;
                width: 100%;
                margin-top: 8px;
                grid-template-columns: auto auto auto;
                gap: 8px;

                .photo {
                    background-size: cover;
                    width: 100%;
                    aspect-ratio: 27/18;
                    cursor: pointer;
                    user-select: none;
                    box-sizing: border-box;
                }

                .is-active {
                    outline: 3px solid #5C4084;
                    outline-offset: 2px;
                }

                @media (min-width:900px) {
                    grid-template-columns: auto auto auto;

                }

                @media (max-width: 700px) {
                    grid-template-columns: auto auto;
                }

                @media (max-width: 420px) {
                    grid-template-columns: auto;
                }
            }
        }
    }
}
</style>