<template>
  <p>
    $ {{ text }}_
  </p>
</template>

<script>
export default {
  name: 'TerminalText',
  props: {
    text: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
p {
  width: 100%;
  margin: 0.2em 0 0.2em 0;
}
</style>
