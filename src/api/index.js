import ajax from "./ajax" //引入封装的ajax
import { ADD_URL, RECOMMENDED_SONGS_URL, NEWSONG_URL, MV_URL } from "./req_url" // 引入请求地址

//封装请求接口
export const req_add_msg = ({ keywords }) => ajax(ADD_URL, { keywords })
    //请求推荐音乐
export const req_recommended_songs = () => ajax(RECOMMENDED_SONGS_URL)
    //请求新音乐
export const req_new_songs = () => ajax(NEWSONG_URL)


// hot 
//请求 页面 头部轮播图
export const req_mv = ({ limit }) => ajax(MV_URL, { limit } = { limit: 5 })