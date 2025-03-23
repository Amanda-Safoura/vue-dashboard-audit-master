<template>
  <div>
    <Navbar />
    <h2>{{ section.name }}</h2>
    <button @click="showSubSectionForm = true" :disabled="isLoading">+ Nouvelle Sous-Section</button>

    <!-- Formulaire pour ajouter une nouvelle sous-section -->
    <SubSectionForm v-if="showSubSectionForm" :sectionId="section.id" :show="showSubSectionForm" @close="showSubSectionForm = false" @refresh="fetchSubSections" />

    <!-- Liste des sous-sections -->
    <div class="sub-section-list" v-if="!isLoading">
      <div v-for="subSection in subSections" :key="subSection.id" class="sub-section-card">
        <h3>{{ subSection.name }}</h3>
        <button @click="openReportModal(subSection)">Ajouter Rapport</button>
      </div>
    </div>

    <!-- Modal pour ajouter un rapport -->
    <ReportForm v-if="showReportForm" :subSectionId="selectedSubSection.id" :show="showReportForm" @close="showReportForm = false" />

    <!-- Affichage d'un indicateur de chargement -->
    <div v-if="isLoading" class="loading-indicator">Chargement...</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Navbar from '../components/Navbar.vue'
import SubSectionForm from '../components/SubSectionForm.vue'
import ReportForm from '../components/ReportForm.vue'
import { sectionService } from '../api/sectionService'
import { subSectionService } from '../api/subsectionService'

const section = ref({})
const subSections = ref([])
const showSubSectionForm = ref(false)
const showReportForm = ref(false)
const selectedSubSection = ref(null)
const isLoading = ref(true) // State to track loading

// Fetch section details and sub-sections when component is mounted
const fetchSectionAndSubSections = async () => {
  const sectionId = this.$route.params.id
  try {
    const sectionResponse = await sectionService.getSection(sectionId)
    section.value = sectionResponse.data
    await fetchSubSections()
  } catch (error) {
    console.error('Erreur lors du chargement des données de la section:', error)
  }
}

// Fetch sub-sections for the given section
const fetchSubSections = async () => {
  try {
    const response = await subSectionService.getSubSections(section.value.id)
    subSections.value = response.data
  } catch (error) {
    console.error('Erreur lors du chargement des sous-sections:', error)
  } finally {
    isLoading.value = false // Set loading to false after fetching
  }
}

// Open report modal for a selected sub-section
const openReportModal = (subSection) => {
  selectedSubSection.value = subSection
  showReportForm.value = true
}

// Fetch data when the component is mounted
onMounted(() => {
  fetchSectionAndSubSections()
})
</script>

<style scoped>
.sub-section-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.sub-section-card {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.sub-section-card:hover {
  background: #f5f5f5;
}
.loading-indicator {
  text-align: center;
  margin-top: 20px;
  font-size: 18px;
  color: #888;
}
</style>
