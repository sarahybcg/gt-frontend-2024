import { createRouter, createWebHistory } from 'vue-router'
import datatableproductView from '../views/datatableproductView.vue'
import DatatablesupplierView from '@/views/datatablesupplierView.vue'
import datatableprosupView from '../views/datatableprosupView.vue'
import datatablepriorityView from '../views/datatablepriorityView.vue'
import datatabletypeView from '../views/datatabletypeView.vue'

const routes = [
  {
    path: '/Datatable-product',
    name: 'datatableproductView',
    component: datatableproductView,
  },
  {
    path: '/Datatable-supplier',
    name: 'datatablesupplierView',
    component: DatatablesupplierView,
  },
  {
    path: '/Datatable-prosup',
    name: 'datatableprosupView',
    component: datatableprosupView,
  },
  {
    path: '/Datatable-priority',
    name: 'datatablepriorityView',
    component: datatablepriorityView,
  },
  {
    path: '/Datatable-type',
    name: 'datatabletypeView',
    component: datatabletypeView,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
