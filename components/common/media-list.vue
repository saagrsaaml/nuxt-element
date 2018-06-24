<template>
  <Row :gutter="16">
    <template v-for="md in media">
      <Col span="3">
        <Tooltip placement="top" :content="md.title">
          <Card style="width:100%">
            <div style="text-align:center">
              <img :src="md.src" style="width: 100%">
            </div>
          </Card>
        </Tooltip>
      </Col>
    </template>
  </Row>
</template>

<script>
  export default {
    name: "media-list",
    props: ['media']
  }
</script>

<style scoped>

</style>
