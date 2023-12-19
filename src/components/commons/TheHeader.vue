<template>
  <div :class="$style.headerContainer">
    <div :class="$style.headerWrap">
      <div :class="$style.header">
        <div :class="$style.logo">
          <img alt="logo" src="@/assets/pc_logo.png"/>
        </div>
        <div :class="$style.menuBtn">
          <div :class="$style.btnWrap">
            <button
                v-if="isAsideVisible"
                :class="$style.btn"
                @click="toggleAside"><img src="@/assets/pc_close.png"/></button>
            <button
                v-else
                :class="$style.btn"
                @click="toggleAside"><img src="@/assets/pc_hamburger.png"/></button>
          </div>
        </div>
      </div>
      <aside v-show="isAsideVisible" :class="$style.aside">
        <ul :class="$style.ul">
          <li >
            <h3>
              Company
            </h3>
            <ul>
              <li>회사소개</li>
              <li>윤리경영</li>
              <li>오시는길</li>
            </ul>
          </li>
          <li>
            <h3>
              Solution&Service
            </h3>
            <ul>
              <li>가상화</li>
              <li>메타버스</li>
              <li>클라우드</li>
              <li>블록체인</li>
              <li>제로디바이스</li>
            </ul>
          </li>
          <li>
            <h3>
              Business
            </h3>
            <ul>
              <li>구축사례</li>
              <li>파트너사</li>
            </ul>
          </li>
          <li>
            <h3>
              News
            </h3>
            <ul>
              <li>공지사항</li>
              <li>보도자료</li>
              <li>관련뉴스</li>
              <li>인사이트</li>
            </ul>
          </li>
          <li>
            <h3>
              IR
            </h3>
            <ul>
              <li>재무정보</li>
              <li>공시정보</li>
              <li>IR 게시판</li>
              <li>IR contact</li>
            </ul>
          </li>
        </ul>
      </aside>
    </div>

  </div>
</template>

<script>


export default {

  data(){
    return{
      isAsideVisible: false,
    };
  },
  methods:{
    toggleAside(){
      this.isAsideVisible = !this.isAsideVisible;
    },
  },
}
</script>

<style module>
.headerContainer{
  position: fixed;
  width: 100%;
  //top: 0;
  background-color: transparent;
  z-index: 10;
}
.headerWrap{
  position: absolute;
  display: flex;
  width: 100%;
  min-height: 5rem;
  color: #eeeeee;
  background: rgba(87, 87, 87, 0.18);
  backdrop-filter: blur(2px);
  align-items: center;
  padding: 1rem 5rem;
}
.header{
  width: 100%;
  height: 100%;
  display: flex;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
}
.logo{
  position: relative;
  max-width: 121px;
  cursor: pointer;
  //padding: 1rem;
}
.logo > img{
  width: 100%;
  height: 100%;
}
.menuBtn{
  display: flex;
  justify-content: space-between;
}
.btn{
  width: 45px;
}
.btnWrap{
  display: flex;
  justify-content: space-between;
  font-size: 1.6rem;
  position: relative;
  z-index: 200;
  color: brown;
}
.aside{
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
  width: 20%;
  min-width: 300px;
  height: 100%;
  background-color: #ffffff;
  color: #000;
  animation: slideIn 0.45s backwards;
}
.ul {
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  max-width: 1680px;
  padding: 3rem;
  text-align: start;
  width: 100%;
  height: 100%;
  //margin: 0 auto;
}
.ul > li > h3{
  font-size: 24px;
  font-weight: 700;
}
.ul > li > ul{
  //padding-left: 6px;
  line-height: 25px;
}

/* 슬라이드 인 애니메이션 */
@keyframes slideIn {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
/* 슬라이드 아웃 애니메이션 */
@keyframes slideOut {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}
</style>
