import Vue from 'vue';
import Router from 'vue-router';
import EventsPage from '../views/EventsPage.vue';
import CreateEventPage from '../views/CreateEventPage.vue';

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'EventsPage',
        component: EventsPage,
    },
    {
        path: '/create-event',
        name: 'CreateEventPage',
        component: CreateEventPage,
    }
];

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
