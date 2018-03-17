<template>
  <div class="slider" @mouseover="clearAuto" @mouseout="runSlider">
      <ul class="slider-cont">
        <template v-for="(news,index) in sliderData">
            <li :key="news.group_id" :class="{'active': activeIndex===index}">
              <a :href="news.media_url">
                  <h2>{{news.title}}</h2>
                  <img :src="news.image_url" alt="">
              </a>
            </li>
        </template>
    </ul>
    <div class="slider-bot">
      <a @mouseover="mouserTab(1)" :class="[{'active': activeIndex === 1}]">要闻</a>
      <a @mouseover="mouserTab(2)" :class="[{'active': activeIndex === 2}]">社会</a>
      <a @mouseover="mouserTab(3)" :class="[{'active': activeIndex === 3}]">娱乐</a>
      <a @mouseover="mouserTab(4)" :class="[{'active': activeIndex === 4}]">体育</a>
      <a @mouseover="mouserTab(5)" :class="[{'active': activeIndex === 5}]">军事</a>
      <a @mouseover="mouserTab(6)" :class="[{'active': activeIndex === 6}]">明星</a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    sliderData: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  computed: {
    getIndex () {
      if (this.activeIndex === 6) {
        return 1
      } else {
        return this.activeIndex + 1
      }
    }
  },
  data () {
    return {
      message: '你好轮播',
      activeIndex: 1,
      timeId: ''
    }
  },
  methods: {
    mouserTab (index) {
      this.clearAuto()
      this.activeIndex = index
    },
    runSlider () {
      this.timeId = setInterval(() => {
        this.activeIndex = this.getIndex
      }, 2000)
    },
    clearAuto () {
      clearInterval(this.timeId)
    }
  },
  mounted () {
    this.runSlider() // 加载完之后自动执行
  }
}
</script>
