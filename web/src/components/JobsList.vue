<template>
<b-col cols="10" offset="1" offset-sm="0" sm="12" class="jobs-list">
  <img src="../assets/loading.gif" v-if="!jobs.length" class="img" />
  <JobItem v-for="job in jobs" v-bind:key="job.id" v-bind:job="job"></JobItem>
</b-col>
</template>

<script>
import { mapState } from 'vuex';

import JobItem from './JobItem';

export default {
  computed: {
    ...mapState('jobs', {
      jobs: state => state.jobs,
    }),
  },
  created() {
    this.$store.dispatch('jobs/getJobs');
  },
  components: {
    JobItem,
  },
};
</script>

<style scope>
  .jobs-list {
    border-bottom: 1px solid #e8e8e8;
  }
</style>
