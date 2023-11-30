<template>
  <div :class="$style.newWrap">
    <section :class="$style.section">
      <h1>NEWS</h1>
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
  height: 100%;
}
.section{
  //display: flex;
  //justify-content: center;
  //align-items: center;
}
.section > h1{
  color: #fff;
  margin: 0;
  position: relative;
  font-size: 2.5rem;
  letter-spacing: .15em;
  padding-left: 22px;
  line-height: 1;
}
.imgWrap{
  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-gap: 6px;
}
.imgWrap > img {
  max-width: 1200px;
}

</style>
