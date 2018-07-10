<i18n>
{
  "en": {
    "search-input": "Search by skill, tech or company"
  },
  "es": {
    "search-input": "Busca por puesto, tecnologia o compañia"
  }
}
</i18n>

<template>
<b-form inline @submit="onSubmit" v-if="show">
    <b-form-input id="keyword"
                  type="text"
                  v-model="form.keyword"
                  required
                  v-bind:placeholder="$t('search-input')">
    </b-form-input>
    <b-button type="submit" variant="primary">
      <i class="material-icons">
        search
      </i>
    </b-button>
</b-form>
</template>

<script>
export default {
  name: 'search-form',
  data() {
    return {
      form: {
        keyword: '',
      },
      show: true,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
    },
  },
};
</script>

<style scoped>
*::-webkit-input-placeholder { /* WebKit, Blink, Edge */
  color: rgb(11, 11, 11);
}

*:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
  color: rgb(11, 11, 11);
  opacity:  1;
}

*::-moz-placeholder { /* Mozilla Firefox 19+ */
  color: rgb(11, 11, 11);
  opacity:  1;
}

*:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: rgb(11, 11, 11);
}

*::-ms-input-placeholder { /* Microsoft Edge */
  color: rgb(11, 11, 11);
}

*::placeholder { /* Most modern browsers support this now. */
  color: rgb(11, 11, 11);
}

input#keyword {
  border: solid rgb(204, 204, 204);
  border-radius: 0;
  border-width: 1px 0 1px 1px;
  color: rgb(11, 11, 11);
  padding: .75rem .75rem;
  width: calc(100% - 3.0625rem);
}

.btn-primary {
  background: rgba(115, 115, 115, 0.6);
  border-color: rgb(241, 241, 241);
  border-radius: 0;
  border-width: 1px 1px 1px 0;
  text-transform: uppercase;
  font-weight: bold;
  height: 3.125rem;
  padding: .6875rem .6875rem;
  width: 3.0625rem;
}

.btn-primary i {
  vertical-align: middle;
}
</style>
