import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('../pages/main-page/MainPage.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../pages/about-page/AboutPage.vue')
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import('../pages/skills-page/SkillsPage.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../pages/contact-page/ContactPage.vue')
    },
  ]
})

export default router
