<template>
    <ShowCasePoem :poem="getPoem" 
    @print="(print) => addPrint(print)"/>
 
</template>

<script setup>
import {  onBeforeMount, computed } from 'vue';
import {useRoute } from 'vue-router';
import { usePoemStore } from "../stores/poems";
import { usePrintsStore } from "../stores/prints";
import ShowCasePoem from "../components/ShowCasePoem.vue";

const printsStore = usePrintsStore();
const getPrints = computed(() => {
  return printsStore.getPrints
})

function addPrint(print) {
  if (!getPrints.value.includes(print)) {
    return printsStore.addPrint(print)
  }
}

const route = useRoute();

const poemStore = usePoemStore();
const getPoem = computed(() => {
  return poemStore.getPoem
})
onBeforeMount(() => {
  poemStore.fetchPoem(route.params.id);
})

</script>

<style lang="scss" scoped>
</style>