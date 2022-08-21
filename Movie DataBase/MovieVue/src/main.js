import Vue from 'vue';
import App from './App.vue';
import router from 'router';
import store from 'store';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap';
import PortalVue from 'portal-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { ModalPlugin } from 'bootstrap-vue'


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');


Vue.use(BootstrapVue)
Vue.use(PortalVue)
Vue.use(IconsPlugin)
Vue.use(ModalPlugin)


