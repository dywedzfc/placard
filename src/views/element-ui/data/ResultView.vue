<template>
  <div class="page-container">
    <h2 id="header">Result 结果</h2>
    <p>用于对用户的操作结果或者异常状态做反馈。</p>
    <h3 id="ji-chu-yong-fa">基础用法</h3>
    <demo-block>
      <template v-slot:source>
        <JiChuYongFa />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jiChuYongFa" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="zi-ding-yi-nei-rong">自定义内容</h3>
    <demo-block>
      <template v-slot:source>
        <ZiDingYiNeiRong />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in ziDingYiNeiRong" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="result-attributes">Result Attributes</h3>
    <table-props :data="resultAttributes" />
    <h3 id="result-slots">Result Slots</h3>
    <table-slot :data="resultSlots" />
    <br />
    <br />
    <br />

    <page-navigation target="header">
      <page-navigation-item target="ji-chu-yong-fa">基础用法</page-navigation-item>
      <page-navigation-item target="zi-ding-yi-nei-rong">自定义内容</page-navigation-item>
      <page-navigation-item target="result-attributes">Result Attributes</page-navigation-item>
      <page-navigation-item target="result-slots">Result Slots</page-navigation-item>
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
import JiChuYongFa from './components/result/JiChuYongFa.vue'
import ZiDingYiNeiRong from './components/result/ZiDingYiNeiRong.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, JiChuYongFa, ZiDingYiNeiRong }})
export default class ResultView extends Vue {
  get jiChuYongFa(): object[] { return require('assets/config/element-ui/result.config.json').code.jiChuYongFa }
  get ziDingYiNeiRong(): object[] { return require('assets/config/element-ui/result.config.json').code.ziDingYiNeiRong }
  get resultAttributes(): object[] { return require('assets/config/element-ui/result.config.json').resultAttributes }
  get resultSlots(): object[] { return require('assets/config/element-ui/result.config.json').resultSlots }
}
</script>