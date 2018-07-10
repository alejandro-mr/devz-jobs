<template>
  <b-row>
    <b-col class="job" v-bind:class="{ sponsored: job.sponsored }">
      <h3>
        <b-link :to="{ name: 'JobDetails', params: { id: job.id }}">
          {{job.title}}
        </b-link>
      </h3>
      <p class="company" v-if="job.company">{{job.company.name}}</p>
      <p class="date">{{job.createdAt}}</p>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: ['job'],
};
</script>

<style scoped>
.job {
  background: rgba(245, 245, 245, 1);
  border-top: 1px solid #ccc;
  text-align: left;
  padding: 3px 15px;
}
.job.sponsored {
  background: rgba(243, 87, 34, 0.1);
}

.job h3 {
  font-size: 1.215rem;
  font-weight: 600;
  margin-bottom: 5px;
}

.job p {
  margin-bottom: 0;
}

.job .company {
  color: rgb(37, 0, 0);
  font-size: 1rem;
  font-weight: 500;
}

  .job .date {
    color: rgba(0, 13, 3, 0.5);
    font-size: 0.8rem;
  }
</style>
