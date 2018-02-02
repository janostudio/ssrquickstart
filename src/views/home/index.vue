<template>
  <div class="user-view">
    <h1 class="l-text-center">游戏房间</h1>
    <div class="room">
      
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  data () {
    return {
      rooms: [{
        id: 0,
        name: '房间1'
      }]
    }
  }
  // computed: {
  //   langs () {
  //     return this.$store.state.langs
  //   }
  // },
  // asyncData ({ store }) {
  //   return store.dispatch('GET_LANGS')
  // }
}
</script>

<style lang="stylus">

</style>
