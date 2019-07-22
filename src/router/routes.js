import Home from '../pages/home/Home.vue'
import Category from '../pages/categorys/Categorys.vue'
import Topic from '../pages/topic/Topic.vue'
import Cart from '../pages/cart/cart.vue'
import Login from '../pages/login/Login.vue'
import TopicFind from '../pages/topic/TopicFind.vue'
import TopicCulling from '../pages/topic/TopicCulling.vue'


export default[
    {
        path:'/home',
        component:Home,
        meta:{
            isShow:true
        }
    },
    {
        path:'/category',
        component:Category,
        meta:{
            isShow:true
        }
    },
    {
        path:'/topic',
        component:Topic,
        meta:{
            isShow:true
        },
        children:[
           {
               path:'/topic/find',
               component:TopicFind
           },
           {
               path:'/topic/culling',
               component:TopicCulling
           },
        //    {
        //        path:'/topic',
        //        redirect:'/topic/find'
        //    }
        ]
    },
    {
        path:'/cart',
        component:Cart,
        meta:{
            isShow:true
        }
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/',
        redirect:'/home'
    }
]
