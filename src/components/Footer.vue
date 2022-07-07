<template>
  <div>
    <footer id="footer">
        <p id="content-footer">A Pizzaria &copy; 2022</p>
    </footer>
  </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
  div{
    margin-top: -80px;
    width: 100%;
    height: 40px;
    bottom: 0;
  }
  #footer{
    background-color: tomato;
    border-top: 4px solid rgba(255, 99, 71, 0.815);
    color: azure;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
  #content-footer{
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
  }
</style>