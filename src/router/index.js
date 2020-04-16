import Vue from 'vue';
import Router from 'vue-router';
import App from "@/App";


Vue.config.publicPath = process.env.publicPath;

Vue.use(Router);

const router = new Router({
    mode: 'history',
    linkActiveClass: 'active',
    base: Vue.config.publicPath,
    routes: [
        {
            path: '/',
            name: 'home',
            component: App,
        },
    ],
});


export default router;
