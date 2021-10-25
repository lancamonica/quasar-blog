
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'posts', name: 'PostsList', component: () => import('pages/posts/PostsList.vue') },
      { path: 'post', name: 'PostsForm', component: () => import('pages/posts/PostsForm.vue') },
      { path: 'post', name: 'DetailsPostEdit', component: () => import('pages/posts/PostsForm.vue') },
      { path: 'authors', name: 'AuthorsList', component: () => import('pages/authors/AuthorsList.vue') },
      { path: 'author', name: 'AuthorsForm', component: () => import('pages/authors/AuthorsForm.vue') },
      { path: 'author', name: 'DetailsAuthorEdit', component: () => import('pages/authors/AuthorsForm.vue') }
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
