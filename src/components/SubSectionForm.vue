<template>
  <BModal :show="show" title="Nouvelle Sous-Section" @hide="$emit('close')" centered @update:show="$emit('update:show', false)">
    <template #default>
      <BFormInput v-model="name" placeholder="Nom de la sous-section" class="mb-2" :state="nameValid" />

      <div class="d-flex justify-content-between">
        <BButton variant="primary" @click="addSubSection">Ajouter</BButton>
        <BButton variant="secondary" @click="$emit('close')">Annuler</BButton>
      </div>
    </template>
  </BModal>
</template>

<script setup>
import { ref, computed } from 'vue'
import { subSectionService } from '../api/subsectionService'
import { BModal, BFormInput, BButton } from 'bootstrap-vue-next'

// Props to accept `show` and `sectionId` from the parent component
const props = defineProps({
  sectionId: Number,
  show: Boolean
})

const emit = defineEmits(['update:show', 'refresh', 'close'])

const name = ref('')
const nameValid = computed(() => name.value.length > 0)

// Function to add a new sub-section
const addSubSection = async () => {
  if (!nameValid.value) return alert('Veuillez entrer un nom')
  await subSectionService.createSubSection(props.sectionId, { name: name.value })
  emit('refresh') // Refresh the list after adding a sub-section
  emit('update:show', false) // Close the modal
}
</script>

<style scoped>
.modal-content {
  padding: 20px;
  border-radius: 8px;
  width: 300px;
}
</style>
