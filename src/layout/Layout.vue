<template>
  <div class="app-wrapper" style="height:100%">
    <SideBar class="sidebar-container" style="width: 250px;height:100%" />
  </div>
</template>
<script>
import { SideBar } from './componnets'
export default {
  name: 'Layout',
  data () {
    return {

    }
  },
  components: {
    SideBar
  }
}
</script>
