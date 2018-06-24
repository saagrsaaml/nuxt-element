<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu v-if="model11=='menu1'" mode="horizontal" active-name="1-2" theme="dark" width="auto" :open-names="['1']" :class="menuitemClasses">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              <span>Option 1</span>
            </template>
            <MenuItem name="1-1">Option 1</MenuItem>
            <MenuItem name="1-2">Option 2</MenuItem>
            <MenuItem name="1-3">Option 3</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-keypad"></Icon>
              <span>Option 1</span>
            </template>
            <MenuItem name="2-1">Option 1</MenuItem>
            <MenuItem name="2-2">Option 2</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-analytics"></Icon>
              <span>Option 1</span>
            </template>
            <MenuItem name="3-1">Option 1</MenuItem>
            <MenuItem name="3-2">Option 2</MenuItem>
          </Submenu>
        </Menu>
      </Header>
      <Layout>
        <Sider ref="side1" hide-trigger collapsible :collapsed-width="220" v-model="isCollapsed">
          <Menu mode="vertical" active-name="1-2" theme="dark" width="auto" :open-names="['1']" :class="menuitemClasses">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                <span>Option 1</span>
              </template>
              <MenuItem name="1-1">Option 1</MenuItem>
              <MenuItem name="1-2">Option 2</MenuItem>
              <MenuItem name="1-3">Option 3</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                <span>Option 1</span>
              </template>
              <MenuItem name="2-1">Option 1</MenuItem>
              <MenuItem name="2-2">Option 2</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>
                <span>Option 1</span>
              </template>
              <MenuItem name="3-1">Option 1</MenuItem>
              <MenuItem name="3-2">Option 2</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <Breadcrumb :style="{margin: '24px 0'}">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem>Layout</BreadcrumbItem>
          </Breadcrumb>
          <Content :style="{padding: '24px', minHeight: '100vh', background: '#fff'}">
            <MediaTab :mediaItem="mediaItem"/>
          </Content>
        </Layout>
        <Sider v-if="model11=='menu2'" ref="side1" hide-trigger collapsible :collapsed-width="220" v-model="isCollapsed">
          <Menu mode="vertical" active-name="1-2" theme="dark" width="auto" :open-names="['1']" :class="menuitemClasses">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                <span>Option 1</span>
              </template>
              <MenuItem name="1-1">Option 1</MenuItem>
              <MenuItem name="1-2">Option 2</MenuItem>
              <MenuItem name="1-3">Option 3</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                <span>Option 1</span>
              </template>
              <MenuItem name="2-1">Option 1</MenuItem>
              <MenuItem name="2-2">Option 2</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>
                <span>Option 1</span>
              </template>
              <MenuItem name="3-1">Option 1</MenuItem>
              <MenuItem name="3-2">Option 2</MenuItem>
            </Submenu>
          </Menu>
        </Sider>

      </Layout>

      <Row>
        <Col span="12" style="padding-right:10px">

          <Select v-model="model11" filterable >
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>{{model11}}
        </Col>

      </Row>

    </Layout>
  </div>
</template>

<script>
  import MediaTab from '@@/components/common/media-tab'
  export default {
    components: {
      MediaTab
    },
    data () {
      return {
        mediaItem: [
          { label: 'All', href: '', type: '', value: 'all', content: () => import('@@/components/common/media-list') },
          { label: 'Images', icon:'images', href: '', type: 'image', value: 'images', content: () => import('@@/components/common/media-list') },
          { label: 'Document', icon:'images', href: '', type: 'document', value: 'document', content: () => import('@@/components/common/media-list') }
        ],
        cityList: [
          {
            value: 'menu1',
            label: 'New York'
          },
          {
            value: 'menu2',
            label: 'London'
          },
          {
            value: 'menu3',
            label: 'Sydney'
          }
        ],
        model11: '',
        isCollapsed: false,
        switch1: false
      };
    },
    computed: {
      rotateIcon () {
        return [
          'menu-icon',
          this.isCollapsed ? 'rotate-icon' : ''
        ];
      },
      menuitemClasses: function () {
        return [
          'menu-item',
          this.isCollapsed ? 'collapsed-menu' : ''
        ]
      }
    },
    methods: {
      collapsedSider () {
        this.$refs.side1.toggleCollapse();
      }
    }
}
</script>

<style>

  .menu-item span{
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }
  .menu-item i{
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }
  .collapsed-menu span{
    width: 0px;
    transition: width .2s ease;
  }
  .collapsed-menu i{
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }
  .rotate-icon{
    transform: rotate(-90deg);
  }

</style>
