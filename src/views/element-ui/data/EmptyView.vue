<template>
  <div class="page-container">
    <h2 id="header">Empty 空状态</h2>
    <p>空状态时的占位提示。</p>
    <h3 id="ji-chu-yong-fa">基础用法</h3>
    <demo-block>
      <template v-slot:source>
        <JiChuYongFa />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jiChuYongFa" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="zi-ding-yi-tu-pian">自定义图片</h3>
    <p>通过设置 <code>image</code> 属性传入图片 URL。</p>
    <demo-block>
      <template v-slot:source>
        <ZiDingYiTuPian />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in ziDingYiTuPian" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="tu-pian-chi-cun">图片尺寸</h3>
    <p>通过设置 <code>image-size</code> 属性来控制图片大小。</p>
    <demo-block>
      <template v-slot:source>
        <TuPianChiCun />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in tuPianChiCun" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="di-bu-nei-rong">底部内容</h3>
    <p>使用默认插槽可在底部插入内容。</p>
    <demo-block>
      <template v-slot:source>
        <DiBuNeiRong />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in diBuNeiRong" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="empty-attributes">Empty Attributes</h3>
    <table-props :data="emptyAttributes" />
    <h3 id="empty-slots">Empty Slots</h3>
    <table-slot :data="emptySlots" />
    <br />
    <br />
    <br />

    <page-navigation target="header">
      <page-navigation-item target="ji-chu-yong-fa">基础用法</page-navigation-item>
      <page-navigation-item target="zi-ding-yi-tu-pian">自定义图片</page-navigation-item>
      <page-navigation-item target="tu-pian-chi-cun">图片尺寸</page-navigation-item>
      <page-navigation-item target="di-bu-nei-rong">底部内容</page-navigation-item>
      <page-navigation-item target="empty-attributes">Empty Attributes</page-navigation-item>
      <page-navigation-item target="empty-slots">Empty Slots</page-navigation-item>
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
import JiChuYongFa from './components/empty/JiChuYongFa.vue'
import ZiDingYiTuPian from './components/empty/ZiDingYiTuPian.vue'
import TuPianChiCun from './components/empty/TuPianChiCun.vue'
import DiBuNeiRong from './components/empty/DiBuNeiRong.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, JiChuYongFa, ZiDingYiTuPian, TuPianChiCun, DiBuNeiRong }})
export default class EmptyView extends Vue {
  get jiChuYongFa(): object[] { return require('assets/config/element-ui/empty.config.json').code.jiChuYongFa }
  get ziDingYiTuPian(): object[] { return require('assets/config/element-ui/empty.config.json').code.ziDingYiTuPian }
  get tuPianChiCun(): object[] { return require('assets/config/element-ui/empty.config.json').code.tuPianChiCun }
  get diBuNeiRong(): object[] { return require('assets/config/element-ui/empty.config.json').code.diBuNeiRong }
  get emptyAttributes(): object[] { return require('assets/config/element-ui/empty.config.json').emptyAttributes }
  get emptySlots(): object[] { return require('assets/config/element-ui/empty.config.json').emptySlots }
}
</script>