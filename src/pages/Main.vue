<template>
  <h3>{{msg}}</h3>
  <div  dir="rtl" id="showcase-poetry"> 
    <!-- 7grid 5 for poetry:2 for prose  3 chosenVerses: 1 prose -->
      <ShowCasePoetry :chosenVerses="getChosenVerses"       
      @print="(print) => addPrint(print)"/>
      <h1>النثر</h1>
  </div>
  
</template>

<script setup>
import {  onMounted, computed, ref } from 'vue';
import { useChosenVerseStore } from "../stores/chosenVerses";
import { usePrintsStore } from "../stores/prints";
import ShowCasePoetry from '../components/ShowCasePoetry.vue';

const msg = ref("Welcome to my Pinia Store");

const printsStore = usePrintsStore();
const getPrints = computed(() => {
  return printsStore.getPrints
})
function addPrint(print) {
  if (!getPrints.value.includes(print)) {
    return printsStore.addPrint(print)
  }
}

const chosenVersesStore = useChosenVerseStore();
const getChosenVerses = computed(() => {
  return chosenVersesStore.getChosenVerses
})

onMounted(() => {
  chosenVersesStore.fetchChosenVerses();
})
</script>

<style lang="scss" scoped>
#showcase-poetry {
    display: grid;
    grid-template-columns: 70% 30%;
  }
</style>