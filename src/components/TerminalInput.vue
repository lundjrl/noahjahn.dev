<template>
  <div>
    $ <input type="text">
  </div>
</template>

<script>
export default {
  name: 'TerminalInput',
  props: {
    text: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
input {
  font-size: 1rem;
  color: #E1E1E1;
  background: none;
  box-shadow: none;
  font-family: 'PT Mono', MONOSPACE;
  border: none;
  width: auto;
}

input:focus {
  border: none;
  box-shadow: none;
  outline: none;
}
</style>
