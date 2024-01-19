<script>
import { mapState } from "vuex";
import ImageApp from "./ImageApp.vue";

export default {
  data() {
    return {
      title: "Galleria Immagini",
      currentIndex: 0,
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
  <div>
    <h1>{{ title }}</h1>
    <div class="gallery-carousel">
      <div class="carousel-inner">
        <ImageApp v-for="image in images" :key="image.id" :image="image" />
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.gallery-carousel {
  width: 100%;
  height: 100%;
  overflow: scroll;
}

.carousel-inner {
  display: flex;
  gap: 10px;
  transition: transform 0.5s ease-in-out;
}

.gallery-carousel img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 0 10px;
}
</style>
