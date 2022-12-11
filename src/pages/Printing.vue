<template> 
  <div id="printing" dir="rtl">
    <div id="prints" >
      <h3>المختار للطباعة</h3>
        <div v-for="print in getPrints" :key="print._id" class="print-item" >
          <div @click="preview = print.verse || print">
            <!-- if selected from ShowCasePoetry -->
            <div  v-if="print.verse"  v-for="verse in print.verse" :key="verse._id" class="verse"  >
              <p >{{verse.first}}</p>
              <p  dir="ltr" >{{verse.sec}}</p>
            </div>
            <!-- if selected from  ShowCasePoem -->
            <div v-else  class="verse" >
              <p >{{print.first}}</p>
              <p  dir="ltr" >{{print.sec}}</p>
            </div>
          </div>
          <button @click="(print) => deletePrint(print)">X</button>
        </div>
    </div>
    <div id="prints-preview">
      <h3>اختر من الاشعار للطباعة</h3>
      <div id="preview" >
        <div id="selecting-colors" >
          <PrintingColors :colors="fontColors" @to-color="(color) => fontColor = color" >الخط: </PrintingColors>
          <PrintingColors :colors="backgroundColors" @to-color="(color) => backgroundColor = color ">الخلفية: </PrintingColors>
        </div>
        <div  v-for="print in preview" :key="print._id" :style="{color: fontColor, background: backgroundColor}" class="verse" >
          <p >{{print.first}}</p>
          <p dir="ltr">{{print.sec}}</p>
        </div>        
      </div>
    </div>
  </div>
</template>
<script setup>
import { usePrintsStore } from "../stores/prints";
import {  computed, ref } from 'vue';
import PrintingColors from "../components/PrintingColors.vue";

let preview = ref([]);
let fontColors = ref(['#f6b352', '#f66152','#2c3e50','#42b983','#D5DBB3','#17BEBB','#dc5318','#c80815']);
let backgroundColors = ref(['url("../assets/images/Temp.png")', '#1f2124','#f6b352', '#f66152', '#d0342b','#2c3e50','#42b983','#D5DBB3','#002626', '#e4d5b7']);
let fontColor = ref('');
let backgroundColor = ref('');

const printsStore = usePrintsStore();
const getPrints = computed(() => {
  return printsStore.getPrints
})

function deletePrint(print) {
  let printIndex = getPrints.value.map(verse => verse._id).indexOf(print._id);
  getPrints.value.splice(printIndex, 1);
}

</script>

<style lang="scss" >
  #printing {
    display: grid;
    grid-template-columns: 30% 70%;
    h3 {
      text-align: center;
    }
    #prints {
      background: #1f2124;
      color: #f6b352;
      margin-top: 1rem;
      .print-item {
        position: relative;
        border: 1px solid #f6b352;
        list-style: none;
        border-radius: 5px;
        padding: 0.5rem;
        margin: 0.5rem;
        .verse {
          justify-content: center;
          align-items: center; 
        }
        button {
          position: absolute;
          color: #fff;
          padding: 0.4rem;
          left: 0.2rem;
          top: 0.2rem;
          background: none;
          border: none;
          cursor: pointer;
          background: #2c3e50;
        }
      }
    }
    #prints-preview {
      #preview {
        width: 70%;
        margin: 0 auto;
        background: url("../assets/images/Temp.png") no-repeat center center/cover;
        .verse {
          padding: 0.4rem;
          font-size: 1.6rem;
          color: #f6b352;
        }
      }
      #selecting-colors {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        padding: 0.3rem;
        color: #fff;
        // .colors {
        //   display: flex;
        //   flex-direction: row;
        //   justify-content: space-around;
        //   align-items: center;
        //   .color {
        //   padding: 0.5rem;
        //   margin: 0.3rem;
        //   border: 1px solid #fff;
        //     &:hover {
        //       padding: 0.6rem;
        //     }
        //   }
        // }
      }
    }
  }
</style>