<template>
  <div :class="$style.sectionWrap">
    <section :class="$style.section">
      <div :class="$style.sectionTitle">
        <h1>WHY</h1>
      </div>
    </section>
    <section :class="$style.section">
    </section>
  </div>
</template>

<script>
export default {
  setup() {
    return {}
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
  background: #009844;
}
</style>
