<template>
  <BModal :show="show" no-footer title="Nouvelle Section" @hide="$emit('close')" centered @update:show="$emit('update:show', false)">
    <template #default>
      <BFormInput v-model="name" placeholder="Nom de la section" class="mb-2" :state="nameValid" />

      <div class="d-flex justify-content-between">
        <BButton variant="primary" @click="addSection">Ajouter</BButton>
        <BButton variant="secondary" @click="$emit('close')">Annuler</BButton>
      </div>
    </template>
  </BModal>
</template>

<script setup>
import { ref, computed } from 'vue'
import { sectionService } from '../api/sectionService'
import { BModal, BFormInput, BButton } from 'bootstrap-vue-next'

const props = defineProps({
  auditId: Number,
  show: Boolean
})

const emit = defineEmits(['update:show', 'close'])

const name = ref('')
const nameValid = computed(() => name.value.length > 0)

const addSection = async () => {
  if (!nameValid.value) return alert('Veuillez entrer un nom')
  await sectionService.createSection({
    name: name.value,
    audit: `api/audits/${props.auditId}`
  })
  emit('refresh')
  emit('update:show', false) // Fermer le modal après l'ajout
  emit('close')
}
</script>

<style scoped>
.modal-content {
  padding: 20px;
  border-radius: 8px;
  width: 300px;
}
</style>
