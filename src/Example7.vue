<script setup>
import { ref, watchEffect, watch } from 'vue';
const count1 = ref(0)
const count2 = ref(0)
const count3 = ref({
  a:0
})
//監視対象を明示的にしたいときや限定したいときにwatchを使う
//newValueとoldValueが同じ値のときは第二引数の関数は実行されない
// watch(count1, (newValue, oldValue) => {
//   console.log('watch')
//   console.log('newValue', newValue)
//   console.log('oldValue' , oldValue)
// })
// watch(() => {
//   console.log('watch first argument')
//   return count1.value + count2.value
// },
// (newValue, oldValue) => {
//   console.log('watch')
//   console.log('newValue', newValue)
//   console.log('oldValue' , oldValue)
// })
// watch([count1, count2], (newValue, oldValue) => {
//   console.log('watch')
//   console.log('newValue', newValue)
//   console.log('oldValue' , oldValue)
// })
//第二引数は監視する値が更新されたタイミングで実行される
watch(
  () => {
    console.log('watch first argument')
    return count3.value.a
  },
  (newValue, oldValue) => {
  console.log('watch')
  console.log('newValue', newValue)
  console.log('oldValue' , oldValue)
},
//immediateを第三引数につけるとすぐに実行される
{
  immediate: true
})
// watchEffect(() => {
//   console.log('watchEffect')
//   console.log(count.value)
//   setTimeout(() => {
//     console.log('after 1 sec')
//   }, 1000)
//   count.value = 'hello'
// })
</script>
<template>
  <p>{{ count1 }}(count1)</p>
  <p>{{ count2 }}(count2)</p>
  <p>{{ count3 }}(count3)</p>
  <button @click="count1++">count1++</button>
  <button @click="count2++">count2++</button>
  <button @click="count3.a++">count3++</button>
</template>
