import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import ECE from '../views/ECEdept'
import Team from '../views/Team'
import Faculty from '../views/Faculty'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/ecedept',
            name: 'ECEDept',
            component: ECE
        },
        {
            path: '/team',
            name: 'Team',
            component: Team
        },
        {
            path: '/faculty',
            name: 'Faculty',
            component: Faculty
        }
    ]
})