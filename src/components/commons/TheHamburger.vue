<template>
  <button @click="toggleAside">
    메뉴
  </button>
</template>

<script>
export default {
  name: 'TheHamburger',
  data(){
    return{
    }
  },
  methods:{
    toggleAside() {
      this.$emit('toggle-aside');
    }
  }
}
</script>

<style module>
</style>
