// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import 'es6-promise/auto';
import VueI18n from 'vue-i18n';
import VueLocalStorage from 'vue-localstorage';
import BootstrapVue from 'bootstrap-vue';
import { mapGetters } from 'vuex';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import store from './store';
import App from './App';
import router from './router';

Vue.use(VueI18n);
Vue.use(VueLocalStorage);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

const i18n = {
  locale: Vue.localStorage.get('lang') || 'es',
};

Vue.mixin({
  computed: {
    ...mapGetters('locale', {
      locale: 'getLocale',
    }),
  },
  watch: {
    locale(lang) {
      if (this.$i18n) {
        this.$i18n.locale = lang;
      }
    },
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  store,
  router,
  template: '<App/>',
  components: { App },
});
