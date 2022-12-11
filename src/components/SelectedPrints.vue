<template>
  <div id="selected-prints">
    <p><router-link  to="/printing" class="title" >للطباعة</router-link> </p>
      <ul class="prints" >
        <li class="prints-item" v-for="print in getPrints" :key="print._id">
          <p class="prints-item-p" v-if="print.verse" >{{print.verse[0].first}}..</p> 
          <p class="prints-item-p" v-else >{{print.first}}..</p> 
        </li>
      </ul>
  </div>
</template>

<script setup>
import { usePrintsStore } from "../stores/prints";
import {  computed } from 'vue';

// const itemIndex = computed(() => {getPrints.findIndex((print) => print._id == _id)})
const printsStore = usePrintsStore();
const getPrints = computed(() => {
  return printsStore.getPrints
})
</script>

<style lang="scss" scoped>
  #selected-prints{
    position: fixed;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    background: #1f2124;
    padding: 0.3rem 0.7rem;
    .title {
      margin-left: 0.3rem;
      font-weight: 600;
      color: #17BEBB;
      text-decoration: none;
    }
    .prints {
      display: flex;
      flex-direction: row;
      list-style: none;
      .prints-item {
        padding: 0.2rem;
        margin-left: 0.3rem;
        background: #17BEBB;
        color: #1f2124;
        cursor: pointer;
        .prints-item-p {
          display: none;
          padding: 0.25rem;
        }
        &:hover {
          .prints-item-p {
            display: inline;
            padding: 0rem;  
          }
        }
      }
    }
  }
</style>