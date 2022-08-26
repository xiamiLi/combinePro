
<template>
<section v-if=" $route.name === 'Login'">
<router-view />
</section>
<section v-else>
<div class="layout-wrapper">
    <Header />
    <div id="subapp-viewport" class="subapp-viewport">
      <router-view />
    </div>
  </div>
</section>
</template>
<script setup lang="ts">
import Header from '@/components/Header.vue'
</script>
<style lang="less" scoped>
.layout-wrapper{
  overflow: hidden;
}
.subapp-viewport{
  height: calc(100vh - 70px);
  overflow: auto;
}
</style>
