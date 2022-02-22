<template>
  <Navbar :logo="logo_src" :alt="app_name"/>
  <router-view/>
  <Footer/>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  components:{
    Navbar, 
    Footer
  },
  data(){
    return{
        logo_src: '/img/logo.png',
        app_name: 'A Pizzaria'
    }
  }
}

</script>

<style>
  *{
    font-family: Helvetica;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  a{
    font-size: 18px;
  }
  .main-container{
    margin: 50px;
    min-height: 375px;
  }
  h1{
    font-size: 42px;
    margin-bottom: 30px;
    color: #202020
  }
</style>
