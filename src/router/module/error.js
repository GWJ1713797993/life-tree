export default [
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error-page/404'),
    meta: {
      title: '404'
    }
  }
]
