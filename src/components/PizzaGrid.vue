<template>
    <div id="pizza-table">
        <h1>Pedidos:</h1>
      <div>
          <div id="table-head">
              <div class="orderId">N°</div>
              <div>Cliente</div>
              <div>Pizza</div>
              <div>Borda</div>
              <div class="acoes">Status</div>
          </div>
      </div>
      <div id="table-rows" >
        <div class="row" v-for="order in orders" :key="order.id" >
            <div class="orderId" >{{order.id}}</div>
                <div>{{order.nome}}</div>
                <div>{{order.sabor}}</div>
                <div>{{order.borda}}</div>
                <div class="acoes">
                    <select name="status" id="status">
                        <option value="">--</option>
                    </select>
                    <button class="delete-btn">Cancelar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PizzaGrid",
    data(){
        return{
            orders: null,
            status: []
        }
    },
    methods:{
        async getPizzas(){
            const req = await fetch("http://localhost:3000/orders");
            const res = await req.json();
  
            this.orders = res
            console.log(this.orders);

            //status
        }
    },
    mounted(){
        this.getPizzas();
    }
        
}
</script>

<style scoped>

    #pizza-table{
        max-width: 1100px;
        margin: 0 auto;
    }
    #table-head,
    #table-rows,
    .row{
        display: flex;
        flex-wrap: wrap;
    }
    #table-head{
        font-weight: bold;
        padding: 12px;
        border-bottom: 3px solid tomato; 
    }
    #table-head div,
    .row div{
        width: 20%;
    }
    .row{
        width: 100%;
        padding: 12px;
        border: 1px solid #2222
    }
    #table-head .orderId,
    .row .orderId{
        width: 5%;
    }
    select{
        padding: 4px;
        margin-right: 12px;
        width: 50%;
    }
    .delete-btn{
        background-color: tomato;
        color: azure;
        font-weight: bold;
        border: 2px solid tomato;
        padding: 10px;
        margin: 0 auto;
        cursor: pointer;
        transition: .5s;
    }
    .delete-btn:hover{
        background: azure;
        color: #222;
    }
    #table-head .acoes,
    .row .acoes{
        margin-left: 100px;
    }
</style>