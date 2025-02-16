<script setup>
import { ref } from 'vue'
const count = ref(2)
const count2 = ref(4)
const message = ref('<h1>Hello</h1>')
const vueURL = ref('https://vuejs.org')
const vueId = ref('vue-link')
</script>
<template>
  <div>{{ count + count2 }}</div>
  <div>{{ count > 3 ? 'Yes' : 'No' }}</div>
  <div v-text="count"></div>
  <!-- v-htmlは悪意のあるユーザーにhtmlを書き換えられてしまう可能性があるのでユーザーから送られてきたデータには使用しない(XSS攻撃対策) -->
  <div v-html="message"></div>
  <a :id="vueId" :href="vueURL">Vue.js</a>
  <a v-bind="{id: vueId, href: vueURL }">Vue.js</a>
  <button :disabled="true">button</button>
</template>
