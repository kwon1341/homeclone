<template>
  <section :class="$style.videoSection">
    <video
        :class="$style.mainVideo"
        autoplay
        loop
        muted
        playsinline
        src="@/assets/main_video.mp4"
    />
    <div :class="$style.arrBox">
      <ul :class="$style.arrUl">
        <li :class="$style.arrLi">
          <img :class="$style.arrow" src="@/assets/pc_bottomarrow.png"/>
        </li>
        <li :class="$style.arrLi">
          <img :class="$style.arrow" src="@/assets/pc_bottomarrow.png"/>
        </li>
        <li :class="$style.arrLi">
          <img :class="$style.arrow" src="@/assets/pc_bottomarrow.png"/>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style module>
.videoSection{
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  min-width: 290px;
  margin-bottom: 35rem;
}
.mainVideo {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.arrBox{
  position: absolute;
  left: 50%;
  bottom: 10%;
  transform: translateX(-50%);
}
.arrUl{
  display: flex;
  flex-direction: column;
}
@keyframes fadein {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.arrUl:first-child{
  animation-delay: 0.3s;
}
.arrUl:last-child{
  animation-delay: 0.6s;
}
.arrLi{
  margin-bottom: 1rem;
}

</style>
