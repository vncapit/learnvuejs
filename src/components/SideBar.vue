<template>
    <div class="sidebar">
        <div class="menu" :class="{open: !tongleStatus}">
            <span class="btn" @click="tongleMenu">{{ btnMessage }}</span>
            <div class="menu-list">
                <img src="../assets/zap-emoji.svg" alt="">
                <ul class="menu1">
                    <li><a href="#!">Home</a></li>
                    <li><a href="#!">Work</a></li>
                    <li><a href="#!">Contact</a></li>
                </ul>
                <ul class="menu2">
                    <li><a href="#!">RESOURCES</a></li>
                    <li><a href="#!">TIPS</a> </li>
                    <li><a href="#!">SHENANIGANS</a></li>
                </ul>
            </div>
        </div>
        <div class="content">

        </div>
    </div>

</template>

<script>

export default {
    name: 'SideBar',
    data() {
        return {
            btnMessage: '',
            tongleStatus: true,
        }
    },
    mounted () {
        this.btnMessage = 'CLOSE';
    },
    methods: {
        tongleMenu() {
            this.tongleStatus = !this.tongleStatus;
            if(this.tongleStatus) {
                this.btnMessage = 'CLOSE';

            }
            else {
                this.btnMessage = 'OPEN';

            }
        }
    },
};
</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0
}

.btn {
    position: absolute;
    font-size: 18px;
    font-weight: bold;
    color: aliceblue;
    right:0;
    transform: translateX(100%);
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
}
.sidebar {
    display: flex;
}
.menu {
    background-color: #34495e;
    height: 100vh;
    width: 250px;
    position: absolute;
    transition: transform .3s ease-in-out;
    .menu-list {
        margin-top: 20px;
        color: white;
        text-align: left;
        font-family: Arial, Helvetica, sans-serif;
        a {
            text-decoration: none;
            color: white;
            &:hover{
                text-decoration: underline;
            }
        }
        .menu1 {
            font-size: 36px;
            font-weight: 600;
            margin-top: 20px;
            margin-left: 20px;
            li {
                padding-top: 8px;
            }
        }
        .menu2 {
            font-size: 18px;
            font-weight: 400;
            margin-top: 15px;
            margin-left: 20px;
            li {
                padding-top: 6px;
            }
        }
        ul{
            list-style-type: none;
        }
    }
}

.open {
     transform : translateX(-100%);
}
.content {
    background-color: #2c3e50;
    height: 100vh;
    width: 100%;
    
}
</style>