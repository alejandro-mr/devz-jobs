import api from '../../../api';

const moduleState = {
  jobs: [],
  currentJob: null,
};

const getters = {
};

const actions = {
  getJobs: ({ commit }) => {
    api.getJobs()
      .then((response) => {
        commit('setJobs', response);
      }).catch((e) => {
        this.errors.push(e);
      });
  },
  getJob: ({ state, commit }, id) => {
    if (state.jobs.length > 0) {
      const JobItem = state.jobs.find(job => job.id === id);
      commit('showJob', JobItem);
    } else {
      api.getJob(id)
        .then((response) => {
          commit('showJob', response);
        })
        .catch((e) => {
          this.errors.push(e);
        });
    }
  },
};

const mutations = {
  setJobs(state, jobs) {
    state.jobs = jobs;
  },
  addJob(state, job) {
    state.jobs = [
      ...state.jobs,
      job,
    ];
  },
  showJob(state, job) {
    state.currentJob = job;
  },
};

export default {
  namespaced: true,
  state: moduleState,
  getters,
  actions,
  mutations,
};
