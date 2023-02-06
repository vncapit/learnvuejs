<template>
    <div class="container">
        <div class="content">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum provident pariatur inventore laudantium
            laboriosam commodi repellat voluptatibus deserunt, atque beatae ex facere at a sint vel magnam minima quae?
            Autem rerum officiis veritatis repellat perspiciatis, voluptatibus ex mollitia eos velit iure ullam
            aspernatur dolor magni. Numquam nesciunt repudiandae excepturi vero incidunt blanditiis vitae dolores
            impedit earum, cupiditate, voluptates voluptatibus corrupti eligendi, odio delectus molestiae est adipisci
            placeat soluta consequatur optio rem exercitationem. Nesciunt doloribus, perspiciatis ullam perferendis eum
            architecto vero ex pariatur qui iste assumenda dignissimos corporis veniam nisi tenetur nihil. Quas beatae
            architecto perspiciatis mollitia, deleniti, dicta repellat facere ullam eius impedit dolor explicabo
            recusandae odit sunt delectus quis tenetur quasi omnis rem magnam possimus. Error libero nostrum, vero
            tenetur repellendus veritatis. Ipsam expedita quia ratione repellat placeat amet quo esse veritatis? Facilis
            ad, velit placeat praesentium impedit vitae eos iste atque esse sunt, fugit voluptates architecto aliquid
            accusantium minima aperiam laboriosam nostrum distinctio. Nostrum dolorum sed accusamus, assumenda nulla aut
            ullam officia quod magnam ea autem optio fugiat cum asperiores, culpa blanditiis harum laboriosam. Odio eos,
            recusandae id assumenda dicta ratione magnam quae saepe sint facilis, reprehenderit voluptate quia odit
            totam, quibusdam corporis quam eveniet, magnam natus sunt at dignissimos aliquid adipisci eum? Incidunt id
            accusamus quam rerum nam minus repudiandae corrupti magnam recusandae. Dolorem tempore ad dolor dolores,
            eveniet non repellat molestias quis rerum enim, minus voluptate accusantium? Consequatur optio consequuntur
            omnis! Consequuntur qui quam dolore repellendus voluptates alias dolorum expedita veniam inventore dolorem,
            architecto distinctio. Ad, quas, autem repudiandae laborum laudantium quisquam quibusdam eaque,
            necessitatibus iusto natus porro nihil id! Eligendi vel praesentium provident, dolorum repudiandae
            aspernatur excepturi, laudantium repellendus blanditiis, quod consectetur ab non nostrum odit? Itaque dolor
            magni expedita, illo aliquid recusandae saepe ab, deleniti, dolore et vero nihil molestiae laborum deserunt.
            Rem ullam repellendus unde nemo voluptatum sit laboriosam tempora rerum, iusto ipsa numquam laborum voluptas
            recusandae illum cumque magnam facilis autem perspiciatis deserunt quia fuga sequi blanditiis? Praesentium
            architecto voluptatum eligendi nesciunt quam, ducimus harum laudantium minima fuga rerum hic deleniti magni
            expedita culpa error fugiat voluptate, alias modi blanditiis totam aliquid ut? Qui dolores libero quisquam
            vero aliquid tenetur suscipit harum earum officiis unde vel, consequuntur accusamus quos ab quod nihil fuga
            ad?
        </div>
        <div v-show="showModalImage" class="modal" @click="closeModal()">
            <div class="cover">
                <i class="fa-solid fa-circle-xmark"></i>
                <a href="!#">
                    <div class="image"></div>
                </a>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'ModalImage',
    data() {
        return {
            showModalImage: true,
        }
    },
    methods: {
        closeModal() {
            this.showModalImage = false;
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
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    .content {
        width: 50%;
        background-color: rgb(236, 234, 230);
    }

    .modal {
        position: absolute;
        top: 0;
        left: 0;
        inset: 0;
        background: rgba($color: #000000, $alpha: 0.5);
        display: flex;
        justify-content: center;
        align-items: center;

        .cover {
            position: relative;

            .image {
                width: 300px;
                height: 300px;
                background: url('../../public/image/modalimage.png') no-repeat;
                background-size: cover;
                cursor: pointer;
            }

            i {
                position: absolute;
                top: -30px;
                right: -20px;
                font-size: 30px;
                color: rgba($color: #fffcfc, $alpha: 0.9);
                cursor: pointer;
            }
        }
    }
}
</style>