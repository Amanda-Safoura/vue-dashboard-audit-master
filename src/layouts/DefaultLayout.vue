<template>
  <div class="layout">
    <Navbar />
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  components: { Navbar }
}
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
}
</style>
