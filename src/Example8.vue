<script setup>
import { ref } from 'vue';
const isRed = ref(true)
const isBlue = ref(true)
const className = ref('red')
function toggleClass() {
  isRed.value = !isRed.value
  isBlue.value = !isBlue.value
}
</script>
<template>
  <div class="border" :class="{red: isRed, 'bg-blue': isBlue}">Hello</div>
  <div :class="[className, {'bg-blue': true}]">Hello</div>
  <button @click="toggleClass">toggle</button>
</template>
<style>
.red {
  color: red;
}
.bg-blue {
  background-color: blue;
}
.border {
  border: 1px solid black;
}
</style>
