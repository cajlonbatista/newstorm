<template>
  <HeaderContainer>
    <router-link to="/">
      <img src="../../global/assets/svg/logo.svg" />
    </router-link>

  </HeaderContainer>
</template>

<script>
import { HeaderContainer } from "./styles.js";

export default {
  name: "Header",
  props: {},
  data() {
    return {
      menu: [
        {
          path: '/',
          title: ''
        },
      ],
    };
  },
  components: {
    HeaderContainer,
  },
};
</script>
