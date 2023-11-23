<template>
  <div :class="$style.headerContainer">
    <div :class="$style.headerWrap">
      <div :class="$style.header">
        <div :class="$style.logo">
          <img src="@/assets/pc_logo.png" alt="logo"/>
        </div>
        <div :class="$style.menuBtn">
          <div :class="$style.btnWrap">
            <button :class="$style.btn" @click="$router.push('/home')" alt="homeButton">Hamburger</button>
            <TheHamburger/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
}
</script>

<style module>
.headerContainer{
  position: absolute;
  width: 100%;
  top: 0;
  background-color: transparent;
  z-index: 10;
}
.headerWrap{
  display: flex;
  position: static;
  width: 100%;
  min-height: 5rem;
  color: #eeeeee;
  background-color: transparent;
  align-items: center;
  padding: 1rem 2rem;
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
  gap: 2rem;
}
.btn{
  //color: #a2a2a4;
}
.btn:hover{
  color: #fff;
  transition: all ease-in-out 0.3s;
}
</style>
