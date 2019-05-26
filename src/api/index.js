import ajax from "./ajax" //引入封装的ajax
import { ADD_URL, RECOMMENDED_SONGS_URL } from "./req_url" // 引入请求地址

//封装请求接口
export const req_add_msg = ({ keywords }) => ajax(ADD_URL, { keywords })
export const req_recommended_songs = () => ajax(RECOMMENDED_SONGS_URL)