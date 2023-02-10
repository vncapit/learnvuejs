import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        menu: []
    },
    getters: {
        count: state => state.count,
    }
})

export default store