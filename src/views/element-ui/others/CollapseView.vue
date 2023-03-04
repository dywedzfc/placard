<template>
  <div class="page-container">
    <h2 id="header">Collapse 折叠面板</h2>
    <p>通过折叠面板收纳内容区域</p>
    <h3 id="ji-chu-yong-fa">基础用法</h3>
    <p>可同时展开多个面板，面板之间不影响</p>
    <demo-block>
      <template v-slot:source>
        <JiChuYongFa />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jiChuYongFa" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="shou-feng-qin-xiao-guo">手风琴效果</h3>
    <p>每次只能展开一个面板</p>
    <demo-block>
      <template v-slot:source>
        <ShouFengQinXiaoGuo />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in shouFengQinXiaoGuo" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="zi-ding-yi-mian-ban-biao-ti">自定义面板标题</h3>
    <p>除了可以通过 <code>title</code> 属性以外，还可以通过具名 <code>slot</code> 来实现自定义面板的标题内容，以实现增加图标等效果。</p>
    <demo-block>
      <template v-slot:source>
        <ZiDingYiMianBanBiaoTi />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in ziDingYiMianBanBiaoTi" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="collapse-attributes">Collapse Attributes</h3>
    <table-props :data="collapseAttributes" />
    <h3 id="collapse-events">Collapse Events</h3>
    <table-events :data="collapseEvents" />
    <h3 id="collapse-item-attributes">Collapse Item Attributes</h3>
    <table-props :data="collapseItemAttributes" />
    <br />
    <br />
    <br />

    <page-navigation target="header">
      <page-navigation-item target="ji-chu-yong-fa">基础用法</page-navigation-item>
      <page-navigation-item target="shou-feng-qin-xiao-guo">手风琴效果</page-navigation-item>
      <page-navigation-item target="zi-ding-yi-mian-ban-biao-ti">自定义面板标题</page-navigation-item>
      <page-navigation-item target="collapse-attributes">Collapse Attributes</page-navigation-item>
      <page-navigation-item target="collapse-events">Collapse Events</page-navigation-item>
      <page-navigation-item target="collapse-item-attributes">Collapse Item Attributes</page-navigation-item>
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
import JiChuYongFa from './components/collapse/JiChuYongFa.vue'
import ShouFengQinXiaoGuo from './components/collapse/ShouFengQinXiaoGuo.vue'
import ZiDingYiMianBanBiaoTi from './components/collapse/ZiDingYiMianBanBiaoTi.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, JiChuYongFa, ShouFengQinXiaoGuo, ZiDingYiMianBanBiaoTi }})
export default class CollapseView extends Vue {
  get jiChuYongFa(): object[] { return require('assets/config/element-ui/collapse.config.json').code.jiChuYongFa }
  get shouFengQinXiaoGuo(): object[] { return require('assets/config/element-ui/collapse.config.json').code.shouFengQinXiaoGuo }
  get ziDingYiMianBanBiaoTi(): object[] { return require('assets/config/element-ui/collapse.config.json').code.ziDingYiMianBanBiaoTi }
  get collapseAttributes(): object[] { return require('assets/config/element-ui/collapse.config.json').collapseAttributes }
  get collapseEvents(): object[] { return require('assets/config/element-ui/collapse.config.json').collapseEvents }
  get collapseItemAttributes(): object[] { return require('assets/config/element-ui/collapse.config.json').collapseItemAttributes }
}
</script>