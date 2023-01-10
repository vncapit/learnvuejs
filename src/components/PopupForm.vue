<template>
    <div class="container">
        <div class="add-product">
            <div class="button" @click="clickHandle">
                ADD PRODUCT
            </div>
            <div class="form">
                <div class="title">
                    <label class="desc">Product Title*</label>
                    <input type="text" v-model="formData.title" placeholder="Title">
                </div>
                <div class="price">
                    <div class="info">
                        <label>Product Rating*</label>
                        <input type="text" placeholder="Rating" v-model="formData.rating">
                    </div>
                    <div class="info">
                        <label>Product Price*</label>
                        <input type="text" placeholder="Price" v-model="formData.price">
                    </div>
                    <div class="info">
                        <label>List Price*</label>
                        <input type="text" placeholder="List Price" v-model="formData.listPrice">
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
                    <textarea v-model="formData.desc" rows="4"></textarea>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'PopupForm',
    data() {
        return {
            isOpen: false,
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
            this.isOpen = !this.isOpen
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
    background-image: linear-gradient(-128deg, rgba(255, 181, 32, 0.93) 3%, rgba(239, 39, 153, 0.93) 88%, rgba(237, 18, 171, 0.93) 100%);
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.add-product {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.button {
    width: 150px;
    height: 150px;
    text-align: center;
    line-height: 150px;
    border-radius: 50%;
    background-color: rgb(255, 193, 69);
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    user-select: none;

}

label {
    display: block;
    text-align: left;
    max-width: 120px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 16px;
    font-weight: 600;
    padding: 4px 0;
}

input[type=text] {
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
    width: 500px;
    height: 400px;
    padding: 15px 25px;
    background-color: #FAFAFA;
    border-radius: 5px;

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

            input:checked + span::after{
                content: "😀";
            }
        }
        span {
            text-align: left;
            font-family:Arial, Helvetica, sans-serif;
            font-size: 13px;
            color: #aaa;
            margin: 3px 0;
        }
    }
}
</style>