<template>
  <div class="slider" @mouseover="clearAuto" @mouseout="runSlider">
      <ul class="slider-cont">
        <template v-for="(news,index) in sliderData">
          <transition name="slide-banner" :key="'nihao0'+news.group_id">
            <li :key="news.group_id" :class="{'active': activeIndex===index}">
              <a :href="news.media_url">
                  <h2 v-if="isShow" >{{news.title}}</h2>
                  <img v-if="isShow" :src="news.image_url" alt="">
              </a>
            </li>
          </transition>
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
      timeId: '',
      isShow: true
    }
  },
  methods: {
    changeIndex (index) {
      this.isShow = false
      setTimeout(() => {
        this.activeIndex = index
        this.isShow = true
      }, 10)
    },
    mouserTab (index) {
      this.clearAuto()
      this.changeIndex(index)
    },
    runSlider () {
      this.timeId = setInterval(() => {
        this.changeIndex(this.getIndex)
      }, 4000)
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
