<script>
import { mapState } from "vuex";
import ImageApp from "./ImageApp.vue";

export default {
  data() {
    return {
      title: "Destinazioni consigliate:",
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
h1 {
  margin: 20px;
}

.gallery-carousel {
  width: 100%;
  height: 100%;
  overflow: scroll;
}

.carousel-inner {
  display: flex;
  gap: 20px;
  transition: transform 0.5s ease-in-out;
  margin-left: 20px;
  margin-right: 20px;
}

.gallery-carousel img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 0 10px;
}

/* Stili per schermi medi */
@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }
}

/* Stili per schermi piccoli */
@media (max-width: 480px) {
  h1 {
    font-size: 1.5rem;
  }
}
</style>
