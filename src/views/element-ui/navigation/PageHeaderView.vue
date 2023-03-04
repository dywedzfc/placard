<template>
  <div class="page-container">
    <h2 id="header">PageHeader 页头</h2>
    <p>如果页面的路径比较简单，推荐使用页头组件而非面包屑组件。</p>
    <h3 id="ji-chu">基础</h3>
    <demo-block>
      <template v-slot:source>
        <JiChu />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jiChu" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="attributes">Attributes</h3>
    <table-props :data="attributes" />
    <h3 id="events">Events</h3>
    <table-events :data="events" />
    <h3 id="slots">Slots</h3>
    <table><thead><tr><th>事件名称</th><th>说明</th></tr></thead><tbody><tr><td>title</td><td>标题内容</td></tr><tr><td>content</td><td>内容</td></tr></tbody></table>
    <br />
    <br />
    <br />

    <page-navigation target="header">
      <page-navigation-item target="ji-chu">基础</page-navigation-item>
      <page-navigation-item target="attributes">Attributes</page-navigation-item>
      <page-navigation-item target="events">Events</page-navigation-item>
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
import JiChu from './components/page-header/JiChu.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, JiChu }})
export default class PageHeaderView extends Vue {
  get jiChu(): object[] { return require('assets/config/element-ui/page-header.config.json').code.jiChu }
  get attributes(): object[] { return require('assets/config/element-ui/page-header.config.json').attributes }
  get events(): object[] { return require('assets/config/element-ui/page-header.config.json').events }
}
</script>