<template>
  <div>
    <h5 class="custom">
      <i>{{ label }}</i>
      <div class="switch">
        <div class="switch-circle"></div>
      </div>
    </h5>
  </div>
</template>

<script>
export default {
  name: 'Switch',
  props: {
    label: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.switch {
    background: var(--background);
    border: var(--background-dark);
    border-style: solid;
    border-radius: 50px;
    border-width: 2px;
    width: 36px;
    height: 16px;
    display: inline-flex
}

.switch .switch-circle {
    height: 14px;
    width: 14px;
    border-radius: 100%;
    background: var(--background-dark);
    margin-top: 1px;
    margin-left: 2px;
    -webkit-transition: all 200ms linear;
    -moz-transition: all 200ms linear;
    -o-transition: all 200ms linear;
    transition: all 200ms linear;
}

.switch.on {
    border: var(--primary);
    border: var(--primary);
    border-width: 2px;
    border-style: solid;
}

.switch.on .switch-circle {
    margin-left: 20px;
    height: 14px;
    width: 14px;
    border-radius: 100%;
    background: var(--primary);
    margin-right: 2px;
}
</style>
