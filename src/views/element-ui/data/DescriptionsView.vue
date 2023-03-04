<template>
  <div class="page-container">
    <h2 id="header">Descriptions 描述列表</h2>
    <p>列表形式展示多个字段。</p>
    <h3 id="ji-chu-yong-fa">基础用法</h3>
    <demo-block>
      <template v-slot:source>
        <JiChuYongFa />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jiChuYongFa" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="bu-tong-chi-cun">不同尺寸</h3>
    <demo-block>
      <template v-slot:source>
        <BuTongChiCun />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in buTongChiCun" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="chui-zhi-lie-biao">垂直列表</h3>
    <demo-block>
      <template v-slot:source>
        <ChuiZhiLieBiao />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in chuiZhiLieBiao" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="zi-ding-yi-yang-shi">自定义样式</h3>
    <demo-block>
      <template v-slot:source>
        <ZiDingYiYangShi />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in ziDingYiYangShi" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="descriptions-attributes">Descriptions Attributes</h3>
    <table-props :data="descriptionsAttributes" />
    <h3 id="descriptions-slots">Descriptions Slots</h3>
    <table-slot :data="descriptionsSlots" />
    <h3 id="descriptions-item-attributes">Descriptions Item Attributes</h3>
    <table-props :data="descriptionsItemAttributes" />
    <h3 id="descriptions-item-slots">Descriptions Item Slots</h3>
    <table-slot :data="descriptionsItemSlots" />
    <br />
    <br />
    <br />

    <page-navigation target="header">
      <page-navigation-item target="ji-chu-yong-fa">基础用法</page-navigation-item>
      <page-navigation-item target="bu-tong-chi-cun">不同尺寸</page-navigation-item>
      <page-navigation-item target="chui-zhi-lie-biao">垂直列表</page-navigation-item>
      <page-navigation-item target="zi-ding-yi-yang-shi">自定义样式</page-navigation-item>
      <page-navigation-item target="descriptions-attributes">Descriptions Attributes</page-navigation-item>
      <page-navigation-item target="descriptions-slots">Descriptions Slots</page-navigation-item>
      <page-navigation-item target="descriptions-item-attributes">Descriptions Item Attributes</page-navigation-item>
      <page-navigation-item target="descriptions-item-slots">Descriptions Item Slots</page-navigation-item>
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
import JiChuYongFa from './components/descriptions/JiChuYongFa.vue'
import BuTongChiCun from './components/descriptions/BuTongChiCun.vue'
import ChuiZhiLieBiao from './components/descriptions/ChuiZhiLieBiao.vue'
import ZiDingYiYangShi from './components/descriptions/ZiDingYiYangShi.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, JiChuYongFa, BuTongChiCun, ChuiZhiLieBiao, ZiDingYiYangShi }})
export default class DescriptionsView extends Vue {
  get jiChuYongFa(): object[] { return require('assets/config/element-ui/descriptions.config.json').code.jiChuYongFa }
  get buTongChiCun(): object[] { return require('assets/config/element-ui/descriptions.config.json').code.buTongChiCun }
  get chuiZhiLieBiao(): object[] { return require('assets/config/element-ui/descriptions.config.json').code.chuiZhiLieBiao }
  get ziDingYiYangShi(): object[] { return require('assets/config/element-ui/descriptions.config.json').code.ziDingYiYangShi }
  get descriptionsAttributes(): object[] { return require('assets/config/element-ui/descriptions.config.json').descriptionsAttributes }
  get descriptionsSlots(): object[] { return require('assets/config/element-ui/descriptions.config.json').descriptionsSlots }
  get descriptionsItemAttributes(): object[] { return require('assets/config/element-ui/descriptions.config.json').descriptionsItemAttributes }
  get descriptionsItemSlots(): object[] { return require('assets/config/element-ui/descriptions.config.json').descriptionsItemSlots }
}
</script>