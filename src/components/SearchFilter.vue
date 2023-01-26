<template>
    <div class="container">
        <div class="search">
            <input type="text" v-model="search" name="" id="" placeholder="Search Title..">
            <span>Search Title</span>
        </div>

        <div class="cards">
            <div class="card" v-for="card in card_filtered" :key="card.title">
                <a :href=card.link class="link">
                    <img class="img" :src=card.img alt="">
                    <div class="author">
                        Post by: {{ card.author }}
                    </div>
                    <div class="title">
                        {{ card.title }}
                    </div>
                </a>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "SearchFilter",
    data() {
        return {
            search: '',
            cards: [
                {
                    title: 'Vue.js',
                    link: 'https://vuejs.org/',
                    author: 'Chris',
                    img: 'https://vuejs.org//images/logo.png'
                },
                {
                    title: 'React.js',
                    link: 'https://facebook.github.io/react/',
                    author: 'Tim',
                    img: 'https://daynin.github.io/clojurescript-presentation/img/react-logo.png'
                },
                {
                    title: 'Angular.js',
                    link: 'https://angularjs.org/',
                    author: 'Sam',
                    img: 'https://angularjs.org/img/ng-logo.png'
                },
                {
                    title: 'Ember.js',
                    link: 'http://emberjs.com/',
                    author: 'Rachel',
                    img: 'https://emberjs.com/images/brand/ember-tomster-lockup-4c.svg'
                },
                {
                    title: 'Meteor.js',
                    link: 'https://www.meteor.com/',
                    author: 'Chris',
                    img: 'http://hacktivist.in/introduction-to-nodejs-mongodb-meteor/img/meteor.png'
                },
                {
                    title: 'Aurelia',
                    link: 'http://aurelia.io/',
                    author: 'Tim',
                    img: 'https://cdn.auth0.com/blog/aurelia-logo.png'
                },
                {
                    title: 'Node.js',
                    link: 'https://nodejs.org/en/',
                    author: 'A. A. Ron',
                    img: 'https://code-maven.com/img/node.png'
                },
                {
                    title: 'Pusher',
                    link: 'https://pusher.com/',
                    author: 'Alex',
                    img: 'https://avatars1.githubusercontent.com/u/739550?v=3&s=400'
                },
                {
                    title: 'Feathers.js',
                    link: 'http://feathersjs.com/',
                    author: 'Chuck',
                    img: 'https://cdn.worldvectorlogo.com/logos/feathersjs.svg'
                },
            ],
        }
    },
    computed: {
        card_filtered() {
            return this.cards.filter(
                card => card.title.toLowerCase().includes(this.search.toLowerCase())
            )
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
    font-family: 'Times New Roman', Times, serif;
    font-size: 10px;
    margin-top: 10px;

    .search {
        position: relative;

        input {
            border: 1px solid #ccc;
            width: 170px;
            padding: 4px 8px;
            margin-top: 20px;
            margin-bottom: 10px;
            user-select: none;
            transition: transform 0.2s;

            &:focus {
                outline: none;
                transform: scale(1.06);
                & + span {
                    top: 5px;
                    left: 3px;
                }
            }

        }
        span {
            position: absolute;
            top: 50%;
            left: 10%;
            z-index: -1;
            transition: all 0.2s;
            color: rgb(117, 110, 110);
        }
    }



    .cards {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 430px;
        justify-content: flex-start;
        user-select: none;

        .card {
            display: flex;
            flex-direction: column;
            box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
            width: 125px;
            height: 170px;
            padding-top: 10px;
            margin: 8px;

            img {
                width: 100px;
                height: 100px;
            }

            a {
                width: 100%;
                height: 100%;
                text-decoration: none;

                &:visited,
                &:hover,
                &:link,
                &:active {
                    color: #67CBF8;
                }
            }

            .author {
                padding: 4px;
            }

            .title {
                font-size: 24px;
            }   
            &:hover {
                transform: scale(1.1);
            }
            transition: all 0.3s;
        }
    }
}
</style>