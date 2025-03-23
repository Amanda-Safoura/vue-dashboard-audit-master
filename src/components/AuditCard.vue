<template>
  <div class="audit-card" @click="$emit('view', audit)">
    <h3>{{ audit.name }}</h3>
    <p>Entreprise: {{ audit.company.name }}</p>
    <p>Date: {{ new Date(audit.createdAt).toLocaleDateString() }}</p>
    <button @click.stop="$emit('delete', audit.id)">Supprimer</button>
  </div>
</template>

<script>
export default {
  props: {
    audit: Object
  }
}
</script>

<style scoped>
.audit-card {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}
.audit-card:hover {
  background: #f5f5f5;
}
button {
  background: red;
  color: white;
  border: none;
  padding: 5px;
  cursor: pointer;
}
</style>
