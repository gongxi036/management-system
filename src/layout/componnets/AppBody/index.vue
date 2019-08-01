<template>
  <div class="app-body">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AppBody',
  computed: {
    cachedViews () {
      return []
    },
    key () {
      return this.$route.path
    }
  }
}
</script>
