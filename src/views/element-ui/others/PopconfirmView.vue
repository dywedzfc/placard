<template>
  <div class="page-container">
    <h2 id="header">Popconfirm 气泡确认框</h2>
    <p>点击元素，弹出气泡确认框。</p>
    <h3 id="ji-chu-yong-fa">基础用法</h3>
    <p>Popconfirm 的属性与 Popover 很类似，因此对于重复属性，请参考 Popover 的文档，在此文档中不做详尽解释。</p>
    <demo-block>
      <template v-slot:source>
        <JiChuYongFa />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jiChuYongFa" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="zi-ding-yi">自定义</h3>
    <p>可以在 Popconfirm 中自定义内容。</p>
    <demo-block>
      <template v-slot:source>
        <ZiDingYi />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in ziDingYi" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="attributes">Attributes</h3>
    <table-props :data="attributes" />
    <h3 id="slot">Slot</h3>
    <table-slot :data="slot" />
    <h3 id="events">Events</h3>
    <table-events :data="events" />
    <br />
    <br />
    <br />

    <page-navigation target="header">
      <page-navigation-item target="ji-chu-yong-fa">基础用法</page-navigation-item>
      <page-navigation-item target="zi-ding-yi">自定义</page-navigation-item>
      <page-navigation-item target="attributes">Attributes</page-navigation-item>
      <page-navigation-item target="slot">Slot</page-navigation-item>
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
import JiChuYongFa from './components/popconfirm/JiChuYongFa.vue'
import ZiDingYi from './components/popconfirm/ZiDingYi.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, JiChuYongFa, ZiDingYi }})
export default class PopconfirmView extends Vue {
  get jiChuYongFa(): object[] { return require('assets/config/element-ui/popconfirm.config.json').code.jiChuYongFa }
  get ziDingYi(): object[] { return require('assets/config/element-ui/popconfirm.config.json').code.ziDingYi }
  get attributes(): object[] { return require('assets/config/element-ui/popconfirm.config.json').attributes }
  get slot(): object[] { return require('assets/config/element-ui/popconfirm.config.json').slot }
  get events(): object[] { return require('assets/config/element-ui/popconfirm.config.json').events }
}
</script>