<template>
    <div class="todo-list">
        <h1>
            Todo List
            <span>Get things done, one item at a time</span>
        </h1>
        <transition-group name="flip-list" tag="ul">
            <template v-if="todoOrdered.length > 0">
                <li v-for="item in todoOrdered" :key="item.id">
                    <div class="item">
                        <span v-bind:class="{ 'item-done': item.isDone }">{{ item.name }}</span>
                        <div class="action">
                            <input class="checkbox" type="checkbox" :checked="item.isDone" @change="changeHandle(item)">
                            <i class="fa fa-trash" @click="deleteHandle(item)"></i>
                        </div>
                    </div>
                </li>
            </template>
        </transition-group>

        <div class="add-new">
            <input type="text" name="" ref="todoText">
            <button value="Add" @click="addHandle">Add</button>
            <!-- <label class="switch">
                <input type="checkbox"  v-model="tongleStatus">
                <span class="slider round"></span>
            </label> -->

            <!-- <SwitchButton :isCheck="isChecked" @input="isChecked=$event"/> -->
            <SwitchButton class="switch-button" v-model="isChecked" />
        </div>
    </div>

</template>

<script>

import SwitchButton from '../components/commons/SwitchButton.vue';

export default {
    name: 'ToDo',
    components: {
        SwitchButton,
    },
    props: {

    },
    data() {
        return {
            isChecked: false,
            todoList: [
                {
                    id: 1,
                    name: 'Item 1',
                    isDone: true,
                },
                {
                    id: 2,
                    name: 'Item 2',
                    isDone: false,
                },
                {
                    id: 3,
                    name: 'Item 3',
                    isDone: true,
                },
                {
                    id: 4,
                    name: 'Item 4',
                    isDone: false,
                },
            ],
            tongleStatus: false,
        }
    },
    computed: {
        todoOrdered() {
            if (!this.isChecked) {
                return this.todoList;
            }
            else {
                let arr = [...this.todoList]
                arr.sort(function (a, b) {
                    return a.isDone - b.isDone
                });

                return arr;
            }
        }
    },
    watch: {
        todoList: {
            handler(newValue) {
                localStorage.setItem('todoList', JSON.stringify(newValue))
            },
            deep: true
        },
    },
    mounted() {
        if (localStorage.todoList) {
            this.todoList = JSON.parse(localStorage.getItem('todoList'));
        }
    },
    methods: {
        changeHandle(item) {
            this.isSort = false
            let index = this.todoList.findIndex(a => a.id === item.id);
            this.todoList[index].isDone = !item.isDone;
        },
        deleteHandle(item) {
            this.isSort = false
            let index = this.todoList.findIndex(a => a.id === item.id);
            this.todoList.splice(index, 1);
        },
        addHandle() {
            this.isSort = false
            let text = this.$refs.todoText.value
            let id = Math.round(Math.random() * 100000)
            this.todoList.push({ id: id, name: text, isDone: false })

        },
    }
}

</script>
<style lang="scss" scoped >
* {
    padding: 0px;
    margin: 0px;
}


.flip-list-move {
    transition: transform 1.5s;
}

.add-new {
    display: flex;
    align-items: center;
    justify-content: center;

    input {
        height: 30px;
        width: 300px;
    }

    button {
        margin-left: 10px;
        width: 60px;
        height: 34px;
    }
}

.todo-list {
    box-shadow: -20px -20px 0px 0px rgba(100, 100, 100, .1);
    color: white;
    background-color: rgba($color: #ff0000, $alpha: 0.6);
    font-family: 'Quicksand', sans-serif;
    font-size: 18px;
    width: 500px;
    margin: 10px auto;
    padding: 20px 30px;

    h1 {
        font-size: 40px;
        text-align: left;
        padding: 20px;

        span {
            font-size: 16px;
            display: block;
            padding-top: 10px;
            padding-bottom: 10px;
            border-bottom: solid 1px;
        }
    }
}

li {
    list-style: none;
}

.checkbox {
    display: inline-block;
    transform: scale(1.3);
    margin-right: 15px;
}


.item {
    display: flex;
    justify-content: space-between;
    border: none;
    padding: 10px 10px;
    align-items: center;
    margin: 2px auto;
    background: rgba(255, 255, 255, 0.1);

}

.action {
    display: inline-block;
}

.item-done {
    opacity: 0.6;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: -.5rem;
        display: block;
        width: 0%;
        height: 1px;
        border-bottom: solid 1px #fff;
        animation: donedone 0.3s ease-out 0s forwards;
    }
}

@keyframes donedone {
    to {
        width: calc(100% + 1rem);
    }
}

.switch-button {
    margin-left: 10px;
}


/* The switch - the box around the slider */
.switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    margin: 30px 20px;

}

/* Hide default HTML checkbox */
.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

/* The slider */
.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
}

input:checked+.slider {
    background-color: #2196F3;
}

input:focus+.slider {
    box-shadow: 0 0 1px #2196F3;
}

input:checked+.slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}
</style>