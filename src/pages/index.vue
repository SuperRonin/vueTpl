<template>
  <div class="container">
     <h5 style="text-align: center;margin-top: 200px">开始你的奇妙之旅吧！~</h5>
     <swBusLoading v-show="showLoading"></swBusLoading>
  </div>
</template>

<style lang="scss" scoped>
  @import '@/assets/css/index.scss';
</style>

<script>
// require styles
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import qs from 'qs';
import swBusLoading from "@/components/bus-loading"
import util from "../assets/js/utils.js";
import http from "../assets/js/http.js";


export default {
  name: "index",
  data() {
    return {
      // 轮播
      swiperOption: {
        autoplay: {
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination"
        },
      },
      query: '',
      showLoading: true
    };
  },
  mounted() {
      this.query = this.$route.query;
      this.showLoading = false
  },
  methods: {
    
  },
  components: { swiper, swiperSlide, swBusLoading }
};
</script>


