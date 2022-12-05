<template>
  <!-- <a :href="href" class="nav-item">{{navTo}}</a> -->
  <router-link  :to="href" class="nav-item" ><slot /></router-link>

</template>

<script setup>
  defineProps({
    href: {
      type: String,
      required: false
    }
  })
</script>

<style lang="scss" scoped>
  .nav-item {
    padding: 0.2rem 0.4rem;
    margin: 0.4rem;
    border: 1px solid #004e64;
    color: #17BEBB;
    font-size: 1.2rem;
    text-decoration: none;
    &:hover {
      border: 2px solid #004e64;
    }
    .active {
      color: #fff;
    }
  }
</style>