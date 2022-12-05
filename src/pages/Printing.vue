<template> 
  <div id="printing" dir="rtl">
    <div id="prints" >
      <h3>المختار للطباعة</h3>
        <div v-for="print in getPrints" :key="print._id" class="print-item" @click="preview = print.verse || print">
          <div  v-if="print.verse"  v-for="verse in print.verse" :key="verse._id" class="verse"  >
            <p >{{verse.first}}</p>
            <p  dir="ltr" >{{verse.sec}}</p>
          </div>
          <div v-else  class="verse" >
            <p >{{print.first}}</p>
            <p  dir="ltr" >{{print.sec}}</p>
          </div>
        </div>
    </div>
    <div id="prints-preview">
      <h3>عرض الطباعة</h3>
      <div id="preview" >
        <div v-for="print in preview" :key="print._id" class="verse">
          <p >{{print.first}}</p>
          <p >{{print.sec}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { usePrintsStore } from "../stores/prints";
import {  computed, ref } from 'vue';

let preview = ref([]);
const printsStore = usePrintsStore();
const getPrints = computed(() => {
  return printsStore.getPrints
})
</script>

<style lang="scss" >
  #printing {
    // position: relative;
    display: grid;
    grid-template-columns: 30% 70%;
    #prints {
      background: #1f2124;
      color: #f6b352;
      margin-top: 1rem;
      .print-item {
        border: 1px solid #f6b352;
        list-style: none;
        border-radius: 5px;
        padding: 0.5rem;
        margin: 0.5rem;
        .verse {
          justify-content: center;
          align-items: center; 
        }
      }
    }
    #prints-preview {
      color: #1f2124;
      #preview {
        height: 50vh;
        background: url("../assets/images/shirt.webp") no-repeat right center/contain;

      }
    }
  }
</style>