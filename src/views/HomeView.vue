<template>
  <main>
    <button class="bg-blue-500 px-4 py-2 rounded-md" @click="toLogin">
      Login
    </button>
  </main>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const toLogin = () => router.push({ name: "test" });
</script>
