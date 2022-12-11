<template>
  <div class="poetry-container">
    <div v-for="chosenVerse in chosenVerses" :key="chosenVerse._id" class="poetry-item">
      <div v-for="verse in chosenVerse.verse" :key="verse._id" class="verse" :class="chosenVerse.verse.length == 1 ? 'one-verse': 'two-verse'">
        <p class="first">{{verse.first}}</p>
        <p class="sec" dir="ltr">{{verse.sec}}</p>
      </div> 
      <div class="justify">
        <router-link :to="'/poem/' + chosenVerse.poem" class="verse-details">{{route.name == "poet" ? 'القصيدة الكاملة' : chosenVerse.poet.name + ' - القصيدة الكاملة'}}</router-link>
        <button @click="$emit('print', chosenVerse)" class="print-button">اضف للطباعة</button>
        <!-- make a toggle to remove -->
      </div>
    </div>
  </div>
</template>

<script setup>
import {useRoute } from 'vue-router';
const route = useRoute();

defineProps({
    chosenVerses: {
      type: Array,
      required: true
    }
  })
const emit = defineEmits(['print']);

</script>

<style lang="scss" scoped>
  .poetry-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  .poetry-item {
    position: relative;
    background: #eed9c4;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
    border-radius: 15px;
    border: 1px solid #e0f2e9;
    padding: 0.3rem;
    margin: 0.05rem;
    background: #1f2124;
    color: #f6b352;
    .verse {
      justify-content: center;
      align-items: center; 
      margin: auto 0;
    }
    .verse-details {
      text-decoration: none;
      color: #f6b352;
      &:hover {
        font-weight: 600;
      }
    }
    .one-verse {
      font-size: 1.1rem;
      padding-top: 1rem;
      font-weight:400;

      .first {
        margin-right: 0.4rem;
      }
      .sec {
        margin-left: 0.4rem;
      }
    }
    .two-verse {
      font-size: 1rem;
      font-weight: 600;
      .first {
        margin-right: 0.4rem;
        // margin-bottom: 0.2rem;
        // margin-top: 0.2rem;
      }
      .sec {
        margin-left: 0.4rem;
      }
    }
    .justify {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0.5rem 0.5rem 0;
    }
    .print-button {
      background: #1f2124;
      border: 1px solid #004e64;
      color: #17BEBB;
      padding: 0.1rem;
      font-weight: 500;
      cursor: pointer;
      &:hover {
        background: #17BEBB;
        color: #000;
      }
    }
    
  }
</style>