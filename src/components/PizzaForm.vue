<template>
    <div>
        //Mensagem de cadastro
        <div>
            <form id="pizza-form">
                <div class="input-container">
                    <label for="nome">Nome cliente:</label>
                    <input type="text" id="nome" name="nome" v-model="nome" placeholder="Digite seu nome">
                </div>
                <div class="input-container">
                    <label for="nome">Nome Cliente:</label>
                    <input type="text" id="nome" name="nome" v-model="nome" placeholder="Digite seu nome">
                </div>
                <div class="input-container">
                    <label for="sabor">Escolha o sabor:</label>
                    <select name="sabor" id="sabor" v-model="sabor">
                        
                    </select>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "PizzaForm",

}
</script>

<style>

</style>