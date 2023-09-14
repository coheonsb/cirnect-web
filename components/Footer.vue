<template>
  <footer class="footer sm2-ko-r-gray6 center">
    <div>1</div>
  </footer>
</template>
<script>

export default {
  name: 'Footer',
  // inject: ['$popup'],

}
</script>
<style lang="scss" scoped>
.img_nbt_logo { width: 66px; height: 18px; object-fit: contain; }
.footer{

  max-height: 237px;
  padding:40px 10px 40px 30px; display: flex; flex-direction: column;
  font-size: 12px;
  color: #868e96;
  background-color: var(--gray100);
  button {

  }
  .logo{margin-top:10px;margin-bottom:15px; background-color: rgba(0,0,0,0) !important;}
  .detail{line-height: 20px;display: block;}
  a{
    color: var(--gray800)
  }
}
</style>
