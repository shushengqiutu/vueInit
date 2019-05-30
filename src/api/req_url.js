//储存请求地址
const BASE_URL = "/api";
export const ADD_URL = ` ${BASE_URL}/search`;
//推荐歌单
export const RECOMMENDED_SONGS_URL = ` ${BASE_URL}/personalized`;
//歌单详情
export const SONG_LIST_INFO = ` ${BASE_URL}/playlist/detail`;
//播放音乐    
export const PLAY_SONG_URL = ` ${BASE_URL}/song/url`;
//歌词链接
export const LYRIC_URL = ` ${BASE_URL}/lyric`;

//推荐新歌
export const NEWSONG_URL = ` ${BASE_URL}/personalized/newsong`;

export const MV_URL = ` ${BASE_URL}/top/mv`; //请求hot页面swiper图
export const HOT_SONGS_URL = ` ${BASE_URL}/top/list`; //热歌排行榜 

export const HOT_SEARCH_URL = ` ${BASE_URL}search/hot`; // //热门搜索
//搜索建议
export const SUGGEST_URL = ` ${BASE_URL}/search/suggest`
    //搜索多重匹配
export const MULTIMATCH_URL = ` ${BASE_URL}/search/multimatch`