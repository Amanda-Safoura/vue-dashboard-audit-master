import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/Login.vue'
import AuthLayout from '../layouts/AuthLayout.vue'
import AuditList from '../pages/AuditList.vue'
import AuditDetail from '../pages/AuditDetail.vue'
import SectionDetail from '../pages/SectionDetail.vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login,
    meta: { layout: AuthLayout }
  },
  {
    path: '/audits',
    component: AuditList,
    meta: { layout: DefaultLayout }
  },
  {
    path: '/audits/:id',
    component: AuditDetail,
    meta: { layout: DefaultLayout }
  },
  {
    path: '/sections/:id',
    component: SectionDetail,
    meta: { layout: DefaultLayout }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Gestion des layouts dynamiques
router.beforeEach((to, from, next) => {
  const layout = to.meta.layout || DefaultLayout
  to.meta.layoutComponent = layout
  next()
})

export default router
