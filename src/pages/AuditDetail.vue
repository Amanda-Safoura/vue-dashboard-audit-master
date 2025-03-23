<template>
  <BContainer>
    <Navbar />
    <h2>{{ audit.name }}</h2>

    <BButton @click="showSectionForm = true" variant="primary" class="mb-3">+ Nouvelle Section</BButton>

    <SectionForm v-if="showSectionForm" :auditId="audit.id" :show="showSectionForm" @close="showSectionForm = false" @refresh="fetchSections" />

    <div class="section-list">
      <BCard v-for="section in sections" :key="section.id" class="section-card" @click="viewSection(section)" header-bg-variant="light">
        <h3>{{ section.name }}</h3>
      </BCard>
    </div>
  </BContainer>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { auditService } from '../api/auditService'
import { sectionService } from '../api/sectionService'
import { BContainer, BButton, BCard } from 'bootstrap-vue-next'
import Navbar from '../components/Navbar.vue'
import SectionForm from '../components/SectionForm.vue'

// Références réactives pour les sections et l'audit
const audit = ref({})
const sections = ref([])
const showSectionForm = ref(false)

// Récupérer l'audit à partir de l'ID passé dans l'URL
const route = useRoute()
const router = useRouter()

// Fonction pour récupérer les sections de l'audit
const fetchSections = async () => {
  const response = await sectionService.getSections(audit.value.id)
  sections.value = response.data
}

// Charger les détails de l'audit au montage du composant
onMounted(async () => {
  const auditId = route.params.id
  audit.value = (await auditService.getAudit(auditId)).data
  fetchSections()
})

// Fonction pour naviguer vers les détails d'une section
const viewSection = (section) => {
  router.push(`/sections/${section.id}`)
}
</script>

<style scoped>
.section-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.section-card {
  cursor: pointer;
}

.section-card:hover {
  background: #f5f5f5;
}
</style>
