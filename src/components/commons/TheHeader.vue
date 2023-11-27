<template>
  <div :class="$style.headerContainer">
    <div :class="$style.headerWrap">
      <div :class="$style.header">
        <div :class="$style.logo">
          <img src="@/assets/pc_logo.png" alt="logo"/>
        </div>
        <div :class="$style.menuBtn">
          <div :class="$style.btnWrap">
            <button @click="toggleAside">{{ isAsideVisible ? 'X' : 'O' }}</button>
          </div>
        </div>
      </div>
      <aside :class="$style.aside" v-show="isAsideVisible">
        <ul :class="$style.asideUl">
          <li>
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
  components:{
  },
  data(){
    return{
      isAsideVisible: false,
    };
  },
  computed:{

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
  position: fixed;
  display: flex;
  width: 100%;
  min-height: 5rem;
  color: #eeeeee;
  background-color: transparent;
  align-items: center;
  padding: 1rem 3rem;
  border-bottom: 1px solid rgba(255, 255, 255, .2);
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
.btnWrap{
  display: flex;
  justify-content: space-between;
  font-size: 1.6rem;
  position: relative;
  z-index: 200;
  color: brown;
  //gap: 2rem;
}
.btn{
  position: fixed;
  //color: #a2a2a4;
}
.btn:hover{
  color: #fff;
  transition: all ease 0.3s;
}
.aside{
  //display: none;
  position: fixed;
  top: 0;
  right: 0;
  //inset: 0;
  z-index: 100;
  width: 20%;
  min-width: 300px;
  height: 100%;
  background-color: #ffffff;
  color: #000;
  /* 애니메이션 초기 상태 설정 */
  animation: slideIn 0.45s backwards;
}
/* 활성화 상태에서의 애니메이션 변경 */
.asideHidden {
  animation: slideOut 0.45s forwards;
}
.aside > ul {
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
