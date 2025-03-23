<template>
  <BNavbar toggleable="lg" type="dark" variant="dark">
    <BContainer>
      <BNavbarBrand to="/">Audit App</BNavbarBrand>

      <BNavbarToggle target="nav-collapse" />
      <BCollapse id="nav-collapse" is-nav>
        <BNavbarNav class="ms-auto">
          <BNavItem to="/audits">Mes Audits</BNavItem>
          <BNavItem>
            <BButton variant="danger" @click="logout"> <i class="bi bi-box-arrow-right"></i> Déconnexion </BButton>
          </BNavItem>
        </BNavbarNav>
      </BCollapse>
    </BContainer>
  </BNavbar>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { BNavbar, BNavbarBrand, BNavbarNav, BNavItem, BButton, BContainer, BNavbarToggle, BCollapse } from 'bootstrap-vue-next'

const router = useRouter()

const logout = () => {
  localStorage.removeItem('token')
  router.push('/login')
}
</script>

<style scoped>
.bi-box-arrow-right {
  margin-right: 5px;
}
</style>
