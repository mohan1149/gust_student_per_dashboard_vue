import { createRouter, createWebHistory } from 'vue-router'
const isLogged = localStorage.getItem('token');
let router="";
if (isLogged === null) {
  router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'home',
        component: () => {
          return import('./../components/auth/Login.vue')

        }
      },
    ]
  })
} else {
  router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'home',
        component: () => {
          return  import('./../components/home/Home.vue')

        }
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
      },
      {
        path: '/import',
        name: 'import',
        component: () => import('./../components/students/ImportStudents.vue')
      },
      {
        path: '/students',
        name: 'students',
        component: () => import('./../components/students/Students.vue')
      }
    ]
  })
}


export default router
