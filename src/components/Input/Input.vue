<template>
  <input 
    :type="type"
    :value="value"
    :placeholder="placeholder"
    @input="$emit('input', $event.target.value)"
    class="input"
  >
</template>

<script>
  export default {
    props: ['type', 'value', 'placeholder']
  }
</script>

<style scoped lang="scss">

@import '../../styles/global';

  .input {
    margin: $metrics-xs 0;
    padding: $metrics-s;
    width: 30%;
  }
</style>
