import Vue from "vue"
import Router from "vue-router"

import Home from "../pages/home/home"
import SongSheetInfo from "../pages/songSheetInfo/songSheetInfo"

import Music from "../pages/home/music/music"
import Hot from "../pages/home/hot/hot"
import Search from "../pages/home/search/search"
import Error404 from "../components/404/404"


Vue.use(Router)
export default new Router({
    routes: [{
            path: '/',
            redirect: '/mucic'

        },
        {
            path: '/home',
            redirect: '/mucic'

        },
        {
            path: "/songSheetInfo",
            name: "songSheetInfo",
            component: SongSheetInfo,
        },
        {

            path: "/home",
            name: "home",
            component: Home,
            children: [{
                    path: "/mucic",
                    name: "music",
                    component: Music,
                    meta: {
                        keepAlive: false // 不需要缓存
                    }
                },
                {
                    path: "/hot",
                    name: "hot",
                    component: Hot,
                    meta: {
                        keepAlive: false // 不需要缓存
                    }
                },
                {
                    path: "/search",
                    name: "search",
                    component: Search,
                    meta: {
                        keepAlive: false // 不需要缓存
                    }
                },
                {
                    path: "/*",
                    name: "error404",
                    component: Error404,
                    meta: {
                        keepAlive: false // 不需要缓存
                    }
                }
            ]
        }






    ]

})