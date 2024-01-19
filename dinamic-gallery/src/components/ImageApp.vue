<script>
export default {
  props: ["image"],

  data() {
    return {
      showTitleOnHover: false,
      modalVisible: false,
      currentImageIndex: 0,
    };
  },
  // NON PRENDE LA MODALE GIUSTA!

  methods: {
    showTitle() {
      this.showTitleOnHover = true;
    },
    hideTitle() {
      this.showTitleOnHover = false;
    },
    openModal() {
      this.modalVisible = true;
      this.currentImageIndex = this.$store.state.images.findIndex(
        (img) => img.id === this.image.id
      );
    },
    closeModal() {
      this.modalVisible = false;
    },
    prevImage() {
      this.currentImageIndex =
        (this.currentImageIndex - 1 + this.$store.state.images.length) %
        this.$store.state.images.length;
    },
    nextImage() {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.$store.state.images.length;
    },
  },
};
</script>

<template>
  <div>
    <div
      class="card"
      @mouseover="showTitle"
      @mouseout="hideTitle"
      @click="openModal"
    >
      <img :src="image.url" alt="Card Image" />
      <div v-if="showTitleOnHover" class="card-title">{{ image.title }}</div>
    </div>

    <div v-if="modalVisible" class="modal" @click="closeModal">
      <div class="modal-content">
        <button @click.stop="prevImage" class="nav-button">←</button>
        <img
          :src="$store.state.images[currentImageIndex].url"
          alt="Modal Image"
        />
        <button @click.stop="nextImage" class="nav-button">→</button>
        <div class="modal-title">
          {{ $store.state.images[currentImageIndex].title }}
        </div>
        <div class="modal-description">
          {{ $store.state.images[currentImageIndex].description }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.card {
  position: relative;
  width: 300px;
  height: 200px;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card:hover {
  transform: scale(1.05);
}

.card-title {
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
}

.modal {
  z-index: 100;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  align-items: center;
  justify-content: center;
}

.modal-content {
  position: relative;
  max-width: 80%;
  max-height: 80%;
}

.modal img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 10px;
}

.modal-title {
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
}

.modal-description {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  font-size: 14px;
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
}
</style>
