<template>
  <router-link to="/Pedir" id="btn-pedir">
            Pedir Pizza!        
    </router-link>
</template>

<script>

export default {
    name:"Btn"
}
</script>

<style>

    #btn-pedir{
        background-color: tomato;
        text-decoration: none;
        padding: 32px;
        border-radius: 5px;
        box-shadow: 4px 5px 4px rgba(0, 0, 0, 0.25);
        font-weight: bold;
        color: azure;        
    }
</style>