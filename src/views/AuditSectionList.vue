<template>
  <div>
    <h1>Gestion des Sections d'Audit</h1>
    <BButton variant="success" @click="openAddSectionModal">Ajouter une Section</BButton>
    <BTable :items="sections" :fields="fields" hover striped>
      <template #cell(actions)="row">
        <BButton size="sm" variant="warning" @click="editSection(row.item)">Éditer</BButton>
        <BButton size="sm" variant="danger" @click="deleteSection(row.item)">Supprimer</BButton>
      </template>
    </BTable>

    <BModal no-footer v-model="showModal" title="Ajouter une Section d'Audit">
      <form @submit.prevent="handleSubmit">
        <BFormGroup label="Nom de la Section" label-for="name">
          <BFormInput id="name" v-model="newSection.name" required />
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

const sections = ref([]);
const fields = ref([
  { key: 'name', label: 'Nom' },
  { key: 'actions', label: 'Actions' }
]);

const showModal = ref(false);
const newSection = ref({
  name: ''
});

const fetchSections = async () => {
  try {
    const response = await axios.get('/api/audit-sections');
    sections.value = response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des sections:', error);
  }
};

const openAddSectionModal = () => {
  showModal.value = true;
};

const handleSubmit = async () => {
  try {
    await axios.post('/api/audit-sections', newSection.value);
    fetchSections();
    showModal.value = false;
  } catch (error) {
    console.error('Erreur lors de l\'ajout de la section:', error);
  }
};

const editSection = (section) => {
  console.log('Édition de la section:', section);
};

const deleteSection = async (section) => {
  try {
    await axios.delete(`/api/audit-sections/${section.id}`);
    fetchSections();
  } catch (error) {
    console.error('Erreur lors de la suppression de la section:', error);
  }
};

onMounted(fetchSections);
</script>

<style scoped>
/* Style pour la page des sections d'audit */
</style>
