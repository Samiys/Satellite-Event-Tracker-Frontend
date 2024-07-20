import Vue from 'vue';
import Router from 'vue-router';
import EventsPage from '../views/EventsPage.vue';
import CreateEventPage from '../views/CreateEventPage.vue';
import SatellitePage from '../views/SatellitePage.vue';

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
    },
    {
        path: '/satellite/:name',
        name: 'SatellitePage',
        component: SatellitePage,
    },
];

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
