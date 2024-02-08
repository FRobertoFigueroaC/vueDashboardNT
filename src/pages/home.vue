<script setup lang="ts">
import CardExample from '../ao/card.vue'
import Nav from '@/components/shared/nav.vue'
</script>

<template>
  <div class="w-full h-screen flex flex-col bg-gradient-to-br from-indigo-50 via-indigo-200 to-purple-300">
    <Nav />
    <div class="m-auto w-[500px]">
      <CardExample title="Home" description="Ola" />
    </div>
  </div>
</template>
