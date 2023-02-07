<template>
    <div class="container">
        <div class="add-product" :class="{ 'open': !isHide }">
            <div class="button" @click="clickHandle" :class="{ 'hide-form': !isHide }">
                <span>ADD PRODUCT</span>
            </div>
            <div class="form-content" :class="{ 'open-form': !isHide }">
                <form class="form" :class="{'hide-form' : isHide}">
                    <div class="title">
                        <label class="desc">Product Title*</label>
                        <input type="text" v-model="formData.title" placeholder="Title" required="true">
                    </div>
                    <div class="price">
                        <div class="info">
                            <label>Product Rating*</label>
                            <input type="number" placeholder="Rating" v-model="formData.rating"  required="true" min="1" max="5" >
                        </div>
                        <div class="info">
                            <label>Product Price*</label>
                            <input type="number" placeholder="Price" v-model="formData.price"  required="true" min="0" step="0.1">
                        </div>
                        <div class="info">
                            <label>List Price*</label>
                            <input type="number" placeholder="List Price" v-model="formData.listPrice"  required="true" min="0" step="0.1">
                        </div>
                    </div>
                    <div class="feature">
                        <label>Is Featured
                            <input type="checkbox">
                            <span></span>
                        </label>
                        <span><i>If Is Featured is selected the product will appear in a large card.</i></span>
                    </div>
                    <div class="desc">
                        <label>Product Description</label>
                        <textarea v-model="formData.desc" placeholder="Description"></textarea>
                    </div>
                    <div class="action">
                        <button type="submit" class="submit" @click="submitHandle">
                            ADD PRODUCT
                        </button>
                        <span class="cancel" @click="cancelHandle">
                            Cancel
                        </span>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PopupForm',
    data() {
        return {
            isHide: true,
            formData: {
                title: '',
                rating: null,
                price: null,
                listPrice: null,
                isFeatured: false,
                desc: ''
            }
        }
    },
    methods: {
        clickHandle() {
            this.isHide = false
        },
        cancelHandle() {
            this.isHide = true
        },
        submitHandle() {

        }
    },
}
</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &::selection {
        color: #fff;
        background: #F03D99;
    }
}

.container {
    background-image: linear-gradient(-128deg, rgba(255, 181, 32, 0.93) 3%, rgba(239, 39, 153, 0.93) 88%, rgba(237, 18, 171, 0.93) 100%);
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.add-product {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: rgb(255, 193, 69);
    transition: all 0.4s ease;
}

.hide-form {
    display: none !important;
}

.open-form {
    opacity: 1 !important;
    transition: all 0.2s 0.2s;
}

.form-content {
    opacity: 0;
    width: 100%;
}



.open {
    width: 500px;
    height: 430px;
    background-color: #FAFAFA;
    border-radius: 5px;
}

.button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    font-size: 16px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    user-select: none;

}

label {
    display: block;
    text-align: left;
    max-width: 100%;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 16px;
    font-weight: 600;
    padding: 4px 0;
}

input[type=text], input[type=number]{
    display: block;
    text-align: left;
    width: 100%;
    padding: 5px;
    border: 1px solid #ECECEC;
    border-radius: 4px;
    color: #3D3D3D;
    font-size: 16px;

    &:focus {
        outline: solid 1px;
        outline-color: #FDAA3D;
    }
}

.form {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 5px 25px;

    .title {
        display: flex;
        flex-direction: column;
        padding: 10px 0;
    }

    .price {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 10px 0;

        .info {
            display: inline-block;
            width: 120px;
        }
    }

    .feature {
        display: flex;
        flex-direction: column;
        padding: 5px 0;

        label {
            input {
                opacity: 0;
                width: 0;
                height: 0;
            }

            span::after {
                content: "😶";
            }

            input:checked+span::after {
                content: "😀";
            }
        }

        span {
            text-align: left;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 13px;
            color: #aaa;
            margin: 3px 0;
        }
    }

    .desc {
        display: flex;
        flex-direction: column;

        label {
            display: block;
            width: 100%;
        }

        textarea {
            height: 80px;
            resize: none;
            padding: 0px 4px;
            border: 1px solid #ECECEC;
            border-radius: 4px;
            color: #3D3D3D;
            font-size: 16px;

            &:focus {
                outline: solid 1px;
                outline-color: #FDAA3D;
            }
        }
    }

    .action {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;

        button {
            background-color: #3498DB;
            color: #fff;
            font-size: 14px;
            font-weight: 600;
            padding: 12px 25px;
            border-radius: 25px;
            border: none;
            cursor: pointer;

            &:hover {
                background-color: #1694e7;
            }
        }

        span {
            font-size: 12px;
            padding-top: 12px;
            cursor: pointer;

            &:hover {
                text-decoration: underline;
            }
        }
    }
}
</style>