<template>
    <ShowCasePoem :poem="getPoem" 
      @print=" (print) => {
        if (!getPrints.includes(print)) {
          getPrints.push(print)
        }
      }"  
    />
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