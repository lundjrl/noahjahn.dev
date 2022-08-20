<template>
  <p>$ {{ text }}|</p>
</template>

<script setup lang="ts">
defineProps<{
  text: string;
}>();
// const aText = [
//   'There are only 10 types of people in the world:',
//   'Those who understand binary, and those who don\'t',
// ];
// const iSpeed = 100; // time delay of print out
// const iIndex = 0; // start printing array at this posision
// const iArrLength = aText[0].length; // the length of the text array
// const iScrollAt = 20; // start scrolling up at this many lines

// const iTextPos = 0; // initialise text position
// const sContents = ''; // initialise contents variable
// let iRow; // initialise current row

function type(text: string) {
  console.log(text);
  // sContents = ' ';
  // iRow = Math.max(0, iIndex - iScrollAt);
  // const destination = document.getElementById('typedtext');

  // while (iRow < iIndex) {
  //   sContents += `${aText[iRow += 1]}<br />`;
  // }
  // destination.innerHTML = `${sContents + aText[iIndex].substring(0, iTextPos)}_`;
  // // eslint-disable-next-line no-plusplus
  // if (iTextPos++ === iArrLength) {
  //   iTextPos = 0;
  //   iIndex += 1;
  //   if (iIndex !== aText.length) {
  //     iArrLength = aText[iIndex].length;
  //     setTimeout(typewriter, 500);
  //   }
  // } else {
  //   setTimeout(typewriter, iSpeed);
  // }
}

// export default {
//   name: 'TerminalText',
//   props: {
//     text: String,
//   },
//   data: (instance) => {
//     type(instance.text);
//   },
//   methods: {
//     type,
//   },
// };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
p {
  width: 100%;
  margin: 0.2em 0 0.2em 0;
}
</style>
