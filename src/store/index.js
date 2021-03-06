import state from "./states"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"
import Vue from "vue"
import list from "./sub-store/list/list"
import car from "./sub-store/shopcar/car"
import createPersistedState from 'vuex-persistedstate'
// import Vuex from "vuex"
// Vue.use(vuex)
import Vuex from "vuex"
Vue.use(Vuex)
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {
        list,
        car
    },
    plugins: [createPersistedState()] //防止数据刷新丢失
})