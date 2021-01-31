<template>
  <HeaderContainer>
    <div v-for="item in menu" v-bind:key="item.path">
      <router-link v-if="router == item.path" :to="item.path">
        <img :src="item.icon" />
      </router-link>
       <router-link v-else :to="item.path">
        <img :src="item.icon" />
      </router-link>
    </div>
  </HeaderContainer>
</template>
<script>
import { HeaderContainer } from "./styles.js";

import dashboard from "../../assets/svg/dashboard.svg";
import destroy from "../../assets/svg/delete.svg";
import create from "../../assets/svg/create.svg";
import edit from "../../assets/svg/edit.svg";

export default {
  name: "Header",
  data() {
    return {
      menu: [
        {
          path: "/",
          icon: dashboard,
        },
        {
          path: "/register",
          icon: create,
        },
        {
          path: "/edit",
          icon: edit,
        },
        {
          path: "/delete",
          icon: destroy,
        },
      ],
      router: this.$router.currentRoute.path,
    };
  },
  components: {
    HeaderContainer,
  },
};
</script>
