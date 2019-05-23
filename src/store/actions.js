import { RECEIVE_ADDMSG } from "./mutation-type" //引入matution函数名
import { req_add_msg } from "../api" // 引入封装好的接口
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
        console.log(result.result.songs["0"].name)
    }
}