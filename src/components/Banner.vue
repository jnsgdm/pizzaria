<template>
  <div id="banner">
      <h1>A Pizzaria</h1>
  </div>
</template>

<script>

export default {
    name: "Banner"
}
</script>

<style scoped>

    #banner{
        background-image: url('/img/pizza.jpg');
        background-position: 0 -250px;
        background-size: cover;
        height: 500px;
        width: 100%;
        display: flex; 
        align-items: center;
            justify-content: flex-start;
    }

    #banner h1{
        color: azure;
        text-align: center;
        font-size: 60px;
        background: tomato;
        padding: 20px 40px;
    }

</style>