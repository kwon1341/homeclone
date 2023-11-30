<template>
  <div :class="$style.sectionWrap">
    <section :class="$style.section">
      <div :class="$style.sectionTitle">
        <h1>NEWS</h1>
      </div>
    </section>
    <section :class="$style.section">
      <div :class="$style.imgWrap">
        <a :class="$style.imgAnchor">
          <div :class="$style.imgCard">
            <h1>OBB Lunching Show</h1>
            <h4>123123</h4>
          </div>
          <img :class="$style.img" src="@/assets/sample/01.png"/>
        </a>
        <a :class="$style.imgAnchor">
          <div :class="$style.imgCard">
            <h1>OBB Lunching Show</h1>
            <h4>123123</h4>
          </div>
          <img :class="$style.img" src="@/assets/sample/02.jpg"/>
        </a>
        <a :class="$style.imgAnchor">
          <div :class="$style.imgCard">
            <h1>OBB Lunching Show</h1>
            <h4>123123</h4>
          </div>
          <img :class="$style.img" src="@/assets/sample/03.png"/>
        </a>
        <a :class="$style.imgAnchor">
          <div :class="$style.imgCard">
            <h1>OBB Lunching Show</h1>
            <h4>123123</h4>
          </div>
          <img :class="$style.img" src="@/assets/sample/04.png"/>
        </a>
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
.sectionWrap{
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
  margin: 16.5rem 0 1.25rem 0;
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
  position: relative;
  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-gap: 6px;
}
.imgWrap > a > img {
  //position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border: 0;
  overflow: hidden;
}
.imgAnchor{
  transition: ease all 0.5s;
}
.imgCard{
  position: absolute;
  z-index: 2;
  left: 0;
  bottom: 0;
  padding: 0 25px 20px 30px;
  width: 100%;
}
.imgCard > h2{
  width: 100%;
  left: 0;
}

</style>
