<script setup>
  import { RouterView } from 'vue-router';
  import Navbar from './components/Navbar.vue';
  import Footer from './components/Footer.vue';
  import SelectedPrints from './components/SelectedPrints.vue';
  import {useRoute } from 'vue-router';

  const route = useRoute();
</script>

<template>
  <!-- <header> -->
    <Navbar />
  <!-- </header> -->
  <RouterView />
  <KeepAlive>
    <SelectedPrints dir="rtl" v-if="route.name != 'printing'"/> 
  </KeepAlive>
  <Footer />
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
