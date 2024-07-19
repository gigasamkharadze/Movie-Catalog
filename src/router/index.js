import {createRouter, createWebHistory} from 'vue-router'
import routes from './routes'
import {useUsersStore} from "../store/users.js";

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {top: 0}
        }
    }
})

router.beforeEach((to, from, next) => {
    const userStore = useUsersStore();
    const isAuthenticated = userStore.user;

    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const isAttemptingLogin = to.path === '/account/login';
    const isAttemptingSignup = to.path === '/account/signup';

    if (requiresAuth && !isAuthenticated && !isAttemptingLogin && !isAttemptingSignup) {
        next('/account/login');
    } else if (isAuthenticated && (isAttemptingLogin || isAttemptingSignup)) {
        next('/account');
    } else {
        next();
    }
});




export default router