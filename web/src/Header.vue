<i18n>
{
  "en": {
    "companies": "Companies"
  },
  "es": {
    "companies": "Empresas"
  }
}
</i18n>

<template>
  <b-navbar sticky toggleable="lg" variant="dark" type="dark" class="devz-navbar">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand href="/">
      <img src="./assets/logo-transparent.png" height="26" width="105" class="d-inline-block align-baseline" alt="Devz Jobs"/>
      Jobs
    </b-navbar-brand>
    
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav role="navigation">
        <b-nav-item href="">{{ $t('companies') }}</b-nav-item>
        <b-nav-item href="https://devz.mx">Blog</b-nav-item>
        <b-nav-item href="#" disabled>disabled item</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
    <span>
      <a @click.prevent="setLang('en')">
        en
      </a>
      - 
      <a @click.prevent="setLang('es')">
        es
    </a>
  </span>
</b-navbar>
</template>

<script>
export default {
  name: 'app-header',
  methods: {
    setLang(lang) {
      this.$localStorage.set('lang', lang);
      this.$store.dispatch('locale/setLocale', lang);
    },
  },
};
</script>

<style>
.devz-navbar {
  background: rgb(0, 0, 0) !important;
  padding: 0.625rem;
  min-height: 4.188rem;
  border-bottom: 1px rgb(0, 10, 0);
  color: rgb(243, 243, 243);
  justify-content: normal;
}
.devz-navbar .navbar-brand {
  margin-left: 1rem;
  font-size: 1rem;
}
.devz-navbar .navbar-nav {
  background: rgb(0, 0, 0);
}
.devz-navbar .navbar-nav .nav-link {
  color: rgb(243, 243, 243);
}
.devz-navbar .navbar-toggler {
  color: rgb(243, 243, 243);
  border: none;
  padding: 0.188rem 0.375rem;
}
.devz-navbar .navbar-toggler:focus {
  outline: none;
}

.devz-navbar .navbar-toggler-icon {
  width: 1.250rem;
  vertical-align: top;
  background-image: url("data:image/svg+xml;charset=utf8,<svg viewBox='0 0 21 16' xmlns='http://www.w3.org/2000/svg'><path stroke='rgba(243, 243, 243, .8)' stroke-width='2' stroke-linecap='square' stroke-miterlimit='10' d='M0 1 h20 M0 8 h20 M0 15 h20'/></svg>");
}
</style>
