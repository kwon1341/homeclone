<template>
  <div :class="$style.mainWrap">
    <main :class="$style.main">
      <TheHeader/>
<!--      <TheNavigation/>-->
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
}
.main {
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  //padding-top: 5.8rem;
}

</style>
