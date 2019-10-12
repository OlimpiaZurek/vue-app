<template>
  <div class="login">
    <h3 class="title"> {{ $t('login-page.title') }}</h3>
    <Input
      v-model="email"
      type="text"
      :placeholder="$t('login-page.email')"
    />
    <Input
      type="password"
      v-model="password"
      :placeholder="$t('login-page.password')"
    />
      <Button 
        @click="login"
        buttonClass="buttonClass"
      >
        {{ $t('login-page.login') }}
      </Button>
    <p class="text">{{ $t('login-page.social-placeholder') }} </p>
    <SocialButtons 
      @socialLogin="socialLogin"
    />
    <p class="text">
      {{ $t('login-page.bottom-text') }}
      <router-link to="/sign-up">
        {{ $t('login-page.link-text') }}
      </router-link>
    </p>
  </div>
</template>

<script>
  import firebase from 'firebase/app';
  import 'firebase/auth'; 
  import Input from '@/components/Input/Input';
  import SocialButtons from '@/components/SocialButtons/SocialButtons';
  import Button from '@/components/Button/Button';
  
  export default {
    name: 'login',
    components: {
      SocialButtons,
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
      login: function () {
        const user = {
          email: this.email,
          password: this.password
        };
        this.$store.dispatch('auth/signInAction', user);
      },
      socialLogin(provider) {
        this.$store.dispatch('auth/signInWithSocialAction', provider);
      }

    }
  }
</script>

<style scoped lang="scss"> 
  @import '../../styles/global';

  .login {
    @extend .centeredElement;
    @extend .centeredParentElement;
  }

  .title {
    padding-bottom: $metrics-xs;
  }

  .buttonClass {
    @extend .btn;
  }
  .text {
    margin-top: $metrics-l;
    font-size: 1em;

    a {
      cursor: pointer;
       text-decoration: none;
       color: $button-color;
       font-weight: 700;
    }
  }
</style>
