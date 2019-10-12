<template>
  <div class="socialWrapper">
    <button 
      v-for="button in buttons" 
      :key="button.name" 
      @click="$emit('socialLogin', button.name)"
      class="socialButton"
      >
      <img 
        :alt="button.name" 
        :src="button.asset"  
        class="socialIcon"
      />
    </button>
  </div>
</template>

<script>
import google from '@/assets/google.png';
import facebook from '@/assets/facebook.png';
import github from '@/assets/github.png';

  export default {
    name: 'socialButtons',
    computed: {
      buttons() {
        return [
          {
            name: 'Google',
            asset: google
          },
          {
            name: 'Facebook',
            asset: facebook
          }, 
          {
            name: 'Github',
            asset: github
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../styles/global';
  .socialWrapper {
    display:flex;
    justify-content: center;
    width: 60%;
  }

  .socialButton {
    display: block;
    background:transparent;
    background-color: $white-color;
    border: none;
    cursor: pointer;
  }

  .socialIcon {
    width: $metrics-m;
    height: $metrics-m;
    margin: $metrics-m;
  }

</style>
