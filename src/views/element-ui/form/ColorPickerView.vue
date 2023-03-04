<template>
  <div class="page-container">
    <h2 id="header">ColorPicker 颜色选择器</h2>
    <p>用于颜色选择，支持多种格式。</p>
    <h3 id="ji-chu-yong-fa">基础用法</h3>
    <demo-block>
      <template v-slot:source>
        <JiChuYongFa />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jiChuYongFa" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="xuan-ze-tou-ming-du">选择透明度</h3>
    <demo-block>
      <template v-slot:source>
        <XuanZeTouMingDu />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in xuanZeTouMingDu" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="yu-ding-yi-yan-se">预定义颜色</h3>
    <demo-block>
      <template v-slot:source>
        <YuDingYiYanSe />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in yuDingYiYanSe" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="bu-tong-chi-cun">不同尺寸</h3>
    <demo-block>
      <template v-slot:source>
        <BuTongChiCun />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in buTongChiCun" :key="index" :type="item.type" :code="item.data" /></template>
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
      <page-navigation-item target="xuan-ze-tou-ming-du">选择透明度</page-navigation-item>
      <page-navigation-item target="yu-ding-yi-yan-se">预定义颜色</page-navigation-item>
      <page-navigation-item target="bu-tong-chi-cun">不同尺寸</page-navigation-item>
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
import JiChuYongFa from './components/color-picker/JiChuYongFa.vue'
import XuanZeTouMingDu from './components/color-picker/XuanZeTouMingDu.vue'
import YuDingYiYanSe from './components/color-picker/YuDingYiYanSe.vue'
import BuTongChiCun from './components/color-picker/BuTongChiCun.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, JiChuYongFa, XuanZeTouMingDu, YuDingYiYanSe, BuTongChiCun }})
export default class ColorPickerView extends Vue {
  get jiChuYongFa(): object[] { return require('assets/config/element-ui/color-picker.config.json').code.jiChuYongFa }
  get xuanZeTouMingDu(): object[] { return require('assets/config/element-ui/color-picker.config.json').code.xuanZeTouMingDu }
  get yuDingYiYanSe(): object[] { return require('assets/config/element-ui/color-picker.config.json').code.yuDingYiYanSe }
  get buTongChiCun(): object[] { return require('assets/config/element-ui/color-picker.config.json').code.buTongChiCun }
  get attributes(): object[] { return require('assets/config/element-ui/color-picker.config.json').attributes }
  get events(): object[] { return require('assets/config/element-ui/color-picker.config.json').events }
}
</script>