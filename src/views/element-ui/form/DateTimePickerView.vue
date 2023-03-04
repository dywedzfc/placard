<template>
  <div class="page-container">
    <h2 id="header">DateTimePicker 日期时间选择器</h2>
    <p>在同一个选择器里选择日期和时间</p>
    <div class="tip" style=""><p>DateTimePicker 由 DatePicker 和 TimePicker 派生，<code>Picker Options</code> 或者其他选项可以参照 DatePicker 和 TimePicker。</p></div>
    <h3 id="ri-qi-he-shi-jian-dian">日期和时间点</h3>
    <demo-block>
      <template v-slot:source>
        <RiQiHeShiJianDian />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in riQiHeShiJianDian" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="ri-qi-he-shi-jian-fan-wei">日期和时间范围</h3>
    <demo-block>
      <template v-slot:source>
        <RiQiHeShiJianFanWei />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in riQiHeShiJianFanWei" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="mo-ren-de-qi-shi-yu-jie-shu-shi-ke">默认的起始与结束时刻</h3>
    <demo-block>
      <template v-slot:source>
        <MoRenDeQiShiYuJieShuShiKe />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in moRenDeQiShiYuJieShuShiKe" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="attributes">Attributes</h3>
    <table-props :data="attributes" />
    <h3 id="picker-options">Picker Options</h3>
    <table-props :data="pickerOptions" />
    <h3 id="shortcuts">Shortcuts</h3>
    <table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>text</td><td>标题文本</td><td>string</td><td>—</td><td>—</td></tr><tr><td>onClick</td><td>选中后的回调函数，参数是 vm，可通过触发 'pick' 事件设置选择器的值。例如 vm.$emit('pick', new Date())</td><td>function</td><td>—</td><td>—</td></tr></tbody></table>
    <h3 id="events">Events</h3>
    <table-events :data="events" />
    <h3 id="methods">Methods</h3>
    <table-methods :data="methods" />
    <h3 id="slots">Slots</h3>
    <table-slot :data="slots" />
    <br />
    <br />
    <br />

    <page-navigation target="header">
      <page-navigation-item target="ri-qi-he-shi-jian-dian">日期和时间点</page-navigation-item>
      <page-navigation-item target="ri-qi-he-shi-jian-fan-wei">日期和时间范围</page-navigation-item>
      <page-navigation-item target="mo-ren-de-qi-shi-yu-jie-shu-shi-ke">默认的起始与结束时刻</page-navigation-item>
      <page-navigation-item target="attributes">Attributes</page-navigation-item>
      <page-navigation-item target="picker-options">Picker Options</page-navigation-item>
      <page-navigation-item target="shortcuts">Shortcuts</page-navigation-item>
      <page-navigation-item target="events">Events</page-navigation-item>
      <page-navigation-item target="methods">Methods</page-navigation-item>
      <page-navigation-item target="slots">Slots</page-navigation-item>
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
import RiQiHeShiJianDian from './components/date-time-picker/RiQiHeShiJianDian.vue'
import RiQiHeShiJianFanWei from './components/date-time-picker/RiQiHeShiJianFanWei.vue'
import MoRenDeQiShiYuJieShuShiKe from './components/date-time-picker/MoRenDeQiShiYuJieShuShiKe.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, RiQiHeShiJianDian, RiQiHeShiJianFanWei, MoRenDeQiShiYuJieShuShiKe }})
export default class DateTimePickerView extends Vue {
  get riQiHeShiJianDian(): object[] { return require('assets/config/element-ui/date-time-picker.config.json').code.riQiHeShiJianDian }
  get riQiHeShiJianFanWei(): object[] { return require('assets/config/element-ui/date-time-picker.config.json').code.riQiHeShiJianFanWei }
  get moRenDeQiShiYuJieShuShiKe(): object[] { return require('assets/config/element-ui/date-time-picker.config.json').code.moRenDeQiShiYuJieShuShiKe }
  get attributes(): object[] { return require('assets/config/element-ui/date-time-picker.config.json').attributes }
  get pickerOptions(): object[] { return require('assets/config/element-ui/date-time-picker.config.json').pickerOptions }
  get events(): object[] { return require('assets/config/element-ui/date-time-picker.config.json').events }
  get methods(): object[] { return require('assets/config/element-ui/date-time-picker.config.json').methods }
  get slots(): object[] { return require('assets/config/element-ui/date-time-picker.config.json').slots }
}
</script>