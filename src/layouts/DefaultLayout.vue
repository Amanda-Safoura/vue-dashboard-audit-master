<template>
  <BContainer fluid class="layout">
    <BRow>
      <!-- Navbar -->
      <BCol cols="12">
        <Navbar />
      </BCol>
    </BRow>

    <!-- Content -->
    <BRow class="content">
      <BCol cols="12">
        <slot></slot>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup>
import { BContainer, BRow, BCol } from 'bootstrap-vue-next'
import Navbar from '../components/Navbar.vue'
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  background-color: #f8f9fa; /* Couleur de fond douce pour un contraste agréable */
}
</style>
