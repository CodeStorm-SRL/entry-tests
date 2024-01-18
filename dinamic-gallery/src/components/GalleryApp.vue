<script>
import { mapState } from "vuex";
import ImageApp from "./ImageApp.vue";

export default {
  data() {
    return {
      title: "Galleria Immagini",
    };
  },
  computed: {
    ...mapState(["images"]),
  },

  components: {
    ImageApp,
  },
};
</script>

<template>
  <h1>{{ title }}</h1>
  <div class="gallery-grid">
    <ImageApp v-for="image in images" :key="image.id" :image="image" />
  </div>
</template>

<style lang="css" scoped>
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
}

.gallery-grid img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>
