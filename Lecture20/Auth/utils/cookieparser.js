module.exports = {
    getCookie(cookies, key) {
        let result
        cookies.split(';').forEach((cookie) => {
            cookie = cookie.trim()
            if (cookie.startsWith(key)) {
                result = cookie.split('=')[1]
            }
        })
        return result
    }
}