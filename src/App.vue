<script setup>
import { ref, reactive } from 'vue'
const title = ref('Vue.js Course')
let price = ref(9.99)
function increment() {
  price.value += 1
  instructor.age += 1
  instructor.bio = 'hi'
  instructor.sns.twitter = 'hello'
  instructor.email = ref('hellooo')
}
const info = ref({
  students: 1000,
  rating: 4
})
const instructor = reactive({
  name: 'Natsuki',
  age: 25,
  sns: {
    twitter: '@abc',
    youtube: '@abc',
  },
  email: ref('abc@abc.com')
})
instructor.bio = 'hello'
const items = reactive([ref(1), ref(2), ref(3)])
items.reverse()
const courseInfo = {
  sections: ref(10),
  language: ref('Japanese')
}
const sections = courseInfo.sections
console.log(courseInfo.sections.value)
</script>
<template>
  <h1>Title: {{ title }}</h1>
  <h2>Price: ${{ price - 1 }}</h2>
  <button @click="increment">button</button>
  <h2>Students: {{ info.students }}</h2>
  <h2>Instructor age: {{ instructor.age }}</h2>
  <h2>Instructor bio: {{ instructor.bio }}</h2>
  <h2>Instructor Twitter: {{ instructor.sns.twitter }}</h2>
  <h2>Instructor email: {{ instructor.email }}</h2>
  <h2>Course Info Sections: {{ sections + 3 }}</h2>
</template>
