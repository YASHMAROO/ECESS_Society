import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home"
import ECE from '../components/ECEdept'
import Team from '../components/Team'

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
        }
    ]
})