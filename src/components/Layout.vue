@import '../assets/less/default'

<template>
  <div class="layout-body">
      <div class="app-header"></div>
      <div class="app-content">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
      <div class="app-footer"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      message: 'nihao'
    }
  }
}
</script>
