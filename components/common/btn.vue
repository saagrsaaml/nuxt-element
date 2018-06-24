<template>
  <Switch v-model="switch1" @on-change="change"></Switch>
</template>

<script>
    export default {
      name: "btn",
      data () {
        return {
          switch1: false
        }
      },
      methods: {
        change (status) {
          this.$Message.info('开关状态：' + status);
        }
      }
    }
</script>

<style scoped>

</style>
