<script setup>
import { ref,computed } from 'vue';
const score = ref(0)
function tmp() {
  return score.value > 3 ? 'Good' : 'Bad'
}
const evaluation = computed(() => {
  return score.value > 3 ? 'Good' : 'Bad'
})
const parentComp = computed(() => {
  console.log('parent computed')
  return evaluation.value
})
</script>
<template>
  <p>{{ score }}</p>
  <p>{{ score > 3 ? 'Good' : 'Bad' }}</p>
  <p>{{ parentComp }}</p>
  <!-- 関係がない再レンダリング毎に処理が走ってしまうためcomputedを使おう -->
  <p>{{ tmp() }}</p>
  <button @click="score++">+1</button>
</template>
