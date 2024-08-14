<script setup>
import { onMounted, ref } from "vue";

let emailList = ref([]);

onMounted(() => {
  fetch("http://localhost:8000/api/list")
    .then((response) => response.json())
    .then((data) => emailList.value = data);
});
</script>
<template>
  <h3 class="text-white text-xl">List of Subscribers</h3>
  <ol class="list-decimal">
    <li v-for="(item, index) in emailList" :key="index" class="text-sm text-white">
      {{ item.email }}
    </li>
  </ol>
</template>
