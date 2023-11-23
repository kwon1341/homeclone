<template>
  <aside :class="$style.navWrap">
    <div>
     <h1>navigation</h1>
    </div>
  </aside>
</template>

<script>
export default {
  name: "TheNavigation"
}
</script>

<style module>
.navWrap{
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #ececec;
  border-right: solid 1px #ececec;
}
.navWrap > div > h1 {
  padding: 3rem 4rem 3.5rem;
}
</style>
