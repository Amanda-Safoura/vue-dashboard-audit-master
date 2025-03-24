<template>
  <div id="sidebar" class="bg-light p-3">
    <ul class="list-unstyled">
      <li>
        <RouterLink to="/agents" class="d-block py-2">Agents</RouterLink>
      </li>
      <li>
        <RouterLink to="/audit-sections" class="d-block py-2">Sections d'Audit</RouterLink>
      </li>
      <li>
        <RouterLink to="/audit-subsections" class="d-block py-2">Sous-sections d'Audit</RouterLink>
      </li>
      <li>
        <RouterLink to="/audits" class="d-block py-2">Audits</RouterLink>
      </li>
      <li>
        <RouterLink to="/reports" class="d-block py-2">Rapports</RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

// Si tu veux gérer l'état de la sidebar (ouverte/fermée), tu peux ajouter du code ici
</script>

<style scoped>
#sidebar {
  width: 250px;
  min-height: 100vh;
}
</style>
