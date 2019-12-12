
const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/surah/:nomor', component: () => import('components/surahRead.vue'), name: 'Surah' }
    ]
  },
  {
    path: '/about',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '', component: () => import('pages/About.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
