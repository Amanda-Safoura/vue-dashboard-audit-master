<template>
  <nav class="navbar">
    <div class="container">
      <router-link to="/" class="brand">Audit App</router-link>
      <ul class="nav-links">
        <li><router-link to="/audits">Mes Audits</router-link></li>
        <li><button @click="logout">Déconnexion</button></li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { authService } from '../api/authService'

export default {
  methods: {
    async logout() {
      await authService.logout()
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.navbar {
  background: #333;
  color: white;
  padding: 1rem;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-links {
  list-style: none;
  display: flex;
}
.nav-links li {
  margin-left: 20px;
}
.nav-links a,
.nav-links button {
  color: white;
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
}
</style>
