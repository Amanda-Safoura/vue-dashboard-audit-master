<template>
  <Teleport to="body">
    <div v-if="loading" class="loader-overlay" aria-live="polite">
      <BSpinner variant="primary" class="spinner" />
    </div>
  </Teleport>
</template>

<script setup>
import { defineProps } from 'vue'
import { BSpinner } from 'bootstrap-vue-next'

defineProps({ loading: Boolean })
</script>

<style scoped>
.loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
.spinner {
  width: 4rem;
  height: 4rem;
}
</style>
