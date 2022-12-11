<template >
  <div v-if="getPoet" dir="rtl" class="container">
    <ShowCasePoet :details="getPoet.details"/>
    <div v-for="poem in getPoet.authoredPoems" :key="poem._id" class="poems">
      <router-link :to="'/poem/' + poem._id" class="poem" >{{poem.intro}} ...</router-link>
    </div>

    <ShowCasePoetry :chosen-verses="getPoet.authoredChosenVerses" dir="rtl"
      @print="(print) => addPrint(print)"/>

    <h2>النثر</h2>
  </div>

</template>

<script setup>
import { onMounted, computed } from 'vue';
import {useRoute } from 'vue-router';
import { usePoetStore } from "../stores/poets";
import { usePrintsStore } from "../stores/prints";
import ShowCasePoet from '../components/ShowCasePoet.vue';
import ShowCasePoetry from '../components/ShowCasePoetry.vue';

const printsStore = usePrintsStore();
const getPrints = computed(() => {
  return printsStore.getPrints
})

function addPrint(print) {
  if (!getPrints.value.includes(print)) {
    return printsStore.addPrint(print)
  }
}

const poetStore = usePoetStore();
const getPoet = computed(() => {
  return poetStore.getPoet
})
const route = useRoute();
onMounted(() => {
  poetStore.fetchPoet(route.params.id);
})

</script>

<style lang="scss" scoped>
  .container {
    display: grid;
    grid-template-columns: 70% 30%;
    border-radius: 15px;
    box-sizing: border-box;
    border: 1px solid #e0f2e9;
    padding: 0.7rem;
    margin: 0.7rem 0.3rem;
    // color: #fff;
    overflow: visible;
  }

  .poems {
    background: #FBE6C2;
    border-radius: 15px;
    box-sizing: border-box;
    border: 1px solid #e0f2e9;
    .poem {
      display: block;
      text-decoration: none;
      color: #000;
      border-bottom: 1px solid #004e64;
      box-sizing: border-box;
      // padding: 0.5rem;
      margin: 0.3rem 0 0.3rem 0;
      &:hover {
        font-weight: 600;
      }

    }
  }
  .chosen-verses-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    .chosen-verses {
      position: relative;
      background: #eed9c4;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
      border-radius: 15px;
      box-sizing: border-box;
      border: 1px solid #e0f2e9;
      padding: 0.3rem;
      margin: 0.5rem 0.3rem;
      .verse {
      justify-content: center;
      color: #000;
      align-items: center; 
      margin: auto 0;
    }
    .one-verse {
      font-size: 1.1rem;
      padding-top: 1rem;
      font-weight:400;

      .first {
        margin-right: 0.4rem;
        // padding-bottom: 0.8rem;
        
      }
      .sec {
        margin-right: 0.4rem;
        padding-top: 0.4rem;
        padding-bottom: 0.5rem;
      }
    }
    .two-verse {
      font-size: 1rem;
      font-weight: 600;

      .first {
        margin-right: 0.4rem;
      }
      .sec {
        margin-right: 0.4rem;

      }
    }
    }
  }
  
  
</style>