<template>
  <div :class="$style.mainWrap">
    <main :class="$style.main">
      <TheHeader/>
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: "mainPage"
}
</script>

<style module>
.mainWrap{
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  white-space: nowrap;
  overflow-x: auto;
  background-image: url("@/assets/pc_newbg.png");
  //background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: 0 60%;
}
.main {
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  //padding-top: 5.8rem;
}

</style>
