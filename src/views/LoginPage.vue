<template>
  <div class="login-container">
    <BCard class="login-card" header="Login">
      <BForm @submit.prevent="handleSubmit">
        <BFormGroup label="Username" label-for="username">
          <BFormInput id="username" type="text" v-model="username" required placeholder="Enter your username" :state="usernameState"></BFormInput>
        </BFormGroup>

        <BFormGroup label="Password" label-for="password">
          <BFormInput id="password" type="password" v-model="password" required placeholder="Enter your password" :state="passwordState"></BFormInput>
        </BFormGroup>

        <BButton type="submit" variant="primary" :disabled="loading">
          {{ loading ? 'Loading...' : 'Login' }}
        </BButton>

        <BAlert v-if="error" variant="danger" class="mt-3">
          {{ error }}
        </BAlert>
      </BForm>
    </BCard>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import axios from '../plugins/axios' // Assurez-vous que l'instance Axios est correctement configurée
import { useRouter } from 'vue-router' // Utilisation du router pour la redirection
import { BForm, BFormGroup, BFormInput, BButton, BAlert, BCard } from 'bootstrap-vue-next'

// Variables réactives pour les champs de formulaire
const username = ref('')
const password = ref('')
const error = ref(null) // Pour afficher les erreurs d'authentification
const loading = ref(false) // Pour gérer le statut de chargement
const router = useRouter() // Pour la redirection après connexion réussie

// Calcul des états des champs pour la validation
const usernameState = computed(() => (username.value ? true : false))
const passwordState = computed(() => (password.value ? true : false))

// Fonction de soumission du formulaire
const handleSubmit = async () => {
  if (!username.value || !password.value) {
    error.value = 'Username et mot de passe sont requis!'
    return
  }

  loading.value = true
  error.value = null

  try {
    // Requête POST à l'API pour se connecter
    const response = await axios.post('/login', {
      username: username.value,
      password: password.value
    })

    // Enregistrer le token JWT dans le localStorage
    localStorage.setItem('token', response.data.token)

    // Rediriger l'utilisateur vers le dashboard ou une autre page protégée
    router.push('/dashboard')
  } catch (err) {
    // Gérer les erreurs de connexion
    error.value = err.response?.data?.message || 'Erreur de connexion, veuillez réessayer.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f7fc;
}

.login-card {
  width: 100%;
  max-width: 400px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.mt-3 {
  margin-top: 1rem;
}
</style>
