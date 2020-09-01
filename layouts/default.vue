<template>
  <div>
  <div>
    <ul>
      <li>
        <nuxt-link to="/"> Home </nuxt-link>
        <nuxt-link to="/blog"> Blog </nuxt-link>
        <div class="bodymovinanim"></div>
      </li>
    </ul>
  </div>
    <Nuxt />
  </div>
</template>

<style>
.bodymovinanim {
    width: 90%;
    max-width: 50px;
    margin-bottom: 30px;
    cursor: pointer;
  }

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
if (process.client) {
  let iconMenu = document.querySelector('.bodymovinanim');

    let animationMenu = bodymovin.loadAnimation({
            container: iconMenu,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: "/burger.json"
    });

    var directionMenu = 1;
      iconMenu.addEventListener('click', (e) => {
      animationMenu.setDirection(directionMenu);
      animationMenu.play();
      directionMenu = -directionMenu;
    });
}

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