import { createRouter, createWebHashHistory } from 'vue-router'
import JournalView from '../views/JournalView.vue'
import ContactView from '../views/ContactView.vue'
import ClavierView from '../views/ClavierView.vue'
import NouveauContactView from '../views/NouveauContactView.vue'

const routes = [
  {
    path: '/journal',
    name: 'journal',
    component: JournalView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/clavier',
    name: 'clavier',
    component: ClavierView
  },  
  {
    path: '/nouveaucontact',
    name: 'nouveaucontact',
    component: NouveauContactView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
