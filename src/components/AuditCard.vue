<template>
  <BCard @click="viewAudit" class="audit-card" title="Audit">
    <BCardBody>
      <BCardTitle>{{ audit.name }}</BCardTitle>
      <BCardText>
        <strong>Entreprise:</strong> {{ audit.company.name }}<br />
        <strong>Date:</strong> {{ formattedDate }}
      </BCardText>
      <BButton variant="danger" @click.stop="deleteAudit"> <BIconTrashFill class="me-1" /> Supprimer </BButton>
    </BCardBody>
  </BCard>
</template>

<script setup>
import { computed } from 'vue'
import { BCard, BCardBody, BCardTitle, BCardText, BButton } from 'bootstrap-vue-next'
import { BIconTrashFill } from 'bootstrap-icons-vue'

const props = defineProps({
  audit: Object
})

const emit = defineEmits(['view', 'delete'])

const formattedDate = computed(() => new Date(props.audit.createdAt).toLocaleDateString())

const viewAudit = () => emit('view', props.audit)
const deleteAudit = () => emit('delete', props.audit.id)
</script>

<style scoped>
.audit-card {
  cursor: pointer;
  transition:
    transform 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;
}

.audit-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
</style>
