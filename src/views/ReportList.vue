<template>
  <div>
    <h1>Rapports</h1>
    <BTable :items="reports" :fields="fields" hover striped>
      <template #cell(status)="row">
        <BBadge :variant="row.item.okey ? 'success' : 'danger'">
          {{ row.item.okey ? 'Validé' : 'Non validé' }}
        </BBadge>
      </template>

      <template #cell(actions)="row">
        <BButton size="sm" variant="info" @click="viewReport(row.item)">Voir</BButton>
      </template>
    </BTable>

    <!-- Modal pour afficher les détails du rapport -->
    <BModal no-footer v-model="showModal" title="Détails du Rapport" size="lg" hide-footer>
      <p><strong>Nom :</strong> {{ selectedReport?.name }}</p>
      <p><strong>Message :</strong> {{ selectedReport?.reportMessage || 'Aucun message' }}</p>
      <p>
        <strong>Preuve :</strong>
        <span v-if="selectedReport?.reportProof">
          <a :href="selectedReport.reportProof" target="_blank">Voir la preuve</a>
        </span>
        <span v-else> Aucune preuve disponible </span>
      </p>
      <p><strong>Date de création :</strong> {{ selectedReport?.createdAt }}</p>
      <p><strong>Section d'Audit :</strong> {{ selectedReport?.auditSubsection || 'Non spécifiée' }}</p>

      <div class="d-flex justify-content-end">
        <BButton variant="secondary" @click="showModal = false">Fermer</BButton>
      </div>
    </BModal>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { BButton, BTable, BBadge, BModal } from 'bootstrap-vue-next'
import { getReports } from '@/services/reports'
import { useRoute } from 'vue-router'

const reports = ref([])
const showModal = ref(false)
const selectedReport = ref(null)

const router = useRoute()
const auditId = router.params.id

const fields = ref([
  { key: 'name', label: 'Nom du Rapport' },
  { key: 'okey', label: 'Statut' },
  { key: 'createdAt', label: 'Date de création' },
  { key: 'actions', label: 'Actions' }
])

const fetchReports = async () => {
  try {
    reports.value = await getReports(auditId)
  } catch (error) {
    console.error('Erreur lors de la récupération des rapports:', error)
  }
}

const viewReport = (report) => {
  selectedReport.value = report
  showModal.value = true
}

onMounted(fetchReports)
</script>

<style scoped></style>
