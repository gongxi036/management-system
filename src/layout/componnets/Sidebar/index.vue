<template>
  <div class="app-sidebar">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        mode="vertical"
      >
        <Logo :collapse="isCollapse"/>
        <!-- <sidebar-item v-for="route in accessRoutes" :key="route.path" :item="route" :base-path="route.path" /> -->
        <MenuTee v-for="(menu, index) in permission_routers" :key="index" :menu="menu"></MenuTee>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
import Logo from './Logo'
import MenuTee from './MenuTree'
import { mapGetters } from 'vuex'
export default {
  name: 'Sidebar',
  components: {
    MenuTee,
    Logo
  },
  data () {
    return {
      isCollapse: false,
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
  },
  computed: {
    ...mapGetters([
      'permission_routers'
    ])
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
