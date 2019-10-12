<template>
  <div 
    v-if="userLoggedIn"
    class="navbar"
  >
    <router-link
      v-for="item in items"
      :key="item.title"
      :to="`${item.link}`"
      class="link"
    >
      {{item.title}}
    </router-link>
    <Button 
      @click="logout"
      buttonClass="buttonClass"
    >
      {{ $t('navigation-page.logout') }}
    </button>
  </div>
</template>

<script>
  import Button from '@/components/Button/Button';

  export default {
    name: 'navbar',
    components: {
      Button,
    },
    computed: {
      items() {
        return [
          {
            title: this.$i18n.t('navigation-page.home'),
            link: '/home',
          }, 
          {
            title: this.$i18n.t('navigation-page.dashboard'),
            link: '/dashboard',
          }
        ]
      },
      userLoggedIn () {
        return this.$store.getters['auth/user'];
      }
    },
    methods: {
      logout: function() {
        this.$store.dispatch('auth/signOutAction')
      }
    }
  }
</script>
<style scpoed lang="scss">
  @import '../../styles/global';

  .navbar {
    width: 100%;
    height: $metrics-l;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .link {
    text-decoration: none;
    color: $black-color;
    margin: $metrics-m;
  }
  .buttonClass {
    background-color: $button-color;
    color: $white-color;
    width: 15%;
    padding: $metrics-xs 0;
    border-radius: 3px;
    outline: none;
    font-size: 1em;
  }
</style>
