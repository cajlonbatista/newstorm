<template>
  <ThemeProvider :theme="theme">
    <div id="app">
      <router-view />
      <GlobalStyles />
    </div>
  </ThemeProvider>
</template>
<script>
import { ThemeProvider } from "vue-styled-components";

import GlobalStyles from "./global/styles/global.js";

import theme from "./global/theme/theme.js";

export default {
  name: "App",
  components: {
    ThemeProvider,
    GlobalStyles,
  },
  data() {
    return {
      theme,
    };
  },
};
</script>
