//手机号码验证
function check_phone(phone) {
    const regPhone = /^1[0-9]{10}$/
    if (regPhone.test(phone)) {
        return true
    } else {
        return false
    }
}
export { check_phone }