<template>
  <BContainer>
    <Navbar />
    <h2>Mes Audits</h2>

    <BButton @click="showAuditForm = true" variant="primary" class="mb-3">+ Nouvel Audit</BButton>

    <AuditForm v-if="showAuditForm" :show="showAuditForm" @close="showAuditForm = false" @refresh="fetchAudits" />

    <div class="audit-list">
      <AuditCard v-for="audit in audits" :key="audit.id" :audit="audit" @view="viewAudit" @delete="deleteAudit" />
    </div>
  </BContainer>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { auditService } from '../api/auditService'
import { useRouter } from 'vue-router'
import { BContainer, BButton } from 'bootstrap-vue-next'
import Navbar from '../components/Navbar.vue'
import AuditCard from '../components/AuditCard.vue'
import AuditForm from '../components/AuditForm.vue'

// Références réactives
const audits = ref([])
const showAuditForm = ref(false)

// Router pour la navigation
const router = useRouter()

// Récupérer la liste des audits
const fetchAudits = async () => {
  const response = await auditService.getAudits()
  audits.value = response.data
}

// Fonction pour voir les détails d'un audit
const viewAudit = (audit) => {
  router.push(`/audits/${audit.id}`)
}

// Fonction pour supprimer un audit
const deleteAudit = async (id) => {
  await auditService.deleteAudit(id)
  fetchAudits() // Rafraîchir la liste des audits après suppression
}

// Charger les audits au montage du composant
onMounted(fetchAudits)
</script>

<style scoped>
.audit-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
