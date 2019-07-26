<template>
    <Layout/>
</template>

<script>
// @ is an alias to /src
import Layout from '@/layout/Layout.vue'
import { getMenus } from '@/api/getMenus'

export default {
  name: 'home',
  components: {
    Layout
  },
  mounted () {
    getMenus().then(res2 => {
      console.log(res2)
    })
  }
}
</script>
