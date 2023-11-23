<template>
  <div :class="$style.homeWrap">
    <videoSection/>
    <div class="section">
      <div>
        컨텐츠 작성
      </div>
    </div>
    <div class="section">
      <div>
        컨텐츠 작성
      </div>
    </div>
    <div class="section">
      <div>
        컨텐츠 작성
      </div>
    </div>
  </div>
</template>

<script>
import videoSection from "@/layout/mainPage/videoSection.vue";

export default {
  components:{
    videoSection
  }
}
</script>

<style module>
.homeWrap{
  color: #eeeeee;
}
</style>
