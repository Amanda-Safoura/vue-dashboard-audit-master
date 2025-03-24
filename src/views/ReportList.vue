<template>
  <div>
    <h1>Rapports</h1>
    <BTable :items="reports" :fields="fields" hover striped>
      <template #cell(actions)="row">
        <BButton size="sm" variant="info" @click="viewReport(row.item)">Voir le Rapport</BButton>
      </template>
    </BTable>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { BButton, BTable } from 'bootstrap-vue-next';

const reports = ref([]);
const fields = ref([
  { key: 'name', label: 'Nom du Rapport' },
  { key: 'created_at', label: 'Date de création' },
  { key: 'actions', label: 'Actions' }
]);

const fetchReports = async () => {
  try {
    const response = await axios.get('/api/audit-reports');
    reports.value = response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des rapports:', error);
  }
};

const viewReport = (report) => {
  console.log('Voir le rapport:', report);
};

onMounted(fetchReports);
</script>

<style scoped>
</style>
