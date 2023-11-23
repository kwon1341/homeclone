<template>
  <div :class="$style.header">

    <div :class="$style.logo">
      <img src="../../assets/pc_logo.png" alt="logo"/>
    </div>
    123
  </div>
</template>

<script>
export default {
}
</script>

<style module>
.header{
  position: fixed;
  width: 100%;
  top: 0;
  background-color: #ececec;
  min-height: 5.8rem;
  color: #000;
}
.logo{
  position: relative;
  padding: 1rem;
}
.logo > img{
  width: 100%;
  height: 100%;
}

</style>
