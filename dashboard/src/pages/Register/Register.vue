<template>
  <RegisterContainer>
    <form v-if="step == 1" @submit="onNext">
      <span>New article</span>
      <section>
        <div>
          <label>Title</label>
          <input type="text" required v-model="form.title" />
        </div>
        <div>
          <label>Description</label>
          <input type="text" required v-model="form.description" />
        </div>
        <div>
          <label>Author</label>
          <input type="text" required v-model="form.author" />
        </div>
        <div>
          <label>Cap</label>
          <input type="text" required v-model="form.cap" />
        </div>
      </section>
      <footer>
        <button>Next</button>
      </footer>
    </form>
    <form v-else @submit="onFinish">
      <span>Write article</span>
      <article>
        <div>
          <label>Content</label>
          <textarea required v-model="form.content" />
        </div>
        <div>
          <label>Preview</label>
          <vue-markdown :source="form.content"></vue-markdown>
        </div>
      </article>
      <footer>
        <button>Finish</button>
        <button type="button" @click="onBack">Voltar</button>
      </footer>
    </form>
  </RegisterContainer>
</template>

<script>
import axios from "axios";
import VueMarkdown from "vue-markdown";
import iconun from "../../assets/img/check.png";

import { RegisterContainer } from "./styles.js";

export default {
  components: {
    RegisterContainer,
    "vue-markdown": VueMarkdown,
  },
  data() {
    return {
      form: {
        title: "",
        description: "",
        author: "",
        cap: "",
        content: "",
      },
      step: 1,
    };
  },
  methods: {
    onNext(e) {
      e.preventDefault();
      this.step += 1;
    },
    onSucessNotification() {
      new Notification("Success", {
        body: "Your article has been created!",
        icon: iconun,
      });
    },
    onFinish(e) {
      e.preventDefault();
      axios
        .post(`${process.env.VUE_APP_URL}api/articles`, this.form)
        .then(() => {
          this.onSucessNotification();
          this.form = {
            title: "",
            description: "",
            author: "",
            cap: "",
            content: "",
          };
          this.step = 1;
        })
        .catch((err) => console.log(err));
    },
    onBack() {
      this.step -= 1;
    },
  },
};
</script>
