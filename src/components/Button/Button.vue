<template>
  <button
    type="submit"
    :class="['button', 'buttonClass']"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
  export default {
    props: {
      buttonClass: String,
    }
  }
</script>

<style scoped lang="scss">
  .button {
    display: inline-block;
    cursor: pointer;
    transition: 0.3s;
    outline: none;
  }
</style>
