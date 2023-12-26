<template>
  <LayoutHeader/>

  <router-view/>
</template>

<script>

import LayoutHeader from '@/layout/layout-header/LayoutHeader.vue'

export default {
  name: 'App',
  components: {
    LayoutHeader
  }
}
</script>

<style scoped>

</style>
