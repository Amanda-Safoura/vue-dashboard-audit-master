<template>
  <div class="login-container">
    <h2>Connexion</h2>
    <BForm @submit.prevent="login">
      <BFormGroup label="Nom d'utilisateur">
        <BFormInput v-model="credentials.username" type="text" required placeholder="Entrez votre nom d'utilisateur" />
      </BFormGroup>

      <BFormGroup label="Mot de passe">
        <BFormInput v-model="credentials.password" type="password" required placeholder="Entrez votre mot de passe" />
      </BFormGroup>
      <BButton type="submit" variant="primary" block>Se connecter</BButton>

      <p v-if="error" class="error">{{ error }}</p>
    </BForm>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { authService } from '../api/authService'
import { BForm, BFormGroup, BFormInput, BButton } from 'bootstrap-vue-next'

// Initialisation des références
const credentials = ref({
  username: '',
  password: ''
})

const error = ref('')
const router = useRouter() // Récupération du router

// Méthode de connexion
const login = async () => {
  if (!credentials.value.username || !credentials.value.password) {
    error.value = 'Veuillez remplir tous les champs.'
    return
  }

  try {
    const response = await authService.login(credentials.value)
    localStorage.setItem('token', response.data.token)
    router.push('/audits')
  } catch (err) {
    error.value = err.response?.data?.message || 'Une erreur est survenue.'
  }
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-align: center;
}

.error {
  color: red;
  font-size: 14px;
  margin-top: 10px;
}
</style>
