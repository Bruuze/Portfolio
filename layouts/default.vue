<template>
  <div>
  <loading />
  <nav class="nav responsive-padding">
    <div class="nav__wrapper">
      <ul class="nav__ul sematic-only">
        <li class="nav__li nav__logo">
          <nuxt-link to="/"> <Logo /> </nuxt-link>
        </li>
        <li class="nav__li nav__li--desktop-only">
          <nuxt-link to="/work/" class="nav__link-text" title="Work"> Work </nuxt-link>
        </li>
        <li class="nav__li nav__li--desktop-only">
          <nuxt-link to="/blog/" class="nav__link-text" title="Blog"> Blog </nuxt-link>
        </li>
      </ul>
      <ul class="nav__ul sematic-only">
        <li class="nav__li nav__li--mobile-only">
          <div class="bodymovinanim" unselectable="on"></div>
        </li>
      </ul>
    </div>

    <div class="nav__menu">

      <div class="nav__menu__top">

        <ul class="sematic-only">

          <li>
          <nuxt-link to="/work/"> Work </nuxt-link>
        </li>

        <li>
          <nuxt-link to="/blog/"> Blog </nuxt-link>
        </li>

        </ul>

      </div>

    </div>
  </nav>

    <Nuxt />

  </div>
</template>


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
  head: {
    script: [
      {
        src: 'https://identity.netlify.com/v1/netlify-identity-widget.js'
      }
    ]
  }
}

    

</script>