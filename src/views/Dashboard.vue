<template>
  <div class="dashboard">
    <h1 class="title">Bienvenue sur le Dashboard</h1>
    <BCard class="stats-card">
      <h4 class="card-title">Statistiques Globales</h4>
      <BRow class="stats-row">
        <BCol class="stat-box">
          <BCardText class="stat-text"> <strong>Agents :</strong> {{ agentsCount }} </BCardText>
        </BCol>
        <BCol class="stat-box">
          <BCardText class="stat-text"> <strong>Audits :</strong> {{ auditsCount }} </BCardText>
        </BCol>
        <BCol class="stat-box">
            <BCardText class="stat-text"><strong>Sections :</strong>{{ auditSectionsCount }}</BCardText>
        </BCol>
      </BRow>
    </BCard>

    <div class="buttons-container">
      <BButton variant="primary" class="action-button" @click="goToAgents">Gérer les agents</BButton>
      <BButton variant="info" class="action-button" @click="goToAudits">Voir les audits</BButton>
      <BButton variant="secondary" class="action-button" @click="goToAuditSections">Gérer les sections d'audit</BButton>
    </div>

    <RouterView />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import { BButton, BCard, BCardText, BCol, BRow } from 'bootstrap-vue-next'
import { getAgents } from '@/services/agents'
import { getAudits } from '@/services/audits'
import { getAuditSections } from '@/services/auditSections'

const agentsCount = ref(0)
const auditsCount = ref(0)
const auditSectionsCount = ref(0)
const router = useRouter()

const goToAgents = () => {
  router.push('/dashboard/agents')
}

const goToAudits = () => {
  router.push('/dashboard/audits')
}

const goToAuditSections = () => {
  router.push('/dashboard/audit-sections')
}

onMounted(async () => {
  try {
    const responseAgents = await getAgents()
    const responseAudits = await getAudits()
    const responseAuditSections = await getAuditSections()
    agentsCount.value = responseAgents.length
    auditsCount.value = responseAudits.length
    auditSectionsCount.value = responseAuditSections.length
  } catch (error) {
    console.error('Erreur lors du chargement des données:', error)
  }
})
</script>

<style scoped>
.dashboard {
  padding: 20px;
  max-width: 800px;
  margin: auto;
  text-align: center;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.stats-card {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.card-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
}

.stats-row {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.stat-box {
  background: white;
  padding: 10px 15px;
  border-radius: 5px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  flex: 1;
}

.stat-text {
  font-size: 16px;
  font-weight: bold;
  color: #333;
}

.buttons-container {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
}

.action-button {
  padding: 10px 15px;
  font-size: 14px;
}
</style>
