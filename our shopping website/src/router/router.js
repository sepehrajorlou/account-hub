import { createRouter , createWebHashHistory } from 'vue-router'


const main_layout = () => import("../layouts/mainlayout.vue");




const routes =  [

    {
       component : main_layout ,
       path: "/" ,
       
    }

]








const router = createRouter({
    history: createWebHashHistory(),
    routes, 
})


export default router; 