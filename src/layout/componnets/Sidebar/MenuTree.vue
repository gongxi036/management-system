<template>
  <el-submenu v-if="menu.children && menu.children.length >= 1" :index="menu.url">
    <template slot="title">
      <i :class="menu.icon"></i>
      <span slot="title">{{menu.title}}</span>
    </template>
    <MenuTree v-for="item in menu.children" :key="item.menuId" :menu="item"></MenuTree>
  </el-submenu>
  <el-menu-item v-else :index="menu.url">
    <i :class="menu.icon"></i>
    <span slot="title">{{menu.title}}</span>
  </el-menu-item>
</template>
<script>
export default {
  name: 'MenuTree',
  data () {
    return {

    }
  },
  props: {
    menu: {
      type: Object,
      required: true
    }
  }
}
</script>
