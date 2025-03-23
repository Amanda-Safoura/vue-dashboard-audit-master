<template>
  <BModal v-model="showModal" title="Nouvel Audit" no-footer @hide="$emit('close')">
    <BForm @submit.prevent="submit">
      <BFormGroup label="Nom de l'Audit" label-for="audit-name">
        <BFormInput id="audit-name" v-model="audit.name" required placeholder="Entrez le nom de l'audit" />
      </BFormGroup>

      <BFormGroup label="Entreprise" label-for="company">
        <BFormSelect id="company" v-model="audit.company" required>
          <BFormSelectOption v-for="company in companies" :key="company.id" :value="company.id">
            {{ company.name }}
          </BFormSelectOption>
        </BFormSelect>
      </BFormGroup>

      <hr>
      <!-- Boutons alignés côte à côte -->
      <div class="d-flex justify-content-end gap-2 mt-3">
        <BButton variant="secondary" @click="showModal = false">Fermer</BButton>
        <BButton type="submit" variant="primary">Enregistrer</BButton>
      </div>
    </BForm>
  </BModal>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { BModal, BForm, BFormGroup, BFormInput, BFormSelect, BFormSelectOption, BButton } from 'bootstrap-vue-next'
import { companyService } from '../api/companyService'
import { auditService } from '../api/auditService'

const props = defineProps({ show: Boolean })
const emit = defineEmits(['close', 'refresh'])

const showModal = ref(props.show)
const audit = ref({ name: '', company: '' })
const companies = ref([])

onMounted(async () => {
  const response = await companyService.getCompanies()
  companies.value = response.data
})

watch(
  () => props.show,
  (newVal) => {
    showModal.value = newVal
  }
)

const submit = async () => {
  await auditService.createAudit({ ...audit.value, company: `api/companies/${audit.value.company}` })
  emit('refresh')
  emit('close')
}
</script>

<style scoped>
/* Optionnel : styles personnalisés */
</style>
