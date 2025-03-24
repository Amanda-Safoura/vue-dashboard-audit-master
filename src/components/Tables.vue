<template>
  <BTable :items="tableData" :fields="fields" hover striped>
    <template #cell(actions)="row">
      <BButton size="sm" variant="warning" @click="editRow(row.item)">Éditer</BButton>
      <BButton size="sm" variant="danger" @click="deleteRow(row.item)">Supprimer</BButton>
    </template>
  </BTable>
</template>

<script setup>
import { BButton, BTable } from 'bootstrap-vue-next';
import { ref } from 'vue';

const fields = ref([
  { key: 'name', label: 'Nom' },
  { key: 'email', label: 'Email' },
  { key: 'actions', label: 'Actions' }
]);

const tableData = ref([
  { id: 1, name: 'Agent 1', email: 'agent1@example.com' },
  { id: 2, name: 'Agent 2', email: 'agent2@example.com' }
]);

const editRow = (item) => {
  console.log('Edit row:', item);
};

const deleteRow = (item) => {
  console.log('Delete row:', item);
};
</script>

<style scoped>
/* Styles personnalisés pour les tables */
</style>
