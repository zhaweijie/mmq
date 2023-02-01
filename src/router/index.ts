import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Root', redirect: '/layout/main' },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login/Login.vue'),
  },
  {
    path: '/layout/main',
    name: 'main',
    component: () => import('@/pages/layouts/main.vue'),
  },
  {
    path: '/layout/detail',
    name: 'detail',
    component: () => import('@/pages/layouts/detail.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
