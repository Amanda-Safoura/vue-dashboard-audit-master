import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/LoginPage.vue'
import Dashboard from '../views/Dashboard.vue'
import Agents from '../views/AgentList.vue'
import AuditSections from '../views/AuditSectionList.vue'
import AuditSubsections from '../views/AuditSubsectionList.vue'
import Audits from '../views/AuditList.vue'
import Reports from '../views/ReportList.vue'

import store from '../store' // Pour vérifier l'authentification

const routes = [
  {
    path: '',
    redirect: '/dashboard'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
    children: [
      {
        path: 'agents',
        name: 'Agents',
        component: Agents
      },
      {
        path: 'audit-sections',
        name: 'AuditSections',
        component: AuditSections,
        children: [
          {
            path: ':id',
            name: 'AuditSubsections',
            component: AuditSubsections
          }
        ]
      },
      {
        path: 'audits',
        name: 'Audits',
        component: Audits,
        children: [
          {
            path: ':id',
            name: 'Reports',
            component: Reports
          }
        ]
      }
    ]
  },
  {
    path: '/:catchAll(.*)', // Cette route gère les chemins non définis
    redirect: '/'
  }
]

// Route Guard pour vérifier si l'utilisateur est authentifié avant d'accéder aux pages protégées
const router = createRouter({
  history: createWebHistory(),
  routes
})

// Gardien de navigation pour les routes nécessitant une authentification
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next({ name: 'Login' }) // Redirige vers la page de connexion si l'utilisateur n'est pas authentifié
  } else {
    next()
  }
})

export default router
