<template>
  <div :class="$style.sectionWrap">
    <section :class="$style.section">
      <div :class="$style.sectionTitle">
        <h1>News</h1>
        <small>틸론의 새로운 소식을 접해보세요.</small>
      </div>
    </section>
    <section :class="$style.section">
      <div :class="$style.imageWrap">
        <ul :class="$style.ul">
          <li :class="$style.li">
            <img src="@/assets/sample/01.png"/>
            <span>‘OBB(OmniBus Box) 런칭쇼’ 다시보기</span>
          </li>
          <li :class="$style.li">
            <img src="@/assets/sample/02.jpg"/>
            <span>틸론, 지문 인식으로 보안 강화된 제로클라이언트 OBB(OminuBus Box) 출시</span>
          </li>
          <li :class="$style.li">
            <img src="@/assets/sample/03.png"/>
            <span>틸론, 가트너가 주목하는 DaaS 공급업체</span>
          </li>
          <li :class="$style.li">
            <img src="@/assets/sample/04.png"/>
            <span>10월 월간 뉴스레터</span>
          </li>
        </ul>
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
.imageWrap{
}
.ul{
  display: flex;
  column-gap: 2rem;
}
.li{
  flex: 1;
  border-radius: 0.625rem;
  overflow: hidden;
  cursor: pointer;
  height: 17.5rem;
}
.li > img{
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-height: 10.938rem;
  border-bottom-left-radius: 0.625rem;
  border-bottom-right-radius: 0.625rem;
}
.li > span{
  display: block;
  padding-top: 1.25rem;
}
</style>
