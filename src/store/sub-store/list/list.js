export default {
    namespaced: true, //开启命名空间
    state: {
        title: "我是vuex子模块"
    },
    getters: {
        getTitle(state) {
            return state.title
        }
    },
    mutations: {
        setTitle(state, rootState) {
            state.title += "mutation"
        }



    },
    actions: {
        change1({ commit }) {
            commit("setTitle")
        },
        changeC({ state, commit, rootState }) {
            console.log(state, 2)
            console.log(commit, 2)
            console.log(rootState, 2)
        }
    },

}