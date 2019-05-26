export default {
    get_msg(state) {
        return state.msg
    },
    f_recommended_songs(state) {
        return state.recommended_songs.slice(0, 6)
    }

}