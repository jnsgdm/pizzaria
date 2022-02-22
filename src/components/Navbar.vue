<template>
  <div id="nav">
    <router-link to="/" id="logo_url">
            <img :src="logo" :alt="alt" id="logo">
    </router-link>
    <router-link to="/Pedir">Pedir pizza</router-link> 
    <router-link to="/Status">Status pedidos</router-link>
  </div>
</template>

<script>

export default {
    name: "Navebar",
    props: ["logo","alt"]
}
</script>

<style scoped>

#nav{
      background-color: tomato;
      border-bottom: 4px solid #2000;
      padding: 15px 50px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    #nav #logo_url{
      margin: auto;
      margin-left: 0;
    }
    #logo{
      width: 45px;
      height: 45px;
    }
    #nav a{
      text-decoration: none;
      color: azure;
      margin: 12px;
      transition: .5s;
    }
    #nav a:hover{
        color: #222;
    }

</style>