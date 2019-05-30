import { RECEIVE_ADDMSG, SET_RECOMMENDED_SONGS, SET_NEW_SONGS, SET_TOP_MV, SET_HOT_SONGS, SET_HOT_SEARCH, SET_SONG_LIST_INFO, SET_SONG_URL, SET_LYRIC, SET_MULTIMATCH, SET_SUGGEST } from "./mutation-type" //引入matution函数名
import {
    req_add_msg,
    req_recommended_songs,
    req_new_songs,
    req_mv,
    req_hot_songs,
    req_hot_search,
    req_song_list_info,
    play_song,
    req_lyric,
    req_suggest_url,
    req_multimatch_url

} from "../api" // 引入封装好的接口
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
    //异步获取歌单详细
    async get_song_list_info({ commit }, { id }) {
        const result = await req_song_list_info({ id })
        if (result.code == 200) {
            console.log(result, 5555)
            const song_list_info = result.playlist

            commit(SET_SONG_LIST_INFO, { song_list_info })
        }


    },
    //异步获取音乐播放地址
    async get_song_url({ commit }, { id }) {
        const result = await play_song({ id })
        if (result.code == 200) {
            console.log(result, 2211)
            const song_url = result.data

            commit(SET_SONG_URL, { song_url })
        }


    },
    //异步获取歌词
    async get_lyric({ commit }, { id }) {
        const result = await req_lyric({ id })
        if (result.code == 200) {

            const lyric = result.lrc
            console.log(lyric, 2211)
            commit(SET_LYRIC, { lyric })
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
        const limit = "1";
        const result = await req_mv(limit)

        if (result.code == 200) {
            const top_mv = result.data
            commit(SET_TOP_MV, { top_mv })
        }
    },
    //异步获取热歌排行榜
    async get_hot_songs({ commit }) {
        const idx = "1";
        const result = await req_hot_songs(idx)

        if (result.code == 200) {
            const hot_songs = result.playlist.tracks
            commit(SET_HOT_SONGS, { hot_songs })
        }
    },
    //异步获取热门搜索列表
    async get_hot_search({ commit }) {

        const result = await req_hot_search()
        console.log(result, 1111111111)
        if (result.code == 200) {
            const hot_search = result.result.hots
            commit(SET_HOT_SEARCH, { hot_search })
        }
    },
    //搜索建议
    async get_suggest({ commit }, { keywords, type }) {

        const result = await req_suggest_url({ keywords, type })
        console.log(result)
        if (result.code == 200) {
            const suggest = result.result.allMatch
            console.log(11111111)
            commit(SET_SUGGEST, { suggest })
        }
    },
    //搜索多重匹配
    async get_multimatch({ commit }, { keywords }) {

        const result = await req_multimatch_url({ keywords })
        console.log(result)
        if (result.code == 200) {
            const multimatch = result.result
            commit(SET_MULTIMATCH, { multimatch })
        }
    }

}