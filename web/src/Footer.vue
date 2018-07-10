<i18n>
{
  "en": {
    "about_us": "About Us",
    "terms_conditions": "Terms and Conditions",
    "privacy_policy": "Privacy Policy",
"contact_us": "Contact Us"
},
  "es": {
    "about_us": "Acerca de Nosotros",
    "terms_conditions": "Términos y Condiciones", 
    "privacy_policy": "Política de Privacidad",
"contact_us": "Contáctanos"
}
}
</i18n>

<template>
<footer class="footer">
  <b-container fluid>
    <b-row>
      <b-col>
        <b-nav vertical>
          <b-nav-item href="https://devz.mx/">Blog</b-nav-item>
          <b-nav-item>{{ $t('contact_us') }}</b-nav-item>
          <b-nav-item active>{{ $t('about_us') }}</b-nav-item>
          <b-nav-item>{{ $t('terms_conditions') }}</b-nav-item>
          <b-nav-item>{{ $t('privacy_policy') }}</b-nav-item>
        </b-nav>
        <p class="copyright"><span>Devz Jobs</span> - Copyright © {{ year }}</p>
      </b-col>
    </b-row>
  </b-container>
</footer>
</template>

<script>
import moment from 'moment';

export default {
  name: 'app-footer',
  data() {
    return {
      year: moment().format('YYYY'),
    };
  },
};
</script>

<style scoped>
.footer {
  background: rgb(0, 10, 0);
  color: rgb(243, 243, 243);
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-top: .05rem solid rgb(0, 0, 0);
  margin-top: 2rem;
  font-size: 1rem;
}
.nav-link {
  color: rgb(166, 166, 166);
}
.nav-link:hover {
  color: rgb(236, 236, 236);
  text-decoration: underline;
}

.copyright {
  font-size: 0.8rem;
  margin-top: 1rem;
}
.copyright span {
  font-weight: 600;
}
</style>
