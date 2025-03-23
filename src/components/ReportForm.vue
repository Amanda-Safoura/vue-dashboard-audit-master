<template>
  <BModal :show="show" title="Rapport de sous-section" @hide="$emit('close')" centered @update:show="$emit('update:show', false)">
    <template #default>
      <BFormCheckbox v-model="isOkey" :checked="isOkey" class="mb-2"> Conforme </BFormCheckbox>

      <BFormTextarea v-if="!isOkey" v-model="reportMessage" placeholder="Détaillez le problème..." rows="3" class="mb-2" />

      <BFormFile v-if="!isOkey" @change="handleFileUpload" class="mb-2" />

      <div class="d-flex justify-content-between">
        <BButton variant="primary" @click="submitReport">Soumettre</BButton>
        <BButton variant="secondary" @click="$emit('close')">Annuler</BButton>
      </div>
    </template>
  </BModal>
</template>

<script setup>
import { ref } from 'vue'
import { reportService } from '../api/reportService'
import { BModal, BFormCheckbox, BFormFile, BButton, BFormTextarea } from 'bootstrap-vue-next'

// Props to accept `show` and `subSectionId` from the parent component
const props = defineProps({
  subSectionId: Number,
  show: Boolean
})

const emit = defineEmits(['update:show', 'close'])

const isOkey = ref(true)
const reportMessage = ref('')
const reportProof = ref(null)

const handleFileUpload = (event) => {
  reportProof.value = event.target.files[0]
}

const submitReport = async () => {
  const formData = new FormData()
  formData.append('is_okey', isOkey.value)

  if (!isOkey.value) {
    formData.append('report_message', reportMessage.value)
    if (reportProof.value) {
      formData.append('report_proof', reportProof.value)
    }
  }

  await reportService.createReport(props.subSectionId, formData)
  emit('update:show', false) // Close the modal after submitting the report
  emit('close')
}
</script>

<style scoped>
.modal-content {
  padding: 20px;
  border-radius: 8px;
  width: 400px;
}
</style>
