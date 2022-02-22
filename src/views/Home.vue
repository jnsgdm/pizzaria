<template>
  <Banner/>
  <div class="main-container">
    <h1>Lorem ipsum</h1>
    <Liner/>
    <div class="content-home">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem culpa quas fugiat ipsam officiis ex debitis tempora deserunt placeat iste enim quod et eaque suscipit eveniet iure, consequuntur expedita illo?
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, cum commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut doloremque magni ipsa maxime dolorum, dolor totam, nihil iusto tenetur quae exercitationem nemo dicta vel.
      </p>
      <div class="social">
        <img src="/img/facebook.png" alt="">
        <img src="/img/instagram.png" alt="">
        <img src="/img/whatsapp.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '../components/Banner.vue'
import Btn from '../components/Btn.vue'
import Liner from '../components/Liner.vue'

export default {
  name: 'Home',
  components: {
    Banner,
    Btn,
    Liner
  }
}
</script>


<style scoped>
  .content-home{
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    margin-top: 20px;
  }
  p{
    font-size: 20px;
  }
  .social{
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;
    margin-top: 20px;
  }
</style>