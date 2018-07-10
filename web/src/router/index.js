import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import JobDetails from '@/components/JobDetails';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/job/:id',
      name: 'JobDetails',
      component: JobDetails,
    },
  ],
});
