// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import "./assets/lib/hotCssJs/hotcss"
import "./component_mint_ui"
import 'mint-ui/lib/style.css'
import "./component_EleUI"
import router from "./router"
import store from "./store"


Vue.config.productionTip = false

/* eslint-disable no-new */





new Vue({
    el: '#app',
    components: { App },
    router,
    store,

    template: '<App/>'
})
router.beforeEach((to, from, next) => {


    next()

})