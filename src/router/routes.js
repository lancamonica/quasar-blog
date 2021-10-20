
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'posts', name: 'PostsList', component: () => import('pages/posts/PostsList.vue') },
      { path: 'post', name: 'DetailsPost', component: () => import('pages/posts/DetailsPost.vue') },
      { path: 'post', name: 'DetailsPostEdit', component: () => import('pages/posts/DetailsPost.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
