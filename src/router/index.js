import { createRouter, createWebHistory } from 'vue-router'
import FormsPage from '@/pages/FormsPage.vue'
import PreviewPage from '@/pages/PreviewPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'forms_page',
      component: FormsPage
    },
    {
      path: '/preview',
      name: 'preview_page',
      component: PreviewPage
    }

  ]
})

export default router