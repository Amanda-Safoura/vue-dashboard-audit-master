<template>
  <div class="modal" v-if="show">
    <div class="modal-content">
      <h3>Rapport de sous-section</h3>

      <label> <input type="checkbox" v-model="isOkey" /> Conforme </label>

      <textarea v-if="!isOkey" v-model="reportMessage" placeholder="Détaillez le problème..."></textarea>

      <input v-if="!isOkey" type="file" @change="handleFileUpload" />

      <div class="actions">
        <button @click="submitReport">Soumettre</button>
        <button @click="$emit('close')">Annuler</button>
      </div>
    </div>
  </div>
</template>

<script>
import { reportService } from '../api/reportService'

export default {
  props: {
    subSectionId: Number,
    show: Boolean
  },
  data() {
    return {
      isOkey: true,
      reportMessage: '',
      reportProof: null
    }
  },
  methods: {
    handleFileUpload(event) {
      this.reportProof = event.target.files[0]
    },
    async submitReport() {
      const formData = new FormData()
      formData.append('is_okey', this.isOkey)
      if (!this.isOkey) {
        formData.append('report_message', this.reportMessage)
        if (this.reportProof) {
          formData.append('report_proof', this.reportProof)
        }
      }
      await reportService.createReport(this.subSectionId, formData)
      this.$emit('close')
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
  width: 400px;
}
.actions {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
textarea {
  width: 100%;
  height: 80px;
  margin-top: 10px;
}
</style>
