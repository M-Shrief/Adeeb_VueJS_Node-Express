<template>
  <!-- Navigation Raws -->
  <nav id="nav-raw" dir="rtl">
    <!-- <a href="#" id="logo">المتنبي</a> -->
    <router-link to="/" id="logo">أديب</router-link>

    <div>
      <NavItem  :href="'/printing'"  >الطباعة</NavItem>
      <NavItem  :href="'/about'">قصتنا</NavItem>
      <NavItem  :href="'/partners'" >كن شريكا</NavItem>
    </div>
  </nav>
</template>

<script setup>
  import NavItem from './NavItem.vue'

</script>
<style lang="scss" scoped>
  #nav-raw {
    display: flex;
    flex-direction: row;
    background-color: #1f2124;
    justify-content: space-between;
    align-items: center;
      #logo {
        color: rgba($color: #d0342b, $alpha: .8);
        text-decoration: none;
        font-size: 1.4rem;
        font-weight: 700;
        padding: 0.2rem 0.4rem;
        margin: 0.4rem;
        &:hover {
          color: #d0342b;
        }
      }
  }
</style>