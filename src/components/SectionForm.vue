<template>
  <div class="modal" v-if="show">
    <div class="modal-content">
      <h3>Nouvelle Section</h3>
      <input v-model="name" type="text" placeholder="Nom de la section" />
      <div class="actions">
        <button @click="addSection">Ajouter</button>
        <button @click="$emit('close')">Annuler</button>
      </div>
    </div>
  </div>
</template>

<script>
import { sectionService } from '../api/sectionService'

export default {
  props: {
    auditId: Number,
    show: Boolean
  },
  data() {
    return {
      name: ''
    }
  },
  methods: {
    async addSection() {
      if (!this.name) return alert('Veuillez entrer un nom')
      await sectionService.createSection({ name: this.name, audit: `api/audits/${this.auditId}`})
      this.$emit('refresh') // Rafraîchir la liste après ajout
      this.$emit('close') // Fermer le modal
    }
  }
}
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
}
.actions {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
</style>
