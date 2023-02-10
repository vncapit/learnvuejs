<template>
    <div>
        {{ renderMenu }}
    </div>
</template>

<script>
// import { mapGetters } from 'vuex';
export default {
    name: "MenuVue",
    data() {
        return {
            menu: [
                { id: 0, pid: -1, name: 'Root' },
                { id: 1, pid: 0, name: 'Menu 1' },
                { id: 2, pid: 0, name: 'Menu 2' },
                { id: 3, pid: 0, name: 'Menu 3' },
                { id: 4, pid: 2, name: 'Menu 2-1' },
                { id: 5, pid: 2, name: 'Menu 2-2' },
                { id: 6, pid: 5, name: 'Menu 2-2-1' },
                { id: 7, pid: 5, name: 'Menu 2-2-2' },
                { id: 8, pid: 7, name: 'Menu 2-2-2-1' },
                { id: 9, pid: 3, name: 'Menu 3-1' },
                { id: 10, pid: 3, name: 'Menu 3-2' },
                { id: 11, pid: 10, name: 'Menu 3-2-1' }
            ]
        }
    },
    computed: {
        renderMenu() {
            let treeMenu = this.buildTree(this.menu, -1);

            return treeMenu
        }
    },
    methods: {
         buildTree : (menu, parentId) => {
            let tree = [];
            for (let i = 0; i < menu.length; i++) {
                let item = menu[i];
                if (item.pid === parentId && item.id !== 0) {
                    let children = this.buildTree(menu, item.id);
                    if (children.length > 0) {
                        item.children = children;
                    }
                    tree.push(item);
                }
            }
            return tree;
        },
        
        render: (menus) => {
            console.log(menus)
            let result = ""
            result += '<ul>'
            for (let i = 0; i < menus.length; i++) {
                const menu = menus[i]
                result += `<li>${menu.name}`
                if (menu.children.length == 0) {
                    result += '</li>'
                }
                result += this.render(menu.children)
            }
            result += '</ul>'
            return result;
        }
    },

}
</script>

<style lang="scss" scoped>

</style>