<template>
  <div>
    <Navbar />
    <h2>Mes Audits</h2>
    <button @click="showAuditForm = true">+ Nouvel Audit</button>

    <AuditForm v-if="showAuditForm" :show="showAuditForm" @close="showAuditForm = false" @refresh="fetchAudits" />

    <div class="audit-list">
      <AuditCard v-for="audit in audits" :key="audit.id" :audit="audit" @view="viewAudit" @delete="deleteAudit" />
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import AuditCard from '../components/AuditCard.vue'
import AuditForm from '../components/AuditForm.vue'
import { auditService } from '../api/auditService'

export default {
  components: { Navbar, AuditCard, AuditForm },
  data() {
    return {
      audits: [],
      showAuditForm: false
    }
  },
  async mounted() {
    this.fetchAudits()
  },
  methods: {
    async fetchAudits() {
      const response = await auditService.getAudits()
      this.audits = response.data
    },
    viewAudit(audit) {
      this.$router.push(`/audits/${audit.id}`)
    },
    async deleteAudit(id) {
      await auditService.deleteAudit(id)
      this.fetchAudits()
    }
  }
}
</script>

<style scoped>
.audit-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
