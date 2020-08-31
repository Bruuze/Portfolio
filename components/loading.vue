<template lang="html">
  <div v-if="loading">
    <lottie-player src="https://assets4.lottiefiles.com/private_files/lf30_PHmUt4.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player>
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
  .loading-page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding-top: 200px;
    font-size: 30px;
    font-family: sans-serif;
  }
</style>