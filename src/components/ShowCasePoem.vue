<template>
  <div  v-if="poem" dir="rtl">

    <div class="poetry-item ">
      <router-link :to="'/poet/' + poem.poet._id" class="poet" >{{poem.poet.name}} - {{poem.poet.time_period}}</router-link>
      <p class="bio">{{poem.poet.bio}}</p>
    </div>
    <div class="poetry-item">
      <!-- TODO:
        onSelection style
      -->
      <div v-for="verse in poem.verses" :key="verse._id" class="verse"  @dblclick="$emit('print', verse)">
        <p class="first">{{verse.first}}</p>
        <p class="sec" dir="ltr">{{verse.sec}}</p>
      </div> 
    </div>
  </div>
</template>

<script setup>
 defineProps({
  poem: {
    type: Object,
    required: true
  }
});
defineEmits(['print']);
</script>

<style lang="scss" scoped>
.poetry-item {
  position: relative;
  background: rgba($color: #eed9c4, $alpha: 0.5);
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
  text-decoration: none;
  font-size: 1.6rem;
}
.bio {
  color: #000;
  font-size: 1.2rem;
}

.verse {
  font-size: 1.1rem;
  font-weight: 500;
  justify-content: center;
  color: #000;
  align-items: center;
  padding: 0.15rem;
  // padding-left: 0.2rem;
  .first {
    margin-right: 0.4rem;
  }
  .sec {
    margin-right: 0.4rem;

  }
  &:hover {
    font-size: 1.2rem;
    font-weight: 600;
  }
}
</style>