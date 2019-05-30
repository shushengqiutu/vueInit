import { RECEIVE_ADDMSG, SET_RECOMMENDED_SONGS, SET_NEW_SONGS, SET_TOP_MV, SET_HOT_SONGS, SET_HOT_SEARCH, SET_SONG_LIST_INFO, SET_SONG_URL, SET_LYRIC, SET_SUGGEST, SET_MULTIMATCH } from "./mutation-type" //引入matution函数名
//封装处理state的函数，只能处理同步，逻辑越少越好 state里的数据只能被mutation修改
export default {
    [RECEIVE_ADDMSG](state, { mm }) {
        state.msg += mm
    },
    //设置state中recommended_songs数据
    [SET_RECOMMENDED_SONGS](state, { recommended_songs }) {
        state.recommended_songs = recommended_songs
    },
    //设置state中的new_songs数据
    [SET_NEW_SONGS](state, { new_songs }) {
        state.new_songs = new_songs
    },
    //设置state中的top_mv数据
    [SET_TOP_MV](state, { top_mv }) {
        state.top_mv = top_mv
    },
    //设置state中的hot_songs数据
    [SET_HOT_SONGS](state, { hot_songs }) {
        state.hot_songs = hot_songs
    },
    [SET_HOT_SEARCH](state, { hot_search }) {
        state.hot_search = hot_search
    },
    //歌单详情
    [SET_SONG_LIST_INFO](state, { song_list_info }) {
        state.song_list_info = song_list_info

    },
    //歌曲播放地址
    [SET_SONG_URL](state, { song_url }) {
        state.song_url = song_url

    },
    //歌词
    [SET_LYRIC](state, { lyric }) {
        state.lyric = lyric

    },
    //存入搜索数据
    set_targets(state, newstargets) {

        state.targets = newstargets

    },
    //搜索建议
    [SET_SUGGEST](state, { suggest }) {
        console.log(suggest, 55)
        state.suggest = suggest

    },
    //搜索多重匹配
    [SET_MULTIMATCH](state, { multimatch }) {
        state.multimatch = multimatch

    },



}