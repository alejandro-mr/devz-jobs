<i18n>
{
  "en": {
    "back_to_jobs": "Back to jobs",
    "company": "Company",
    "how_to_apply": "How should you apply?",
    "apply_now": "Apply Now",
    "more_company_jobs": "More %{msg} jobs"
  },
  "es": {
    "back_to_jobs": "Regresar a listado",
    "company": "Compañia",
    "how_to_apply": "¿Como debes de aplicar?",
    "apply_now": "Applicar",
    "more_company_jobs": "Más trabajos de %{msg}"
  }
}
</i18n>

<template>
<b-container>
  <b-row tag="section" no-gutters class="content text-left" v-if="job">
    <b-col sm="12">
      <b-link to="/" class="back-button">
        <i class="material-icons">
          arrow_back
        </i>
        {{ $t('back_to_jobs') }}
      </b-link>
    </b-col>
    <b-col sm="7">
      <h1 class="title">{{ job.title }}</h1>
    </b-col>
    <b-col sm="5" class="text-sm-right">
      <span class="date">{{ job.createdAt }}</span>
      <h4 class="company" v-if="job.company">{{ $t('company') }}: <span>{{ job.company.name }}</span></h4>
      <b-link href="">{{ job.company.site_url }}</b-link>
    </b-col>
    <b-col sm="12">
      <p class="type-of-work">
        <i class="material-icons">
          business_center
        </i>
        Hermosillo
      </p>
      <p class="type-of-work">
        <i class="material-icons">
          public
        </i>
        Remote
      </p>
      <p class="location">
        <i class="material-icons">
          location_on
        </i>
        Company, location
      </p>
      <p class="tags">
        <i class="material-icons">
          local_offer
        </i>
        <b-badge>react</b-badge> <b-badge>redux</b-badge>, C++, unity, SQLServer, IBM Informix, Cobol, Python, Matlab, GraphQL, Everything
      </p>
    </b-col>
    <b-col sm="12" class="apply_now text-center">
      <b-button size="lg" variant="primary">{{ $t('apply_now') }}</b-button>
    </b-col>
    <b-col>
      <p v-html="description" class="description"></p>
    </b-col> 
    <b-col sm="12" class="more_jobs">
      <b-link to="/">{{ $t('more_company_jobs', { msg: job.company.name }) }}</b-link>
    </b-col>
    <b-col sm="12" class="how-to">
      <h4>{{ $t('how_to_apply') }}</h4>
      <p>Instructions here - maybe some makrdown too or just plain links -</p>
  </b-col>
</b-row>
</b-container>
</template>

<script>
import { mapState } from 'vuex';
import marked from 'marked';

export default {
  computed: {
    ...mapState('jobs', {
      job: state => state.currentJob,
      description: state => marked(state.currentJob.description, { sanitize: true }),
      company: state => state.company,
    }),
  },
  created() {
    this.$store.dispatch('jobs/getJob', this.$route.params.id);
  },
};
</script>

<style scoped>
section.content {
  padding-top: 15px;
  padding-bottom: 15px;
}
.back-button {
  font-weight: bold;
}
.back-button i {
  font-size: 1rem;
  margin-bottom: 3px;
  vertical-align: middle;
}

.title {
  font-size: 2rem;
}
.date {
  color: rgb(140, 140, 140);
}
.company {
  font-size: 1rem;
}
.company span {
  font-weight: bold;
}

.description {
  font-size: 1rem;
  margin-top: 1rem;
  padding: 5px 0;
  border-top: 1px solid rgba(140, 140, 140, .2);
}
.description >>> h1 {
  font-size: 1rem;
  font-weight: 800;
}

.how-to {
  border-radius: 3px;
  background: rgba(180, 180, 180, .3);
  padding: 10px;
}
.how-to h4 {
  border-bottom: 1px dashed rgb(180, 180, 180);
  color: rgb(73, 73, 73);
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 600;
  padding-bottom: 3px;
}
</style>
