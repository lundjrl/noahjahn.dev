<template>
  <div class="terminal">
    <TerminalText text="Hello"/>
    <TerminalText text="My name is Noah Jahn"/>
    <TerminalText text="I'm a Software Developer"/>
    <TerminalText
      text="I build intuitive software and systems to solve
      problems and make humans more efficient."
    />
    <TerminalText text="I enjoy exploring the world with my Wife and playing video games"/>
    <TerminalText text="This is a terminal about me. Type `help` to begin"/>
    <TerminalText text="Or if you'd like an interface, type `gui`"/>
    <TerminalInput />
  </div>
</template>

<script>
import TerminalText from './TerminalText.vue';
import TerminalInput from './TerminalInput.vue';

export default {
  name: 'Terminal',
  components: {
    TerminalText,
    TerminalInput,
  },
};
</script>

<style scoped lang="scss">
  .terminal {
    max-height: 60vh;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    border: 0.5px solid black;
    border-radius: 7px;
    padding: 0.5rem;
    box-shadow: 2px 2px 10px black;
    display: block;
    position: absolute;
    // bottom: 0;
    top: 45%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  .terminal::-webkit-scrollbar {
    display: none;
  }
</style>
