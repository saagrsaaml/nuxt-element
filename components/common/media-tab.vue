<template>
  <Tabs>
    <template v-for="item in mediaTabs">
      <TabPane v-if="item.icon" :label="item.label" :icon="item.icon">
        <keep-alive>
          <component v-bind:is="item.content" :media="item.media"></component>
        </keep-alive>
      </TabPane>
      <TabPane v-else :label="item.label">
        <keep-alive>
          <component v-bind:is="item.content" :media="item.media"></component>
        </keep-alive>
      </TabPane>
    </template>
  </Tabs>
</template>

<script>
  export default {
    name: "media-tab",
    props: ['mediaTabs']
  }
</script>

<style scoped>

</style>
