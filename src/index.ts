import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import HomePage from './components/home.vue'
import SubstitutionPage from './components/substitution.vue'

import $ from 'jquery'
import 'bootstrap'

Vue.use(VueRouter)

const routes = [
    {path: '/', component: HomePage},
    {path: '/substitution', component: SubstitutionPage}
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app')