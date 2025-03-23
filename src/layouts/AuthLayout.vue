<template>
  <BContainer fluid class="auth-layout">
    <BRow class="justify-content-center align-items-center" style="height: 100vh">
      <BCol cols="12" sm="8" md="6" lg="4">
        <div class="auth-container">
          <slot />
        </div>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup>
import { BContainer, BRow, BCol } from 'bootstrap-vue-next'
</script>

<style scoped>
.auth-layout {
  background: #f5f5f5;
}

.auth-container {
  padding: 20px;
  background: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
</style>
