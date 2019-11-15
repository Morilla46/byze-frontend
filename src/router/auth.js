// import router from './index'
// import Cookie from 'js-cookie'

// router.beforeEach((to, from, next) => {
//   if (to.path === '/' || to.path === '/login') {
//     next()
//   } else {
//     let token = Cookie.get('byze_token')
//     if (!token) {
//       next({
//         path: '/login',
//         query: { redirect: to.path, ...to.query }
//       })
//     } else {
//       next()
//     }
//   }
// })
