<template>
  <div class="main-container">
    <h1>Faça seu pedido: </h1>
    <PizzaForm/>
  </div>
</template>

<script>
import PizzaForm from '../components/PizzaForm.vue'

export default {
  name: "Pedir",
  components:{
    PizzaForm
  }
}
</script>
