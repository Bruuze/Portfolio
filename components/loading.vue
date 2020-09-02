<template lang="html">
  <div>
    <div class="loading-page">
      <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_dO8Ir9.json"  background="transparent"  speed="1"  loop  autoplay></lottie-player>
    </div>
  </div>
</template>

<script>
  export default {
    head: {
    script: [
      {
        src: 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js'
      }
    ]
  }
  }
</script>

<style scoped>

  div{
    height: 0;
    width: 0;
    margin: 0;
    padding: 0;
  }
  .loading-page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #090915;
    text-align: center;
    font-size: 30px;
    font-family: sans-serif;
    animation-name: example;
    animation-duration: 4s;
    z-index: 9999;
  }

  .loading-page lottie-player{
    padding: 15%;
  }

  @keyframes example {
  80% {opacity: 1;}
  100% {opacity: 0;}
}
</style>