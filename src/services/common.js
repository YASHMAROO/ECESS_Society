import Api from './Api'

export default {

    getNotice() {
        return Api().get('http://rounak1812.pythonanywhere.com/notice/')
    }
}