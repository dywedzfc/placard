<template>
  <div class="page-container">
    <h2 id="header">Calendar 日历</h2>
    <p>显示日期</p>
    <h3 id="ji-ben">基本</h3>
    <demo-block>
      <template v-slot:source>
        <JiBen />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jiBen" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="zi-ding-yi-nei-rong">自定义内容</h3>
    <demo-block>
      <template v-slot:source>
        <ZiDingYiNeiRong />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in ziDingYiNeiRong" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="zi-ding-yi-fan-wei">自定义范围</h3>
    <demo-block>
      <template v-slot:source>
        <ZiDingYiFanWei />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in ziDingYiFanWei" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="attributes">Attributes</h3>
    <table-props :data="attributes" />
    <h3 id="datecell-scoped-slot-can-shu">dateCell scoped slot 参数</h3>
    <table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>date</td><td>单元格代表的日期</td><td>Date</td><td>—</td><td>—</td></tr><tr><td>data</td><td>{ type, isSelected, day}，<code>type</code> 表示该日期的所属月份，可选值有 prev-month，current-month，next-month；<code>isSelected</code> 标明该日期是否被选中；<code>day</code> 是格式化的日期，格式为 yyyy-MM-dd</td><td>Object</td><td>—</td><td>—</td></tr></tbody></table>
    <br />
    <br />
    <br />

    <page-navigation target="header">
      <page-navigation-item target="ji-ben">基本</page-navigation-item>
      <page-navigation-item target="zi-ding-yi-nei-rong">自定义内容</page-navigation-item>
      <page-navigation-item target="zi-ding-yi-fan-wei">自定义范围</page-navigation-item>
      <page-navigation-item target="attributes">Attributes</page-navigation-item>
      <page-navigation-item target="datecell-scoped-slot-can-shu">dateCell scoped slot 参数</page-navigation-item>
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
import JiBen from './components/calendar/JiBen.vue'
import ZiDingYiNeiRong from './components/calendar/ZiDingYiNeiRong.vue'
import ZiDingYiFanWei from './components/calendar/ZiDingYiFanWei.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, JiBen, ZiDingYiNeiRong, ZiDingYiFanWei }})
export default class CalendarView extends Vue {
  get jiBen(): object[] { return require('assets/config/element-ui/calendar.config.json').code.jiBen }
  get ziDingYiNeiRong(): object[] { return require('assets/config/element-ui/calendar.config.json').code.ziDingYiNeiRong }
  get ziDingYiFanWei(): object[] { return require('assets/config/element-ui/calendar.config.json').code.ziDingYiFanWei }
  get attributes(): object[] { return require('assets/config/element-ui/calendar.config.json').attributes }
}
</script>