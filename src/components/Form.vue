<template>
  <BForm @submit.prevent="handleSubmit">
    <BFormGroup label="Nom" label-for="name">
      <BFormInput
        id="name"
        v-model="formData.name"
        required
        placeholder="Entrez le nom de l'agent"
      />
    </BFormGroup>

    <BFormGroup label="Email" label-for="email">
      <BFormInput
        id="email"
        v-model="formData.email"
        type="email"
        required
        placeholder="Entrez l'email"
      />
    </BFormGroup>

    <BButton type="submit" variant="primary">Soumettre</BButton>
  </BForm>
</template>

<script setup>
import { BButton, BForm, BFormInput, BFormGroup } from 'bootstrap-vue-next';
import { ref } from 'vue';

const formData = ref({
  name: '',
  email: ''
});

const handleSubmit = () => {
  // Appeler l'API pour envoyer les données
  console.log('Form Data Submitted:', formData.value);
};
</script>

<style scoped>
/* Styles personnalisés pour les formulaires */
</style>
