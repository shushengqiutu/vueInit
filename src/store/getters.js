export default {
    get_msg(state) {
        return state.msg
    },
    //过滤推荐音乐，修正长度为6，大于10万的播放数量转化为万单位
    f_recommended_songs(state) {
        const arry = state.recommended_songs.slice(0, 6)
        const newarry = arry.map(item => {
            if (item.playCount > 100000) {
                item.playCount = parseInt(item.playCount).toString().slice(0, -4) + "万"
                return item

            } else {
                return item
            }
        })
        return newarry
    },
    //过滤获取新音乐列表
    f_new_songs(state) {
        return state.new_songs.slice(0, 10)
    },
    f_hot_songs(state) {
        return state.hot_songs.slice(0, 20)
    }

}