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
                    </label>
                    <span>If Is Featured is selected the product will appear in a large card.</span>
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
}

input[type=text] {
    display: block;
    text-align: left;
    width: 100%;
}
// input{
//     width: 100%;
// }

.form {
    display: flex;
    flex-direction: column;
    width: 600px;
    height: 400px;

    .title {
        display: flex;
        flex-direction: column;
    }

    .price {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .info {
            display: inline-block;
            width: 130px;
        }
    }
}
</style>