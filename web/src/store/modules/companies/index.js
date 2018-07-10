import api from '../../../api';

const moduleState = {
  companies: [],
  company: null,
};

const getters = {
};

const actions = {
  getCompanies: ({ commit }) => {
    api.getCompanies()
      .then((response) => {
        commit('setCompanies', response.data);
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
  getCompany: ({ state, commit }, id) => {
    if (state.companies.length > 0) {
      const company = state.companies.find(comp => comp.id === id);
      commit('showCompany', company);
    } else {
      api.getCompany(id)
        .then((response) => {
          commit('showCompany', response.data);
        })
        .catch((e) => {
          this.erros.push(e);
        });
    }
  },
};

const mutations = {
  setCompanies(state, companies) {
    state.companies = companies;
  },
  showCompany(state, company) {
    state.company = company;
  },
};

export default {
  namespaced: true,
  state: moduleState,
  getters,
  actions,
  mutations,
};
