<template>
  <div class="home">
    <img 
      :src="budgetIcon" 
      alt="budget" 
      width="120px" 
      height="120px"
    >
    <p class="text">
      {{ $t('home-page.go-to') }}
      <router-link to='dashboard'>
        {{ $t('home-page.link') }}
      </router-link>
    </p>
  </div>
</template>

<script>
  import budgetIcon from '@/assets/budget.png';

  export default {
    name: 'homePage',
    data: function(){
      return {
        budgetIcon
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../styles/global';

  .home {
    @extend .centeredElement;
    height: 100%;
    width: 100%;
    font-size: 1.2em;
  }

  .text {
    padding: $metrics-m;
    a {
      text-decoration: none;
      color: $button-color;
    }
  }
  
</style>
