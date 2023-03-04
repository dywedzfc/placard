<template>
  <div class="page-container">
    <h2 id="header">Backtop 回到顶部</h2>
    <p>返回页面顶部的操作按钮</p>
    <h3 id="ji-chu-yong-fa">基础用法</h3>
    <p>滑动页面即可看到右下方的按钮。</p>
    <demo-block>
      <template v-slot:source>
        <JiChuYongFa />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jiChuYongFa" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="zi-ding-yi-xian-shi-nei-rong">自定义显示内容</h3>
    <p>显示区域被固定为 40px * 40px 的区域, 其中的内容可支持自定义。</p>
    <demo-block>
      <template v-slot:source>
        <ZiDingYiXianShiNeiRong />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in ziDingYiXianShiNeiRong" :key="index" :type="item.type" :code="item.data" /></template>
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
      <page-navigation-item target="zi-ding-yi-xian-shi-nei-rong">自定义显示内容</page-navigation-item>
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
import JiChuYongFa from './components/backtop/JiChuYongFa.vue'
import ZiDingYiXianShiNeiRong from './components/backtop/ZiDingYiXianShiNeiRong.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, JiChuYongFa, ZiDingYiXianShiNeiRong }})
export default class BacktopView extends Vue {
  get jiChuYongFa(): object[] { return require('assets/config/element-ui/backtop.config.json').code.jiChuYongFa }
  get ziDingYiXianShiNeiRong(): object[] { return require('assets/config/element-ui/backtop.config.json').code.ziDingYiXianShiNeiRong }
  get attributes(): object[] { return require('assets/config/element-ui/backtop.config.json').attributes }
  get events(): object[] { return require('assets/config/element-ui/backtop.config.json').events }
}
</script>