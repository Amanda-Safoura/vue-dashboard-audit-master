<template>
  <div class="login-container">
    <h2>Connexion</h2>
    <form @submit.prevent="login">
      <label>Username</label>
      <input type="text" v-model="credentials.username" required />

      <label>Mot de passe</label>
      <input type="password" v-model="credentials.password" required />

      <button type="submit">Se connecter</button>
      <p v-if="error" class="error">{{ error }}</p>
    </form>
  </div>
</template>

<script>
import { authService } from '../api/authService'

export default {
  data() {
    return {
      credentials: { username: '', password: '' },
      error: ''
    }
  },
  methods: {
    async login() {
      try {
        const response = await authService.login(this.credentials)
        localStorage.setItem('token', response.data.token)
        this.$router.push('/audits')
      } catch (err) {
        this.error = 'Identifiants incorrects.'
      }
    }
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
}
</style>
