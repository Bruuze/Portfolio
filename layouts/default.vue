<template>
  <div>
  <div>
    <ul>
      <li>
        <a href="#">Home</a>
        <a href="#">Home</a>
        <a href="#">Home</a>
      </li>
    </ul>
  </div>
    <Nuxt />
  </div>
</template>

<style>
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-out .5s;
}
@keyframes bounce-in {
  0% { opacity: 0; 
        transform: translateY(200px);}
  100% { opacity: 1; 
        transform: translateY(0px);}
}
@keyframes bounce-out {
  0% { opacity: 1; }
  100% { opacity: 0; }
}
</style>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 4000)
    })
    var overlay = document.getElementById("overlay");

    window.addEventListener('load', function(){
        overlay.style.opacity= '0';
        overlay.style.zIndex= '-9999';
    })
  },

  head: {
    script: [
      {
        src: 'https://identity.netlify.com/v1/netlify-identity-widget.js'
      }
    ]
  }
}

    

</script>