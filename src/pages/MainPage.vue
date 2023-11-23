<template>
  <div :class="$style.homeWrap">
    <main :class="$style.main">
    <videoSection :class="$style.section"/>
    <div class="section">
      <div>
        컨텐츠 작성 다음섹션1
      </div>
    </div>
    <div class="section">
      <div>
        컨텐츠 작성 다음섹션2
      </div>
    </div>
    <div class="section">
      <div>
        컨텐츠 작성 다음섹션3
      </div>
    </div>

    </main>
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
.main{
  flex: 1;
}
.main > section {
  width: 100%;
  height: 100vh;
}

</style>
