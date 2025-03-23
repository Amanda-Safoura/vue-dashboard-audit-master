<template>
  <div>
    <Navbar />
    <h2>{{ section.name }}</h2>
    <button @click="showSubSectionForm = true">+ Nouvelle Sous-Section</button>

    <SubSectionForm v-if="showSubSectionForm" :sectionId="section.id" :show="showSubSectionForm" @close="showSubSectionForm = false" @refresh="fetchSubSections" />

    <div class="sub-section-list">
      <div v-for="subSection in subSections" :key="subSection.id" class="sub-section-card">
        <h3>{{ subSection.name }}</h3>
        <button @click="openReportModal(subSection)">Ajouter Rapport</button>
      </div>
    </div>

    <ReportForm v-if="showReportForm" :subSectionId="selectedSubSection.id" :show="showReportForm" @close="showReportForm = false" />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import SubSectionForm from '../components/SubSectionForm.vue'
import ReportForm from '../components/ReportForm.vue'
import { sectionService } from '../api/sectionService'
import { subSectionService } from '../api/subsectionService'

export default {
  components: { Navbar, SubSectionForm, ReportForm },
  data() {
    return {
      section: {},
      subSections: [],
      showSubSectionForm: false,
      showReportForm: false,
      selectedSubSection: null
    }
  },
  async mounted() {
    const sectionId = this.$route.params.id
    this.section = (await sectionService.getSection(sectionId)).data
    this.fetchSubSections()
  },
  methods: {
    async fetchSubSections() {
      const response = await subSectionService.getSubSections(this.section.id)
      this.subSections = response.data
    },
    openReportModal(subSection) {
      this.selectedSubSection = subSection
      this.showReportForm = true
    }
  }
}
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
}
.sub-section-card:hover {
  background: #f5f5f5;
}
</style>
