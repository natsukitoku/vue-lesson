<script setup>
import { ref } from 'vue';
const count = ref(0)
</script>
<template>
  <p>{{ count }}</p>
  <div @click="count++">
    <button @click.stop>button</button>
    <a @click.prevent.stop href="https://vuejs.org">Vue.js</a>
  </div>
</template>
