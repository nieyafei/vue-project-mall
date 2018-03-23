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
        <Slider :sliderData="sliderList"></Slider>
      </keep-alive>
      <!-- 文章列表 -->
      <NewsListTem :newsList="newsList"></NewsListTem>
    </div>
    <div class="index-right">

    </div>
  </div>
</template>
<script>
import { productList } from '../../ComData/DataName'
import Slider from './common/Slider'
import NewsListTem from './common/NewsList'
export default {
  components: {
    Slider, // 轮播组件
    NewsListTem
  },
  computed: {
    sliderList () {
      return this.$store.getters.getSliderList
    },
    newsList () {
      return this.$store.getters.getNewsList
    }
  },
  data () {
    return {
      productList, // 菜单
      activeIndex: 1 // 当前选中菜单
    }
  },
  mounted () {
    this.$store.dispatch('fetchList')
    this.$store.commit('changeParams', {
      category: '__all__',
      utm_source: 'toutiao',
      widen: 1,
      tadrequire: true,
      min_behot_time: Math.random((new Date().getTime()) / 1000),
      as: '',
      cp: '',
      _signature: ''
    })
    this.$store.dispatch('loadNewsList')
  }
}
</script>
