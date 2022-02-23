<template>
    <div>
        <div>
            <form id="pizza-form" @submit="postOrder($event)">
                <h1>Faça seu pedido</h1>
                <Mensage :msg="msg" v-show="msg"/>
                <div class="input-container">
                    <label class="title-label" for="nome">Nome cliente:</label>
                    <input type="text" id="nome" name="nome" v-model="nome" placeholder="Digite seu nome">
                </div>
                <div class="input-container">
                    <label class="title-label" for="sabor">Escolha o sabor:</label>
                    <select name="sabor" id="sabor" v-model="sabor">
                        <option value="">--</option>
                        <option v-for="sabor in sabores" :key="sabor.id" :value="sabor.sabor">
                            {{sabor.sabor}}
                        </option>
                    </select>
                </div>
                <div class="input-container">
                    <label class="title-label" id="borda-title" for="borda">Selecione o recheio da borda: </label>
                    <div id="radio-container" v-for="borda in bordas" :key="borda.id" :value="borda.tipo">
                        <input type="radio" name="txtsexo" :id="borda.id">
                        <label :for="borda.id">{{borda.tipo}}</label>
                    </div>
                </div>
                <div class="input-container">
                    <input type="submit" class="submit-btn" value="pedir uma pizza">
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import Mensage from '../components/Mensage.vue'

export default {
    name: "PizzaForm",
    data(){
        return{
            sabores: null,
            bordas: null,
            nome: null,
            sabor: null,
            borda: null,
            status: null,
            msg: null

        }
    },
    methods:{
        //consumo dos dados
        async getPizzas(){
            const req = await fetch("http://localhost:3000/pizzas");
            const res = await req.json();

            console.log(res)

            this.sabores = res.sabores;
            this.bordas = res.bordas;   
        },
        async postOrder(e){
            e.preventDefault();

            const order = {
                nome: this.nome,
                sabor: this.sabor,
                borda: this.borda,
                status: "Solicitado"
            }

            const orderJson = JSON.stringify(order)

            const req = await fetch("http://localhost:3000/orders",{
                method: "POST",
                headers: {"Content-type":"application/json"},
                body: orderJson
            });

            const res = await req.json();
            console.log(res);

            this.msg = `Pedido feito com sucesso, ${res.nome}!`;

            setTimeout(() => {
                this.msg = ''
            }, 3000);

            this.nome = '';
            this.sabor = '';
            this.borda = '';

        }
    },
    mounted(){
        this.getPizzas();
    },
    components:{
        Mensage
    }

}
</script>

<style scoped>
    #pizza-form{
        max-width: 400px;
        margin: 0 auto;
    }
    .input-container{
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }
    .title-label{
        font-weight: bold;
        margin-bottom: 15px;
        color: #222;
        padding: 5px 10px;
        border-left: 4px solid tomato;
    }
    input,select {
        padding: 5px 10px;
        width: 100%;
    }
    #radio-container{
        flex-direction: row;
        flex-wrap: wrap;
    }
    #borda-title{
        width: 100%;
    }
    #radio-container{
        display: flex;
        align-items: flex-start;
        width: 50%;
        margin-bottom: 20px;
    }
    #radio-container span,
    #radio-container input {
        width: auto;
    }
    #radio-container span{
        margin-left: 6px;
        font-weight: bold;
    }
    .submit-btn{
        background-color: tomato;
        color: azure;
        font-weight: bold;
        border: 2px solid rgba(253, 88, 59, 0.527);
        padding: 10px;
        font-size: 16px;
        margin: 0 auto;    
        cursor: pointer;
        transition: .5s;
    }
    .submit-btn:hover{
        background-color: transparent;
        color: #222;
    }
</style>