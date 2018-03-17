<template>
  <div class="layout-body">
      <div class="app-header">header</div>
      <div class="app-content">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
      <div class="app-footer">footer</div>
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
