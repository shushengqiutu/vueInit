import Vue from "vue"
import Router from "vue-router"

import Home from "../pages/home/home"
import Music from "../pages/home/music/music"
import Hot from "../pages/home/hot/hot"
import Search from "../pages/home/search/search"
Vue.use(Router)
export default new Router({
    routes: [{
            path: "/home",
            name: "home",
            component: Home,
            children: [{
                    path: "/music",
                    name: "music",
                    component: Music,
                },
                {
                    path: "/hot",
                    name: "hot",
                    component: Hot,
                },
                {
                    path: "/search",
                    name: "search",
                    component: Search
                }
            ]
        },
        {
            path: '/',
            redirect: '/home'

        }


    ]
})