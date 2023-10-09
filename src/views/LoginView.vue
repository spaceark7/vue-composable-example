<template>
  <div class="flex flex-column min-h-screen justify-content-center px-4 py-2 align-items-center">
    <!-- Logo -->
    <div class="flex flex-row gap-2 mb-4">
      <img class="w-2rem h-2rem" src="../assets/logo.svg" alt="logo" />
      <div>
        <h1 class="text-2xl">Vue 3 + PrimeVue</h1>
        <h3>Auth, Axios Fetching instance</h3>
      </div>
    </div>
    <!-- Login Form -->
    <div class="p-card card w-full md:w-4 p-3">
      <div class="flex flex-column gap-2">
        <label for="username">Username</label>
        <InputText id="username" v-model="username" aria-describedby="username-help" />
        <small v-show="true" id="username-help"></small>
      </div>
      <div class="flex flex-column gap-2 mt-3">
        <label for="password">Password</label>
        <Password
          input-class="w-full"
          v-model="password"
          toggleMask
          :feedback="false"
          :pt="{
            hideIcon: {
              style: 'top: 35%'
            },
            showIcon: {
              style: 'top: 35%'
            }
          }"
        />
        <small v-show="true" id="username-help"></small>
      </div>
      <div class="flex flex-column gap-2 mt-4">
        <Button label="Login" @click="Login(username, password)" />
        <Button text label="Forgot password?" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import { Login } from '@/services/auth-service/Login'
import { ref } from 'vue'

const username = ref('')
const password = ref('')
</script>

<style scoped></style>
