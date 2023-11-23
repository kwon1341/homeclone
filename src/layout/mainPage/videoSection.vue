<template>
  <section :class="$style.videoSection">
    <video
        :class="$style.mainVideo"
        autoplay
        loop
        muted
        playsinline
        src="@/assets/main_video.mp4"
    ></video>
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
}
.mainVideo {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
