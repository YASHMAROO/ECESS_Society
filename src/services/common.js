import Api from './Api'

export default {

    getNotice() {
        return Api().get('http://rounak1812.pythonanywhere.com/notice/')
    },
    getFaculty() {
        return Api().get('http://rounak1812.pythonanywhere.com/faculty/')
    },
    getTeam() {
        return Api().get('http://rounak1812.pythonanywhere.com/member/')
    }
}