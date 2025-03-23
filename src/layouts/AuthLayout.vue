<template>
  <div class="auth-layout">
    <div class="auth-container">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.auth-layout {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f5f5f5;
}
.auth-container {
  width: 400px;
  padding: 20px;
  background: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}
</style>
