<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item" v-for="(crumb, index) in crumbs" :key="index">
        <RouterLink :to="crumb.link">{{ crumb.text }}</RouterLink>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';

defineProps({
  crumbs: {
    type: Array,
    required: true,
    default: () => []
  }
});
</script>

<style scoped>
.breadcrumb {
  background-color: #f8f9fa;
}
</style>
