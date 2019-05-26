import { RECEIVE_ADDMSG, SET_RECOMMENDED_SONGS, SET_NEW_SONGS, SET_TOP_MV } from "./mutation-type" //引入matution函数名
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
    [SET_TOP_MV](state, { top_mv }) {
        state.top_mv = top_mv
    },

}