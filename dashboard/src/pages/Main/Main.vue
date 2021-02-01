<template>
  <MainContainer>
    <main v-if="loading === false">
      <section v-for="article in articles" v-bind:key="article._id">
        <h1>{{ article.title }}</h1>
        <p>{{ article.description }}</p>
        <button>COPY</button>
      </section>
    </main>
    <article v-else>
      <LoaderContainer />
    </article>
  </MainContainer>
</template>

<script>
import axios from "axios";

import { MainContainer } from "./styles.js";

import LoaderContainer from "../../components/Loader/Loader.vue";

import iconun from "../../assets/img/error.png";

export default {
  name: "Main",
  created() {
    axios
      .get(`${process.env.VUE_APP_URL}api/articles`)
      .then((res) => {
        this.articles = res.data.docs;
        this.loading = false;
      })
      .catch(() => {
        this.loading = true;
        new Notification("Something went wrong", {
          body: "Couldn't load news!",
          icon: iconun,
        });
      });
  },
  data() {
    return {
      loading: [],
      articles: true,
    };
  },
  methods: {},
  components: {
    MainContainer,
    LoaderContainer,
  },
};
</script>
