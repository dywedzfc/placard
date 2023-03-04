<template>
  <div class="page-container">
    <h2 id="header">Popover 弹出框</h2>
    <h3 id="ji-chu-yong-fa">基础用法</h3>
    <p>Popover 的属性与 Tooltip 很类似，它们都是基于<code>Vue-popper</code>开发的，因此对于重复属性，请参考 Tooltip 的文档，在此文档中不做详尽解释。</p>
    <demo-block>
      <template v-slot:source>
        <JiChuYongFa />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jiChuYongFa" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="qian-tao-xin-xi">嵌套信息</h3>
    <p>可以在 Popover 中嵌套多种类型信息，以下为嵌套表格的例子。</p>
    <demo-block>
      <template v-slot:source>
        <QianTaoXinXi />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in qianTaoXinXi" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="qian-tao-cao-zuo">嵌套操作</h3>
    <p>当然，你还可以嵌套操作，这相比 Dialog 更为轻量：</p>
    <demo-block>
      <template v-slot:source>
        <QianTaoCaoZuo />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in qianTaoCaoZuo" :key="index" :type="item.type" :code="item.data" /></template>
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
      <page-navigation-item target="qian-tao-xin-xi">嵌套信息</page-navigation-item>
      <page-navigation-item target="qian-tao-cao-zuo">嵌套操作</page-navigation-item>
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
import JiChuYongFa from './components/popover/JiChuYongFa.vue'
import QianTaoXinXi from './components/popover/QianTaoXinXi.vue'
import QianTaoCaoZuo from './components/popover/QianTaoCaoZuo.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, JiChuYongFa, QianTaoXinXi, QianTaoCaoZuo }})
export default class PopoverView extends Vue {
  get jiChuYongFa(): object[] { return require('assets/config/element-ui/popover.config.json').code.jiChuYongFa }
  get qianTaoXinXi(): object[] { return require('assets/config/element-ui/popover.config.json').code.qianTaoXinXi }
  get qianTaoCaoZuo(): object[] { return require('assets/config/element-ui/popover.config.json').code.qianTaoCaoZuo }
  get attributes(): object[] { return require('assets/config/element-ui/popover.config.json').attributes }
  get slot(): object[] { return require('assets/config/element-ui/popover.config.json').slot }
  get events(): object[] { return require('assets/config/element-ui/popover.config.json').events }
}
</script>