<template>
  <BModal v-model="isVisible" :title="title" @hide="$emit('close')">
    <slot></slot>
    <template #footer>
      <BButton variant="secondary" @click="$emit('close')">Fermer</BButton>
    </template>
  </BModal>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import { BModal, BButton } from 'bootstrap-vue-next'

const props = defineProps({
  show: Boolean,
  title: String
})
const isVisible = computed(() => props.show)
</script>
