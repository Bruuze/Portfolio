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
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body{
    background-color: darkgrey;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
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

.spinner{
    width: 80px;
    height: 80px;

    border: 4px solid #f3f3f3;
    border-top:5px solid #FF7CD7;
    border-radius: 100%;

    position: absolute;
    top:0;
    bottom:0;
    left:0;
    right: 0;
    margin: auto;

    animation: spin 1s infinite linear;
}

@keyframes spin {
    from{
        transform: rotate(0deg);
    }to{
         transform: rotate(360deg);
     }
}

#overlay{
    height:100%;
    width:100%;
    background:#090915;
    position:fixed;
    left:0;
    top:0;
    z-index:9999;
    transition: .5s;
    opacity: 1;
}
</style>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
    var overlay = document.getElementById("overlay");

    window.addEventListener('load', function(){
        overlay.style.opacity= '0';
        overlay.style.zIndex= '-9999';
    })
  },
  loading: { color: '#FF7CD7'},

  head: {
    script: [
      {
        src: 'https://identity.netlify.com/v1/netlify-identity-widget.js'
      }
    ]
  }
}

    

</script>