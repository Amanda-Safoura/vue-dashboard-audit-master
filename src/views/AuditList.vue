<template>
  <div>
    <h1>Audits</h1>
    <BTable :items="audits" :fields="fields" hover striped>
      <template #cell(actions)="row">
        <BButton size="sm" variant="info" @click="viewAudit(row.item)">Voir</BButton>
      </template>
    </BTable>
  </div>
  <div class="mt-5"></div>
  <RouterView />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { BTable, BButton } from 'bootstrap-vue-next'
import { getAudits } from '@/services/audits'
import { useRouter } from 'vue-router'

const router = useRouter()

const audits = ref([])
const fields = ref([
  { key: 'name', label: "Nom de l'Audit" },
  { key: 'company.name', label: 'Entreprise' },
  { key: 'createdAt', label: 'Date de création' },
  { key: 'actions', label: 'Actions' }
])

const fetchAudits = async () => {
  try {
    const auditListResponse = await getAudits()

    audits.value = auditListResponse.map((audit) => {
      const auditDate = new Date(audit.createdAt)
      audit.createdAt = auditDate.toLocaleString()
      return audit
    })
  } catch (error) {
    console.error('Erreur lors de la récupération des audits:', error)
  }
}

const viewAudit = (audit) => {
  router.push(`/dashboard/audits/${audit.id}`)
}

onMounted(fetchAudits)
</script>

<style scoped>
/* Style pour la page des audits */
</style>
