import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/auth',
        name: 'auth',
        component: () => import('../views/Auth.vue'),
        children: [
                  { path: "login",
                  name: 'login',
                  component: () => import('../components/Login.vue')},
                  { path: "register",
                  name: 'register',
                  component: () => import('../components/Register.vue')},
                ],
    },
]

// {
//     path: "/auth",
//     component: Auth,
//     children: [
//       { path: "login", component: SignIn },
//       { path: "sign-up", component: SignUp },
//     ],
//   },
//   { path: "/", component: Home },


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    
})

console.log('router: ', import.meta.env.BASE_URL)

export default router;