<template>
  <div :class="$style.sectionWrap">
    <section :class="$style.section">
      <div :class="$style.sectionTitle">
        <h1>PR</h1>
        <small>언론 속 틸론의 소식을 접해보세요.</small>
      </div>
    </section>
    <section :class="$style.section">
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
  display: flex;
  margin: 0 auto;
  max-width: 1320px;
  padding: 0 1.25rem;
  flex-direction: column;
  justify-content: center;
}
.section{
  width: 100%;
  padding-bottom: 2.25rem;
}
.sectionTitle{
  font-weight: 600;
}
.sectionTitle > h1{
  color: #fff;
  font-size: 3.75rem;
  line-height: 1;
}
.sectionTitle > small {
  font-size: 1rem;
  font-weight: 600;
}
</style>
