<template>
  <div class="page-container">
    <h2 id="header">TimePicker 时间选择器</h2>
    <p>用于选择或输入时间</p>
    <h3 id="gu-ding-shi-jian-dian">固定时间点</h3>
    <p>提供几个固定的时间点供用户选择</p>
    <demo-block>
      <template v-slot:source>
        <GuDingShiJianDian />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in guDingShiJianDian" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="ren-yi-shi-jian-dian">任意时间点</h3>
    <p>可以选择任意时间</p>
    <demo-block>
      <template v-slot:source>
        <RenYiShiJianDian />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in renYiShiJianDian" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="gu-ding-shi-jian-fan-wei">固定时间范围</h3>
    <p>若先选择开始时间，则结束时间内备选项的状态会随之改变</p>
    <demo-block>
      <template v-slot:source>
        <GuDingShiJianFanWei />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in guDingShiJianFanWei" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="ren-yi-shi-jian-fan-wei">任意时间范围</h3>
    <p>可选择任意的时间范围</p>
    <demo-block>
      <template v-slot:source>
        <RenYiShiJianFanWei />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in renYiShiJianFanWei" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="attributes">Attributes</h3>
    <table-props :data="attributes" />
    <h3 id="time-select-options">Time Select Options</h3>
    <table-props :data="timeSelectOptions" />
    <h3 id="time-picker-options">Time Picker Options</h3>
    <table-props :data="timePickerOptions" />
    <h3 id="events">Events</h3>
    <table-events :data="events" />
    <h3 id="methods">Methods</h3>
    <table-methods :data="methods" />
    <br />
    <br />
    <br />

    <page-navigation target="header">
      <page-navigation-item target="gu-ding-shi-jian-dian">固定时间点</page-navigation-item>
      <page-navigation-item target="ren-yi-shi-jian-dian">任意时间点</page-navigation-item>
      <page-navigation-item target="gu-ding-shi-jian-fan-wei">固定时间范围</page-navigation-item>
      <page-navigation-item target="ren-yi-shi-jian-fan-wei">任意时间范围</page-navigation-item>
      <page-navigation-item target="attributes">Attributes</page-navigation-item>
      <page-navigation-item target="time-select-options">Time Select Options</page-navigation-item>
      <page-navigation-item target="time-picker-options">Time Picker Options</page-navigation-item>
      <page-navigation-item target="events">Events</page-navigation-item>
      <page-navigation-item target="methods">Methods</page-navigation-item>
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
import GuDingShiJianDian from './components/time-picker/GuDingShiJianDian.vue'
import RenYiShiJianDian from './components/time-picker/RenYiShiJianDian.vue'
import GuDingShiJianFanWei from './components/time-picker/GuDingShiJianFanWei.vue'
import RenYiShiJianFanWei from './components/time-picker/RenYiShiJianFanWei.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, GuDingShiJianDian, RenYiShiJianDian, GuDingShiJianFanWei, RenYiShiJianFanWei }})
export default class TimePickerView extends Vue {
  get guDingShiJianDian(): object[] { return require('assets/config/element-ui/time-picker.config.json').code.guDingShiJianDian }
  get renYiShiJianDian(): object[] { return require('assets/config/element-ui/time-picker.config.json').code.renYiShiJianDian }
  get guDingShiJianFanWei(): object[] { return require('assets/config/element-ui/time-picker.config.json').code.guDingShiJianFanWei }
  get renYiShiJianFanWei(): object[] { return require('assets/config/element-ui/time-picker.config.json').code.renYiShiJianFanWei }
  get attributes(): object[] { return require('assets/config/element-ui/time-picker.config.json').attributes }
  get timeSelectOptions(): object[] { return require('assets/config/element-ui/time-picker.config.json').timeSelectOptions }
  get timePickerOptions(): object[] { return require('assets/config/element-ui/time-picker.config.json').timePickerOptions }
  get events(): object[] { return require('assets/config/element-ui/time-picker.config.json').events }
  get methods(): object[] { return require('assets/config/element-ui/time-picker.config.json').methods }
}
</script>