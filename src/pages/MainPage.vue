<template>
  <div :class="$style.homeWrap">
    <main :class="$style.main">
    <videoSection :class="$style.section"/>
    <div :class="$style.section">
      <div>
        컨텐츠 작성 다음섹션1
      </div>
    </div>
    <div :class="$style.section">
      <div>
        컨텐츠 작성 다음섹션2
      </div>
    </div>
    <div :class="$style.section">
      <div>
        컨텐츠 작성 다음섹션3
      </div>
    </div>
      <swiper :options="swiperOptions">
        <swiper-slide v-for="slide in slides" :key="slide">
          {{ slide }}
        </swiper-slide>
        <!-- 추가 기능을 사용하려면 여기에 <div class="swiper-pagination"></div> 등을 추가하세요. -->
      </swiper>
    </main>
  </div>
</template>

<script>
import videoSection from "@/layout/mainPage/videoSection.vue";

export default {
  components:{
    videoSection
  },
  data() {
    return {
      slides: [1, 2, 3, 4, 5],
      swiperOptions: {
        // Swiper 옵션을 여기에 설정하세요.
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  }
}
</script>

<style module>
.homeWrap{
  color: #eeeeee;
}
.main{
  flex: 1;
}
.section {
  width: 100%;
  height: 100vh;
}
.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

</style>
