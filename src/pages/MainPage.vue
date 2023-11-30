<template>
  <div :class="$style.homeWrap">
    <main :class="$style.main">
      <videoSection id="section1" :class="$style.section"/>
      <newSection id="section2" :class="$style.section"/>
      <div id="section3" :class="$style.section">
        <div>
          컨텐츠 작성 다음섹션2
        </div>
      </div>
      <div id="section4" :class="$style.section">
        <div>
          컨텐츠 작성 다음섹션3
        </div>
      </div>
      <div id="section5" :class="$style.section">
        <div>
          컨텐츠 작성 다음섹션4
        </div>
      </div>
<!--      <div id="section6" :class="$style.section">-->
<!--        <div>-->
<!--          컨텐츠 작성 다음섹션5-->
<!--        </div>-->
<!--      </div>-->
    <!--  네이게이션 캐러셀  -->
<!--      <div :class="$style.navCarousel">-->
<!--        <button @click="scrollToSection('section1')">비디오</button>-->
<!--        <button @click="scrollToSection('section2')">섹션 1</button>-->
<!--        <button @click="scrollToSection('section3')">섹션 2</button>-->
<!--        <button @click="scrollToSection('section4')">섹션 3</button>-->
<!--        <button @click="scrollToSection('section5')">섹션 4</button>-->
<!--        <button @click="scrollToSection('section6')">섹션 5</button>-->
<!--      </div>-->
    </main>
  </div>
</template>

<script>
import videoSection from "@/layout/mainPage/videoSection.vue";
import newSection from "@/layout/mainPage/newSection.vue";

export default {
  components:{
    videoSection,newSection
  },
  data() {
    return {
      swiperOptions:{
        direction: 'vertical',
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
    }
  },
  methods:{
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  },
}
</script>

<style module>
.homeWrap{
  color: #eeeeee;
}
.main{
  flex: 1;
  position: relative;
}
.section {
  width: 100%;
  height: 100vh;
}
.navCarousel {
  position: fixed;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 2px;
  transition: all 2s ease;
}
.navCarousel > button:hover{
  font-weight: 700;
}

</style>
