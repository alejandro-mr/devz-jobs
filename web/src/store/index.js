import Vue from 'vue';
import Vuex from 'vuex';

import locale from './modules/locale';
import jobs from './modules/jobs';
import companies from './modules/companies';


Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    locale,
    jobs,
    companies,
  },
  strict: debug,
});
