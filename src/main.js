/**
 * @createDate: 2019/11/15
 * @author: wen_dell
 * @email: wendell.chen@chinaentropy.com
 * **/
import Vue from 'vue';
import App from './App';
import router from '@/router/index';
import store from '@/store/index';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
