<i18n>
{
  "en": {
    "hero-text": "Find a job motherfucker"
  },
  "es": {
    "hero-text": "Encuentra un trabajo mi muy buen amigo apreciado"
  }
}
</i18n>

<template>
<div>
  <b-jumbotron v-bind:lead="$t('hero-text')" fluid class="hero">
    <SearchForm></SearchForm>
  </b-jumbotron>
  <b-container>
    <b-row tag="section" class="content">
      <JobsList></JobsList>
    </b-row>
  </b-container>
</div>
</template>

<script>
import SearchForm from './SearchForm';
import JobsList from './JobsList';

export default {
  name: 'home',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  components: {
    SearchForm,
    JobsList,
  },
};
</script>

<style scoped>
  .hero {
    background: url("../assets/hero/slide_1.jpg") center center no-repeat;
    background-size: cover;
    border-bottom: 1px solid rgba(115, 115, 115, 0.2);
    color: rgb(243, 243, 243);
    min-height: 18rem;
    max-height: 22rem;
    padding-top: 8rem;
    padding-bottom: 3.6rem;
    margin-bottom: 0;
  }
  .hero .lead {
    font-size: 1.5rem;
  }
  section.content {
    border-top: 2px solid rgba(255, 255, 255, 0.5);
    padding-top: 5px;
    padding-bottom: 5px;
  }
</style>
