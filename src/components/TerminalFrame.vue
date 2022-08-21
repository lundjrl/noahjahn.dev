<template>
  <div
    class="border border-solid border-stone-800 rounded-lg p-1 max-h-72 overflow-y-scroll scrollbar-w-none shadow-md shadow-black"
  >
    <TerminalText text="Hello" />
    <TerminalText text="My name is Noah Jahn" />
    <TerminalText text="I'm a Software Developer" />
    <TerminalText
      text="I build intuitive software and systems to solve
      problems and make humans more efficient."
    />
    <TerminalText
      text="I enjoy exploring the world with my Wife and playing video games"
    />
    <TerminalText text="This is a terminal about me. Type `help` to begin" />
    <TerminalText text="Or if you'd like an interface, type `gui`" />
    <TerminalInput />
  </div>
</template>

<script setup lang="ts">
import TerminalText from './TerminalText.vue';
import TerminalInput from './TerminalInput.vue';
</script>

<style scoped lang="scss">
.scrollbar-w-none {
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
