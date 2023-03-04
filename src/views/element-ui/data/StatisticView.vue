<template>
  <div class="page-container">
    <h2 id="header">Statistic 统计数值</h2>
    <p>用于突出某个或某组数字时，如显示数值，如金额，排名等。</p>
    <p>倒计时模式</p>
    <h3 id="ji-chu-yong-fa">基础用法</h3>
    <p>组件提供千分位的展示，不过可以通过 rate 来设置相应万分位等</p>
    <demo-block>
      <template v-slot:source>
        <JiChuYongFa />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jiChuYongFa" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="dao-ji-shi">倒计时</h3>
    <div class="warning" style=""><p>如果需要在原基础上添加时间，请注意：整体的时间（添加的时间量和原定时间）必须是<strong>未来</strong>的时间节点，否则依旧是倒计时结束</p></div>
    <demo-block>
      <template v-slot:source>
        <DaoJiShi />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in daoJiShi" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="statistic-attributes">Statistic Attributes</h3>
    <table-props :data="statisticAttributes" />
    <h3 id="statistic-slots">Statistic Slots</h3>
    <table-slot :data="statisticSlots" />
    <h3 id="statistic-countdown-attributes">Statistic.Countdown Attributes</h3>
    <table-props :data="statisticCountdownAttributes" />
    <h3 id="statistic-countdown-events">Statistic.Countdown Events</h3>
    <table-events :data="statisticCountdownEvents" />
    <h3 id="statistic-methods">Statistic Methods</h3>
    <table-methods :data="statisticMethods" />
    <br />
    <br />
    <br />

    <page-navigation target="header">
      <page-navigation-item target="ji-chu-yong-fa">基础用法</page-navigation-item>
      <page-navigation-item target="dao-ji-shi">倒计时</page-navigation-item>
      <page-navigation-item target="statistic-attributes">Statistic Attributes</page-navigation-item>
      <page-navigation-item target="statistic-slots">Statistic Slots</page-navigation-item>
      <page-navigation-item target="statistic-countdown-attributes">Statistic.Countdown Attributes</page-navigation-item>
      <page-navigation-item target="statistic-countdown-events">Statistic.Countdown Events</page-navigation-item>
      <page-navigation-item target="statistic-methods">Statistic Methods</page-navigation-item>
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
import JiChuYongFa from './components/statistic/JiChuYongFa.vue'
import DaoJiShi from './components/statistic/DaoJiShi.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, JiChuYongFa, DaoJiShi }})
export default class StatisticView extends Vue {
  get jiChuYongFa(): object[] { return require('assets/config/element-ui/statistic.config.json').code.jiChuYongFa }
  get daoJiShi(): object[] { return require('assets/config/element-ui/statistic.config.json').code.daoJiShi }
  get statisticAttributes(): object[] { return require('assets/config/element-ui/statistic.config.json').statisticAttributes }
  get statisticSlots(): object[] { return require('assets/config/element-ui/statistic.config.json').statisticSlots }
  get statisticCountdownAttributes(): object[] { return require('assets/config/element-ui/statistic.config.json').statisticCountdownAttributes }
  get statisticCountdownEvents(): object[] { return require('assets/config/element-ui/statistic.config.json').statisticCountdownEvents }
  get statisticMethods(): object[] { return require('assets/config/element-ui/statistic.config.json').statisticMethods }
}
</script>