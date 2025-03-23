<template>
  <div class="modal-overlay" v-if="show">
    <div class="modal">
      <h2>{{ title }}</h2>
      <slot></slot>
      <button @click="$emit('close')">Fermer</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: Boolean,
    title: String
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  background: white;
  padding: 20px;
  border-radius: 5px;
}
button {
  background: #333;
  color: white;
  padding: 10px;
  cursor: pointer;
}
</style>
