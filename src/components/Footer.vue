<template>
  <footer id="footer">
      <p id="content-footer">A Pizzaria &copy; 2022</p>
  </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
  #footer{
    height: 80px;
    background-color: tomato;
    border-top: 4px solid rgba(255, 99, 71, 0.815);
    color: azure;
    margin: 0 auto;
    width: 100%;
  }
  #content-footer{
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>