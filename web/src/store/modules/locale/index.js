const moduleState = {
  locale: '',
};

const getters = {
  getLocale: state => state.locale,
};

const actions = {
  setLocale: ({ commit }, locale) => {
    commit('setLocale', locale);
  },
};

const mutations = {
  setLocale(state, locale) {
    state.locale = locale;
  },
};

export default {
  namespaced: true,
  state: moduleState,
  getters,
  actions,
  mutations,
};
