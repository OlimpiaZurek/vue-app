<template>
  <div class="dashboard">
     {{ $t('dashboard-page.title') }}
  </div>
</template>

<script>
  export default {
    name: 'dashboard'
  }
</script>

<style scoped lang="scss">
   @import '../../styles/global';
   
   .dashboard {
      @extend .centeredElement;
      height: 100%;
      width: 100%;
   }
</style>
