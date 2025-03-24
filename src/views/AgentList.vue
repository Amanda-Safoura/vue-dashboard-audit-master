<template>
  <div class="container">
    <h1 class="title">Gestion des Agents</h1>
    <BButton variant="success" class="mb-3" @click="openAddAgentModal">Ajouter un Agent</BButton>
    <BTable :items="agents" :fields="fields" hover striped bordered>
      <template #cell(actions)="row">
        <BButton size="sm" variant="primary" class="me-2" @click="openEditAgentModal(row.item)">Éditer</BButton>
        <BButton size="sm" variant="danger" @click="deleteAgent(row.item)">Supprimer</BButton>
      </template>
    </BTable>

    <!-- Modal d'ajout / édition -->
    <BModal no-footer v-model="showModal" :title="isEditing ? 'Éditer l\'Agent' : 'Ajouter un Agent'" hide-footer>
      <form @submit.prevent="handleSubmit">
        <BFormGroup label="Username" label-for="username">
          <BFormInput id="username" v-model="currentAgent.username" required />
        </BFormGroup>
        <BFormGroup label="Email" label-for="email">
          <BFormInput id="email" v-model="currentAgent.email" required type="email" />
        </BFormGroup>
        <hr />
        <div class="d-flex justify-content-end mt-3">
          <BButton type="button" variant="secondary" class="me-2" @click="showModal = false">Annuler</BButton>
          <BButton type="submit" variant="primary">{{ isEditing ? 'Mettre à jour' : 'Ajouter' }}</BButton>
        </div>
      </form>
    </BModal>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { BTable, BButton, BModal, BFormGroup, BFormInput } from 'bootstrap-vue-next'
import { createAgent, getAgents, updateAgent } from '@/services/agents'

const agents = ref([])
const fields = ref([
  { key: 'username', label: 'Username' },
  { key: 'email', label: 'Email' },
  { key: 'actions', label: 'Actions' }
])

const showModal = ref(false)
const isEditing = ref(false)
const currentAgent = ref({ id: null, username: '', email: '' })

const fetchAgents = async () => {
  try {
    agents.value = await getAgents()
  } catch (error) {
    console.error('Erreur lors de la récupération des agents:', error)
  }
}

const openAddAgentModal = () => {
  isEditing.value = false
  currentAgent.value = { id: null, username: '', email: '' }
  showModal.value = true
}

const openEditAgentModal = (agent) => {
  isEditing.value = true
  currentAgent.value = { ...agent }
  showModal.value = true
}

const handleSubmit = async () => {
  try {
    if (isEditing.value) {
      await updateAgent(currentAgent.value.id, currentAgent.value)
    } else {
      await createAgent(currentAgent.value)
    }
    fetchAgents()
    showModal.value = false
  } catch (error) {
    console.error("Erreur lors de l'opération sur l'agent:", error)
  }
}

const deleteAgent = async (agent) => {
  try {
    await axios.delete(`/api/agents/${agent.id}`)
    fetchAgents()
  } catch (error) {
    console.error("Erreur lors de la suppression de l'agent:", error)
  }
}

onMounted(fetchAgents)
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: auto;
}

.title {
  text-align: center;
  margin-bottom: 20px;
}
</style>
