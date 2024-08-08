import './assets/main.css'

import { createApp, h } from 'vue'
const app  = createApp({
    render: ()=>h(App)
});

import * as VueRouter from 'vue-router'

import App from './App.vue'
import Create from './components/ProductAdd.vue'
import Edit from './components/ProductEdit.vue'
import Index from './components/ProductList.vue'

app.use(VueRouter)

app.config.productionTip = false

const routes = [
    {
        name: 'Create',
        path: '/create',
        component: Create 
    },
    {
        name: 'Edit',
        path: '/edit/:id',
        component: Edit
    },
    {
        name: 'Index',
        path: '/',
        component: Index
    },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(), 
    routes: routes})

app.use(router)
app.mount('#app')
