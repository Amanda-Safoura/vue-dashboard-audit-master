<template>
  <Modal :show="show" title="Nouvel Audit" @close="$emit('close')">
    <form @submit.prevent="submit">
      <label>Nom de l'Audit</label>
      <input v-model="audit.name" required />

      <label>Entreprise</label>
      <select v-model="audit.company" required>
        <option v-for="company in companies" :key="company.id" :value="company.id">
          {{ company.name }}
        </option>
      </select>

      <button type="submit">Enregistrer</button>
    </form>
  </Modal>
</template>

<script>
import Modal from '../components/Modal.vue'
import { companyService } from '../api/companyService'
import { auditService } from '../api/auditService'

export default {
  components: { Modal },
  props: {
    show: Boolean
  },
  data() {
    return {
      audit: { name: '', company: '' },
      companies: []
    }
  },
  async mounted() {
    const response = await companyService.getCompanies()
    this.companies = response.data
  },
  methods: {
    async submit() {
      await auditService.createAudit({...this.audit, company: `api/companies/${this.audit.company}`})
      this.$emit('refresh')
      this.$emit('close')
    }
  }
}
</script>
