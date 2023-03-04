<template>
  <div class="page-container">
    <h2 id="header">InfiniteScroll 无限滚动</h2>
    <p>滚动至底部时，加载更多数据。</p>
    <h3 id="ji-chu-yong-fa">基础用法</h3>
    <p>在要实现滚动加载的列表上上添加<code>v-infinite-scroll</code>，并赋值相应的加载方法，可实现滚动到底部时自动执行加载方法。</p>
    <demo-block>
      <template v-slot:source>
        <JiChuYongFa />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jiChuYongFa" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="jin-yong-jia-zai">禁用加载</h3>
    <demo-block>
      <template v-slot:source>
        <JinYongJiaZai />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jinYongJiaZai" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="attributes">Attributes</h3>
    <table-props :data="attributes" />
    <br />
    <br />
    <br />

    <page-navigation target="header">
      <page-navigation-item target="ji-chu-yong-fa">基础用法</page-navigation-item>
      <page-navigation-item target="jin-yong-jia-zai">禁用加载</page-navigation-item>
      <page-navigation-item target="attributes">Attributes</page-navigation-item>
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
import JiChuYongFa from './components/infinite-scroll/JiChuYongFa.vue'
import JinYongJiaZai from './components/infinite-scroll/JinYongJiaZai.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, JiChuYongFa, JinYongJiaZai }})
export default class InfiniteScrollView extends Vue {
  get jiChuYongFa(): object[] { return require('assets/config/element-ui/infinite-scroll.config.json').code.jiChuYongFa }
  get jinYongJiaZai(): object[] { return require('assets/config/element-ui/infinite-scroll.config.json').code.jinYongJiaZai }
  get attributes(): object[] { return require('assets/config/element-ui/infinite-scroll.config.json').attributes }
}
</script>