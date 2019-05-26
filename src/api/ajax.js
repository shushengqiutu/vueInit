//封装ajax
import axios from "axios"
export default function ajax(url, data = {}, type = "GET") {
    return new Promise(function(resolve, reject) {
        let promise
        if (type === "GET") { //处理get请求地址
            let dataStr = ""
            Object.keys(data).forEach(key => {
                dataStr += key + "=" + data[key] + "&"
            })
            if (dataStr !== "") {
                dataStr = dataStr.substring(0, dataStr.lastIndexOf("&"))
                url += "?" + dataStr + "&time=" + Math.random()
            }

            promise = axios.get(url)

        } else {
            console.log(data)

            promise = axios.post(url, data)
        }
        promise.then(function(req) {

            //成功回调
            resolve(req.data)
        }).catch(function(error) {
            reject(error.response.data)
                //失败回调
        })



    })

}