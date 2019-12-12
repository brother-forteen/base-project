/**
 * @createDate: 2019/12/11
 * @author: wen_dell
 * @email: wendell.chen@chinaentropy.com
 * **/

import Vue from "vue";
import Router from 'vue-router';
import routes from './routes';
import cookie from '@/utils/cookie';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: routes
});

router.beforeEach((to, from, next) => {
    if(cookie.getCookie('id') && cookie.getCookie('id') !== '0' || to.path === '/login'){
        next();
    } else {
        next('/login');
    }
});

export default router;
