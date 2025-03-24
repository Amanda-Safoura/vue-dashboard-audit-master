<template>
  <div class="dashboard">
    <h1>Bienvenue sur le Dashboard</h1>
    <BCard>
      <h4>Statistiques Globales</h4>
      <BRow>
        <BCol>
          <BCardText> <strong>Agents</strong>: {{ agentsCount }} </BCardText>
        </BCol>
        <BCol>
          <BCardText> <strong>Audits</strong>: {{ auditsCount }} </BCardText>
        </BCol>
      </BRow>
    </BCard>
    <div>
      <!-- Navigation entre les différentes pages du dashboard -->
      <BButton variant="primary" @click="goToAgents">Gérer les agents</BButton>
      <BButton variant="secondary" @click="goToAudits">Voir les audits</BButton>

      <!-- Le RouterView va rendre les composants enfants -->
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import { BButton, BCard, BCardText, BCol, BRow } from 'bootstrap-vue-next'
import { getAgents } from '@/services/agents'
import { getAudits } from '@/services/audits'

const agentsCount = ref(0)
const auditsCount = ref(0)
const router = useRouter()

const goToAgents = () => {
  router.push('/dashboard/agents')
}

const goToAudits = () => {
  router.push('/dashboard/audits')
}

onMounted(async () => {
  // Appel API pour obtenir les comptes agents et audits
  try {
    const responseAgents = await getAgents()

    const responseAudits = await getAudits()
    agentsCount.value = responseAgents.length
    auditsCount.value = responseAudits.length
  } catch (error) {
    console.error('Erreur lors du chargement des données:', error)
  }
})
</script>

<style scoped>
.dashboard {
  padding: 20px;
}
</style>
