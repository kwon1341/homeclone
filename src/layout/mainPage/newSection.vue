<template>
  <div :class="$style.newWrap">
    <section :class="$style.section">
      <div :class="$style.sectionTitle">
        <h1>NEWS</h1>
      </div>
    </section>
    <section :class="$style.section">
      <div :class="$style.imgWrap">
        <img :class="$style.img" src="@/assets/sample/01.png"/>
        <img :class="$style.img" src="@/assets/sample/02.jpg"/>
        <img :class="$style.img" src="@/assets/sample/03.png"/>
        <img :class="$style.img" src="@/assets/sample/04.png"/>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style module>
.newWrap{
  width: 100%;
  height: 100vh;
  display: block;
}
.section{
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
}
.sectionTitle > h1{
  color: #fff;
  margin: 12.5rem 0 1rem 0;
  position: relative;
  font-size: 2.5rem;
  letter-spacing: 0.15em;
  padding-left: 1rem;
  line-height: 1;
}
.sectionTitle > h1::after{
  position: absolute;
  content: " ";
  top: 10%;
  left: 0;
  height: 90%;
  width: 2px;
  background: #ec6501;
}
.imgWrap{
  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-gap: 6px;
}
.imgWrap > img {
  //position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border: 0;
  overflow: hidden;
}

</style>
