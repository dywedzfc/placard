<template>
  <div class="page-container">
    <h2 id="header">Carousel 走马灯</h2>
    <p>在有限空间内，循环播放同一类型的图片、文字等内容</p>
    <h3 id="ji-chu-yong-fa">基础用法</h3>
    <p>适用广泛的基础用法</p>
    <demo-block>
      <template v-slot:source>
        <JiChuYongFa />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jiChuYongFa" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="zhi-shi-qi">指示器</h3>
    <p>可以将指示器的显示位置设置在容器外部</p>
    <demo-block>
      <template v-slot:source>
        <ZhiShiQi />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in zhiShiQi" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="qie-huan-jian-tou">切换箭头</h3>
    <p>可以设置切换箭头的显示时机</p>
    <demo-block>
      <template v-slot:source>
        <QieHuanJianTou />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in qieHuanJianTou" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="qia-pian-hua">卡片化</h3>
    <p>当页面宽度方向空间空余，但高度方向空间匮乏时，可使用卡片风格</p>
    <demo-block>
      <template v-slot:source>
        <QiaPianHua />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in qiaPianHua" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="fang-xiang">方向</h3>
    <p>默认情况下，<code>direction</code> 为 <code>horizontal</code>。通过设置 <code>direction</code> 为 <code>vertical</code> 来让走马灯在垂直方向上显示。</p>
    <demo-block>
      <template v-slot:source>
        <FangXiang />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in fangXiang" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="carousel-attributes">Carousel Attributes</h3>
    <table-props :data="carouselAttributes" />
    <h3 id="carousel-events">Carousel Events</h3>
    <table-events :data="carouselEvents" />
    <h3 id="carousel-methods">Carousel Methods</h3>
    <table-methods :data="carouselMethods" />
    <h3 id="carousel-item-attributes">Carousel-Item Attributes</h3>
    <table-props :data="carouselItemAttributes" />
    <br />
    <br />
    <br />

    <page-navigation target="header">
      <page-navigation-item target="ji-chu-yong-fa">基础用法</page-navigation-item>
      <page-navigation-item target="zhi-shi-qi">指示器</page-navigation-item>
      <page-navigation-item target="qie-huan-jian-tou">切换箭头</page-navigation-item>
      <page-navigation-item target="qia-pian-hua">卡片化</page-navigation-item>
      <page-navigation-item target="fang-xiang">方向</page-navigation-item>
      <page-navigation-item target="carousel-attributes">Carousel Attributes</page-navigation-item>
      <page-navigation-item target="carousel-events">Carousel Events</page-navigation-item>
      <page-navigation-item target="carousel-methods">Carousel Methods</page-navigation-item>
      <page-navigation-item target="carousel-item-attributes">Carousel-Item Attributes</page-navigation-item>
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
import JiChuYongFa from './components/carousel/JiChuYongFa.vue'
import ZhiShiQi from './components/carousel/ZhiShiQi.vue'
import QieHuanJianTou from './components/carousel/QieHuanJianTou.vue'
import QiaPianHua from './components/carousel/QiaPianHua.vue'
import FangXiang from './components/carousel/FangXiang.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, JiChuYongFa, ZhiShiQi, QieHuanJianTou, QiaPianHua, FangXiang }})
export default class CarouselView extends Vue {
  get jiChuYongFa(): object[] { return require('assets/config/element-ui/carousel.config.json').code.jiChuYongFa }
  get zhiShiQi(): object[] { return require('assets/config/element-ui/carousel.config.json').code.zhiShiQi }
  get qieHuanJianTou(): object[] { return require('assets/config/element-ui/carousel.config.json').code.qieHuanJianTou }
  get qiaPianHua(): object[] { return require('assets/config/element-ui/carousel.config.json').code.qiaPianHua }
  get fangXiang(): object[] { return require('assets/config/element-ui/carousel.config.json').code.fangXiang }
  get carouselAttributes(): object[] { return require('assets/config/element-ui/carousel.config.json').carouselAttributes }
  get carouselEvents(): object[] { return require('assets/config/element-ui/carousel.config.json').carouselEvents }
  get carouselMethods(): object[] { return require('assets/config/element-ui/carousel.config.json').carouselMethods }
  get carouselItemAttributes(): object[] { return require('assets/config/element-ui/carousel.config.json').carouselItemAttributes }
}
</script>