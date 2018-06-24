<template>
  <Tabs>
    <template v-for="item in mediaItem">
      <TabPane v-if="item.icon" :label="item.label" :icon="item.icon">
        <keep-alive>
          <component v-bind:is="item.content"></component>
        </keep-alive>
      </TabPane>
      <TabPane v-else :label="item.label">
        <keep-alive>
          <component v-bind:is="item.content"></component>
        </keep-alive>
      </TabPane>
    </template>
  </Tabs>
</template>

<script>
  export default {
    name: "media-tab",
    props: ['mediaItem']
  }
</script>

<style scoped>

</style>
