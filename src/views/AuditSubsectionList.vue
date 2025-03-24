<template>
  <div>
    <h1>Gestion des Sous-sections d'Audit</h1>
    <BButton variant="success" @click="openAddSubsectionModal">Ajouter une Sous-section</BButton>
    <BTable :items="subsections" :fields="fields" hover striped>
      <template #cell(actions)="row">
        <BButton size="sm" variant="warning" @click="editSubsection(row.item)">Éditer</BButton>
        <BButton size="sm" variant="danger" @click="deleteSubsection(row.item)">Supprimer</BButton>
      </template>
    </BTable>

    <BModal no-footer="" v-model="showModal" title="Ajouter une Sous-section d'Audit">
      <form @submit.prevent="handleSubmit">
        <BFormGroup label="Nom de la Sous-section" label-for="name">
          <BFormInput id="name" v-model="newSubsection.name" required />
        </BFormGroup>
        <BButton type="submit" variant="primary">Ajouter</BButton>
      </form>
    </BModal>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { BButton, BModal, BFormGroup, BFormInput, BTable } from 'bootstrap-vue-next';

const subsections = ref([]);
const fields = ref([
  { key: 'name', label: 'Nom' },
  { key: 'actions', label: 'Actions' }
]);

const showModal = ref(false);
const newSubsection = ref({
  name: ''
});

const fetchSubsections = async () => {
  try {
    const response = await axios.get('/api/audit-subsections');
    subsections.value = response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des sous-sections:', error);
  }
};

const openAddSubsectionModal = () => {
  showModal.value = true;
};

const handleSubmit = async () => {
  try {
    await axios.post('/api/audit-subsections', newSubsection.value);
    fetchSubsections();
    showModal.value = false;
  } catch (error) {
    console.error('Erreur lors de l\'ajout de la sous-section:', error);
  }
};

const editSubsection = (subsection) => {
  console.log('Édition de la sous-section:', subsection);
};

const deleteSubsection = async (subsection) => {
  try {
    await axios.delete(`/api/audit-subsections/${subsection.id}`);
    fetchSubsections();
  } catch (error) {
    console.error('Erreur lors de la suppression de la sous-section:', error);
  }
};

onMounted(fetchSubsections);
</script>

<style scoped>
/* Style pour la page des sous-sections d'audit */
</style>
