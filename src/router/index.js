import Vue from 'vue'
import Router from 'vue-router'
import detail from 'PC/Pages/Detail'
import index from 'PC/Pages/Index'
import Login from 'PC/Pages/Login'
import cart from 'PC/Pages/Cart'
import pay from 'PC/Pages/Pay'
import Cookies from 'js-cookie'
Vue.use(Router)

const routes = [{
  path: '/',
  redirect: '/index'
}, {
  path: '/index',
  component: index
}, {
  path: '/detail/:id',
  component: detail
}, {
  path: '/login',
  component: Login
}, {
  path: '/cart',
  component: cart,
  beforeEnter(to, from, next) {
    // console.log(Cookies.get('isLogin'));
    if (Cookies.get('isLogin') === undefined) {
      next('/login?isLogin=true');
    } else {
      next();
    }
  }
}, {
  name:'pay',
  path: '/pay',
  component: pay,
  beforeEnter(to, from, next) {
    // console.log(Cookies.get('isLogin'));
    if (Cookies.get('isLogin') === undefined) {
      next('/login?isLogin=true');
    } else {
      next();
    }
  }
}];


const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new Router({
  routes,
})

//路由跳转后，页面回到顶部
router.afterEach(() => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})

export default router;
