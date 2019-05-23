import { RECEIVE_ADDMSG } from "./mutation-type" //引入matution函数名
//封装处理state的函数，只能处理同步，逻辑越少越好 state里的数据只能被mutation修改
export default {
    [RECEIVE_ADDMSG](state, { mm }) {
        state.msg += mm
    }
}