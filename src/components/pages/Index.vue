<template>
  <div class="index-page body-cons">
    <div class="index-left">
      <div class="nav-list">
        <img src="https://s3.pstatp.com/toutiao/static/img/logo.201f80d.png" alt="" class="logo" />
        <div class="nav">
          <template v-for="product in productList">
            <router-link :to="product.url" :key="product.id" :class="['nav-tab-link',{'active': activeIndex == product.id}]">{{ product.title }}</router-link>
          </template>
        </div>
      </div>
    </div>
    <div class="index-middle">
      <!-- 轮播 -->
      <keep-alive>
        <Slider :sliderData="newsList"></Slider>
      </keep-alive>
    </div>
    <div class="index-right">

    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { productList } from '../../ComData/DataName'
import Slider from './common/Slider'
export default {
  components: {
    Slider // 轮播组件
  },
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
      productList, // 菜单
      newsList: [], // 轮播 以及 24小时热点
      activeIndex: 1 // 当前选中菜单
    }
  }
}
</script>
