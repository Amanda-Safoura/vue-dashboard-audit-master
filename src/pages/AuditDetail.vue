<template>
  <div>
    <Navbar />
    <h2>{{ audit.name }}</h2>
    <button @click="showSectionForm = true">+ Nouvelle Section</button>

    <SectionForm v-if="showSectionForm" :auditId="audit.id" :show="showSectionForm" @close="showSectionForm = false" @refresh="fetchSections" />

    <div class="section-list">
      <div v-for="section in sections" :key="section.id" class="section-card" @click="viewSection(section)">
        <h3>{{ section.name }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import SectionForm from '../components/SectionForm.vue'
import { auditService } from '../api/auditService'
import { sectionService } from '../api/sectionService'

export default {
  components: { Navbar, SectionForm },
  data() {
    return {
      audit: {},
      sections: [],
      showSectionForm: false
    }
  },
  async mounted() {
    const auditId = this.$route.params.id
    this.audit = (await auditService.getAudit(auditId)).data
    this.fetchSections()
  },
  methods: {
    async fetchSections() {
      const response = await sectionService.getSections(this.audit.id)
      this.sections = response.data
    },
    viewSection(section) {
      this.$router.push(`/sections/${section.id}`)
    }
  }
}
</script>

<style scoped>
.section-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.section-card {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}
.section-card:hover {
  background: #f5f5f5;
}
</style>
