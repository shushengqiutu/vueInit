import { RECEIVE_ADDMSG, SET_RECOMMENDED_SONGS, SET_NEW_SONGS, SET_TOP_MV } from "./mutation-type" //引入matution函数名
import { req_add_msg, req_recommended_songs, req_new_songs, req_mv } from "../api" // 引入封装好的接口
//action  可以处理同步和异步 一般是异步的 通过调用 mutation 里的函数来达到修改state的目的
export default {
    // 1.asyns  await 处理异步 数据 
    async get_add_msg({ commit }, { keywords }) {
        const result = await req_add_msg(keywords)
        if (result.code === 200) {
            console.log(22)

            const mm = result.result.songs["0"].name
                //调用 mutation 函数
            commit(RECEIVE_ADDMSG, { mm })
        }

    },
    //异步获取推荐音乐列表
    async get_recommended_songs({ commit }) {
        const result = await req_recommended_songs()
        if (result.code == 200) {
            const recommended_songs = result.result
            commit(SET_RECOMMENDED_SONGS, { recommended_songs })
        }


    },
    //异步获取新音乐
    async get_new_songs({ commit }) {
        const result = await req_new_songs()

        if (result.code == 200) {
            const new_songs = result.result
            commit(SET_NEW_SONGS, { new_songs })
        }
    },
    //异步获取轮播图
    async get_mv({ commit }) {
        const limit = "";
        const result = await req_mv(limit)
        console.log(result.data)
        if (result.code == 200) {
            const top_mv = result.data
            commit(SET_TOP_MV, { top_mv })
        }
    }
}