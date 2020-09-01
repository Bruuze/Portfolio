<template lang="html">
  <div v-if="loading">
    <div class="loading-page">
      <lottie-player src="https://assets4.lottiefiles.com/datafiles/HN7OcWNnoqje6iXIiZdWzKxvLIbfeCGTmvXmEm1h/data.json"  background="transparent"  speed="1"  loop  autoplay></lottie-player>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      loading: false
    }),
    methods: {
      start() {
        this.loading = true
      },
      finish() {
        this.loading = false
      }
    },
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
    background: #181525;
    text-align: center;
    font-size: 30px;
    font-family: sans-serif;
    animation-name: example;
    animation-duration: 4s;
  }

  .loading-page lottie-player{
    padding: 15%;
  }

  @keyframes example {
  75% {opacity: 1;}
  100% {opacity: 0;}
}
</style>