<template>
  <div class="sign-up">
    <p class="text">{{ $t('sign-up.title') }}</p>
    <Input
      v-model="email"
      type="text"
      :placeholder="$t('sign-up.password')"
    />
    <br>
    <Input
      type="password" 
      v-model="password" 
      :placeholder="$t('sign-up.password')"
    />
    <br>
    <Button 
      @click="signUp"
      buttonClass="buttonClass"
    >
      {{ $t('sign-up.sign-up') }}
    </Button>
    <span class="text">
      {{ $t('sign-up.bottom-text') }}
      <router-link to="/login">{{ $t('sign-up.link-text') }}</router-link>
    </span>
  </div>
</template>

<script>
  import Input from '@/components/Input/Input';
  import Button from '@/components/Button/Button';

  export default {
    name: 'signUp',
    components: {
      Input,
      Button
    },
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      signUp: function () {
        const user = {
          email: this.email,
          password: this.password
        };
        this.$store.dispatch('auth/signUpAction', user);
      }
    }
  }
</script>

<style scoped lang="scss"> 
  @import '../../styles/global';
  .sign-up {
    margin-top: $metrics-l;
    font-size: 1em;
    @extend .centeredElement;
    @extend .centeredParentElement;
  }

  .buttonClass {
    @extend .btn;
  }

  .text {
    display: block;
    margin: $metrics-m 0;
     a {
       cursor: pointer;
       text-decoration: none;
       color: $button-color;
       font-weight: 700;
     }
  }
</style>
