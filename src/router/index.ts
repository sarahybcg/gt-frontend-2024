import { createRouter, createWebHistory } from 'vue-router'
import BudgetCreationView from '../views/BudgetCreationView.vue'
import AddExpensesView from '../views/AddExpensesView.vue'
import PaymentRegistrationView from '../views/PaymentRegistrationView.vue'
import CreateCampaignView from '../views/CreateCampaignView.vue'
import AddLeadView from '../views/AddLeadView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/budget-creation',
      name: 'budget-creation',
      component: BudgetCreationView,
    },
    {
      path: '/add-expenses',
      name: 'add-expenses',
      component: AddExpensesView,
    },
    {
      path: '/payment-registration',
      name: 'payment-registration',
      component: PaymentRegistrationView,
    },
    {
      path: '/create-campaign',
      name: 'create-campaign',
      component: CreateCampaignView,
    },
    {
      path: '/add-lead',
      name: 'add-lead',
      component: AddLeadView,
    },
  ],
})

export default router
