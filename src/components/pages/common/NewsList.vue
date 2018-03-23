<template>
  <div class="news-list">
      <router-link to="" :key="news.group_id" v-for="news in newsList.data">
        <h2>{{news.title}}</h2>
        <img :src="news.image_url" alt="">
      </router-link>
  </div>
</template>
<script>
export default {
  props: {
    newsList: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      message: '你好'
    }
  }
}
</script>
