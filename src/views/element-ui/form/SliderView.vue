<template>
  <div class="page-container">
    <h2 id="header">Slider 滑块</h2>
    <p>通过拖动滑块在一个固定区间内进行选择</p>
    <h3 id="ji-chu-yong-fa">基础用法</h3>
    <p>在拖动滑块时，显示当前值</p>
    <demo-block>
      <template v-slot:source>
        <JiChuYongFa />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jiChuYongFa" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="chi-san-zhi">离散值</h3>
    <p>选项可以是离散的</p>
    <demo-block>
      <template v-slot:source>
        <ChiSanZhi />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in chiSanZhi" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="dai-you-shu-ru-kuang">带有输入框</h3>
    <p>通过输入框设置精确数值</p>
    <demo-block>
      <template v-slot:source>
        <DaiYouShuRuKuang />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in daiYouShuRuKuang" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="fan-wei-xuan-ze">范围选择</h3>
    <p>支持选择某一数值范围</p>
    <demo-block>
      <template v-slot:source>
        <FanWeiXuanZe />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in fanWeiXuanZe" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="shu-xiang-mo-shi">竖向模式</h3>
    <demo-block>
      <template v-slot:source>
        <ShuXiangMoShi />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in shuXiangMoShi" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="zhan-shi-biao-ji">展示标记</h3>
    <demo-block>
      <template v-slot:source>
        <ZhanShiBiaoJi />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in zhanShiBiaoJi" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="attributes">Attributes</h3>
    <table-props :data="attributes" />
    <h3 id="events">Events</h3>
    <table-events :data="events" />
    <br />
    <br />
    <br />

    <page-navigation target="header">
      <page-navigation-item target="ji-chu-yong-fa">基础用法</page-navigation-item>
      <page-navigation-item target="chi-san-zhi">离散值</page-navigation-item>
      <page-navigation-item target="dai-you-shu-ru-kuang">带有输入框</page-navigation-item>
      <page-navigation-item target="fan-wei-xuan-ze">范围选择</page-navigation-item>
      <page-navigation-item target="shu-xiang-mo-shi">竖向模式</page-navigation-item>
      <page-navigation-item target="zhan-shi-biao-ji">展示标记</page-navigation-item>
      <page-navigation-item target="attributes">Attributes</page-navigation-item>
      <page-navigation-item target="events">Events</page-navigation-item>
    </page-navigation>
  </div>
</template>
        
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CodeLine from 'components/CodeLine.vue'
import DemoBlock from 'components/DemoBlock.vue'
import TableProps from 'components/TableProps.vue'
import TableMethods from 'components/TableMethods.vue'
import TableEvents from 'components/TableEvents.vue'
import TableSlot from 'components/TableSlot.vue'
import PageNavigation from 'components/PageNavigation.vue'
import PageNavigationItem from 'components/PageNavigationItem.vue'
import JiChuYongFa from './components/slider/JiChuYongFa.vue'
import ChiSanZhi from './components/slider/ChiSanZhi.vue'
import DaiYouShuRuKuang from './components/slider/DaiYouShuRuKuang.vue'
import FanWeiXuanZe from './components/slider/FanWeiXuanZe.vue'
import ShuXiangMoShi from './components/slider/ShuXiangMoShi.vue'
import ZhanShiBiaoJi from './components/slider/ZhanShiBiaoJi.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, JiChuYongFa, ChiSanZhi, DaiYouShuRuKuang, FanWeiXuanZe, ShuXiangMoShi, ZhanShiBiaoJi }})
export default class SliderView extends Vue {
  get jiChuYongFa(): object[] { return require('assets/config/element-ui/slider.config.json').code.jiChuYongFa }
  get chiSanZhi(): object[] { return require('assets/config/element-ui/slider.config.json').code.chiSanZhi }
  get daiYouShuRuKuang(): object[] { return require('assets/config/element-ui/slider.config.json').code.daiYouShuRuKuang }
  get fanWeiXuanZe(): object[] { return require('assets/config/element-ui/slider.config.json').code.fanWeiXuanZe }
  get shuXiangMoShi(): object[] { return require('assets/config/element-ui/slider.config.json').code.shuXiangMoShi }
  get zhanShiBiaoJi(): object[] { return require('assets/config/element-ui/slider.config.json').code.zhanShiBiaoJi }
  get attributes(): object[] { return require('assets/config/element-ui/slider.config.json').attributes }
  get events(): object[] { return require('assets/config/element-ui/slider.config.json').events }
}
</script>