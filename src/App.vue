<template>
  <div>
    <Terminal />
  </div>
</template>

<script>
import Terminal from './components/Terminal.vue';

export default {
  name: 'App',
  components: {
    Terminal,
  },
};
</script>

<style lang="scss">
html {
  background-color: #151515;
  font-family: 'PT Mono', monospace;
  font-size: 28px;
  color: #E1E1E1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

#app {
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 50%;
  display: block;
  position: absolute;
  height: auto;
  bottom: 0;
  top :0;
  left:0;
  right:0;
}
</style>
