import Vue from 'vue'
import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper'

import 'swiper/swiper-bundle.min.css'

const swiper = {
  install(Vue, options) {
    Vue.prototype.$swiper = Swiper
    Vue.prototype.$swiperModules = {
      Navigation,
      Pagination,
      Scrollbar,
    }
  },
}

Vue.use(swiper)
