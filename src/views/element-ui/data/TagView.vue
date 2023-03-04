<template>
  <div class="page-container">
    <h2 id="header">Tag 标签</h2>
    <p>用于标记和选择。</p>
    <h3 id="ji-chu-yong-fa">基础用法</h3>
    <demo-block>
      <template v-slot:source>
        <JiChuYongFa />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jiChuYongFa" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="ke-yi-chu-biao-qian">可移除标签</h3>
    <demo-block>
      <template v-slot:source>
        <KeYiChuBiaoQian />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in keYiChuBiaoQian" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="dong-tai-bian-ji-biao-qian">动态编辑标签</h3>
    <p>动态编辑标签可以通过点击标签关闭按钮后触发的 <code>close</code> 事件来实现</p>
    <demo-block>
      <template v-slot:source>
        <DongTaiBianJiBiaoQian />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in dongTaiBianJiBiaoQian" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="bu-tong-chi-cun">不同尺寸</h3>
    <p>Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。</p>
    <demo-block>
      <template v-slot:source>
        <BuTongChiCun />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in buTongChiCun" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="bu-tong-zhu-ti">不同主题</h3>
    <p>Tag 组件提供了三个不同的主题：<code>dark</code>、<code>light</code> 和 <code>plain</code></p>
    <demo-block>
      <template v-slot:source>
        <BuTongZhuTi />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in buTongZhuTi" :key="index" :type="item.type" :code="item.data" /></template>
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
      <page-navigation-item target="ke-yi-chu-biao-qian">可移除标签</page-navigation-item>
      <page-navigation-item target="dong-tai-bian-ji-biao-qian">动态编辑标签</page-navigation-item>
      <page-navigation-item target="bu-tong-chi-cun">不同尺寸</page-navigation-item>
      <page-navigation-item target="bu-tong-zhu-ti">不同主题</page-navigation-item>
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
import JiChuYongFa from './components/tag/JiChuYongFa.vue'
import KeYiChuBiaoQian from './components/tag/KeYiChuBiaoQian.vue'
import DongTaiBianJiBiaoQian from './components/tag/DongTaiBianJiBiaoQian.vue'
import BuTongChiCun from './components/tag/BuTongChiCun.vue'
import BuTongZhuTi from './components/tag/BuTongZhuTi.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, JiChuYongFa, KeYiChuBiaoQian, DongTaiBianJiBiaoQian, BuTongChiCun, BuTongZhuTi }})
export default class TagView extends Vue {
  get jiChuYongFa(): object[] { return require('assets/config/element-ui/tag.config.json').code.jiChuYongFa }
  get keYiChuBiaoQian(): object[] { return require('assets/config/element-ui/tag.config.json').code.keYiChuBiaoQian }
  get dongTaiBianJiBiaoQian(): object[] { return require('assets/config/element-ui/tag.config.json').code.dongTaiBianJiBiaoQian }
  get buTongChiCun(): object[] { return require('assets/config/element-ui/tag.config.json').code.buTongChiCun }
  get buTongZhuTi(): object[] { return require('assets/config/element-ui/tag.config.json').code.buTongZhuTi }
  get attributes(): object[] { return require('assets/config/element-ui/tag.config.json').attributes }
  get events(): object[] { return require('assets/config/element-ui/tag.config.json').events }
}
</script>