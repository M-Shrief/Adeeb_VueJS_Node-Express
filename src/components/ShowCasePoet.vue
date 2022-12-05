<template>
    <div v-if="details" class="poetry-item poet" dir="rtl">
      <h2>{{details.name}} - {{details.time_period}}</h2>
      <p class="bio">{{details.bio}}</p>
    </div>
</template>

<script setup>
defineProps({
  details: {
    type: Object,
    required: true
  }
})
</script>
<style lang="scss" scoped>
.poetry-item {
  position: relative;
  background: #FBE6C2;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
  border-radius: 15px;
  border: 1px solid #e0f2e9;
  padding: 0.7rem;
  margin: 0.7rem 0.3rem;
  color: #fff;
  overflow: visible;
  
}
.poet{
  color: #000;
  font-weight: 500;
  .bio {
    font-size: 1.2rem;
  }
}
</style>