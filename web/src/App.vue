<template>
<div id="app">
  <Header></Header>
  <main role="main">
    <router-view></router-view>
  </main>
  <Footer></Footer>
</div>
</template>

<script>
import Header from './Header';
import Footer from './Footer';

export default {
  name: 'app',
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
html {
  font-size: 14px;
  height: 100%;
}

body {
  color: rgb(11, 11, 11);
  background: rgb(240, 240, 240);
  height: 100%;
}

#app {
  /*font-family: var(--font-family-sans-serif);*/
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

@media (min-width: 768px) {
  html {
    font-size: 16px;
  }
}
</style>
