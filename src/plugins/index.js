// import Vue from 'vue'

// element
import './element-ui'

// lazy-load
// import VueLazyload from 'vue-lazyload';
// Vue.use(VueLazyload, {
//   attempt: 3
// });

window.VueCalendarLang = function (lang) {
  return {
    daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
    limit: '超过限制 (最多{{limit}}项)',
    loading: '加载中...',
    minLength: '最小长度',
    months: [
      '一月',
      '二月',
      '三月',
      '四月',
      '五月',
      '六月',
      '七月',
      '八月',
      '九月',
      '十月',
      '十一',
      '十二'
    ],
    notSelected: '未选择',
    required: '必填项',
    search: '查找'
  }
}
