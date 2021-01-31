<template>
  <ThemeProvider :theme="theme">
    <div id="app">
      <Header />
      <router-view />
      <GlobalStyles />
    </div>
  </ThemeProvider>
</template>
<script>
import { ThemeProvider } from "vue-styled-components";
import Header from "./components/Header/Header.vue";

import GlobalStyles from "./global/styles/global.js";

import theme from "./global/theme/theme.js";

export default {
  name: "App",
  components: {
    ThemeProvider,
    Header,
    GlobalStyles,
  },
  data() {
    return {
      theme,
    };
  },
};
</script>

<style scoped>
#app {
  display: grid;
  grid-template-columns: 100px 1fr;
}
</style>
