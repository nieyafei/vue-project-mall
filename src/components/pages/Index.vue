<template>
  <div class="index-page">
    <div class="nav-list">
      <div class="nav">
        <template v-for="product in productList">
          <router-link :to="product.url" :key="product.id">{{ product.title }}</router-link>
        </template>
        <ul>
          <template v-for="news in newsList">
            <li :key="news.group_id">
              <a :href="news.media_url">
                <h2>{{news.title}}</h2>
                <img :src="news.image_url" alt="">
              </a>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { productList } from '../../ComData/DataName'
export default {
  created () {
    axios.get('/api/pc/focus/')
      .then((response) => {
        console.log(response.data.data.pc_feed_focus)
        // 存储数据
        this.newsList = response.data.data.pc_feed_focus
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  data () {
    return {
      productList,
      newsList: []
    }
  }
}
</script>
