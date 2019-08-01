<template>
  <div class="app-wrapper" style="height:100%">
    <SideBar class="sidebar-container" style="width: 250px;height:100%" />
    <div class="app-main">
      <div class="app-header app-header-fixed">

      </div>
      <AppBody />
    </div>
  </div>
</template>
<script>
import { SideBar, AppBody } from './componnets'
export default {
  name: 'Layout',
  data () {
    return {

    }
  },
  components: {
    SideBar,
    AppBody
  }
}
</script>
