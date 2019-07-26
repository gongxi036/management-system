<template>
  <el-aside class="app-aside" width="250px" height="100%">
    <el-menu>
      <MenuTee v-for="(menu, index) in menuList" :key="index" :menu="menu"></MenuTee>
    </el-menu>
  </el-aside>
</template>
<script>
import MenuTee from './MenuTree'
export default {
  name: 'Sidebar',
  components: {
    MenuTee
  },
  data () {
    return {
      menuList: [
        {
          id: '1',
          title: '系统管理',
          icon: 'el-icon-document',
          type: '0', // 0：submenu，1: menuItem
          url: '/system',
          children: [
            {
              id: '11',
              title: '系统菜单管理',
              icon: 'el-icon-document',
              type: '1',
              url: '/system/menu',
              children: null
            },
            {
              id: '12',
              title: '用户管理',
              icon: 'el-icon-document',
              type: '1',
              url: '/system/user',
              children: null
            }
          ]
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  .app-aside {
    box-sizing: border-box;
    height: 100%;
    min-height: 100%;
    overflow: hidden;
    border-right: 1px solid #ddd;
    transition: all .3s linear;
    text-align: left;
  }
</style>
