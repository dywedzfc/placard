<template>
  <div class="page-container">
    <h2 id="header">Rate 评分</h2>
    <p>评分组件</p>
    <h3 id="ji-chu-yong-fa">基础用法</h3>
    <demo-block>
      <template v-slot:source>
        <JiChuYongFa />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jiChuYongFa" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="fu-zhu-wen-zi">辅助文字</h3>
    <p>用辅助文字直接地表达对应分数</p>
    <demo-block>
      <template v-slot:source>
        <FuZhuWenZi />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in fuZhuWenZi" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="qi-ta-icon">其它 icon</h3>
    <p>当有多层评价时，可以用不同类型的 icon 区分评分层级</p>
    <demo-block>
      <template v-slot:source>
        <QiTaIcon />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in qiTaIcon" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="zhi-du">只读</h3>
    <p>只读的评分用来展示分数，允许出现半星</p>
    <demo-block>
      <template v-slot:source>
        <ZhiDu />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in zhiDu" :key="index" :type="item.type" :code="item.data" /></template>
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
      <page-navigation-item target="fu-zhu-wen-zi">辅助文字</page-navigation-item>
      <page-navigation-item target="qi-ta-icon">其它 icon</page-navigation-item>
      <page-navigation-item target="zhi-du">只读</page-navigation-item>
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
import JiChuYongFa from './components/rate/JiChuYongFa.vue'
import FuZhuWenZi from './components/rate/FuZhuWenZi.vue'
import QiTaIcon from './components/rate/QiTaIcon.vue'
import ZhiDu from './components/rate/ZhiDu.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, JiChuYongFa, FuZhuWenZi, QiTaIcon, ZhiDu }})
export default class RateView extends Vue {
  get jiChuYongFa(): object[] { return require('assets/config/element-ui/rate.config.json').code.jiChuYongFa }
  get fuZhuWenZi(): object[] { return require('assets/config/element-ui/rate.config.json').code.fuZhuWenZi }
  get qiTaIcon(): object[] { return require('assets/config/element-ui/rate.config.json').code.qiTaIcon }
  get zhiDu(): object[] { return require('assets/config/element-ui/rate.config.json').code.zhiDu }
  get attributes(): object[] { return require('assets/config/element-ui/rate.config.json').attributes }
  get events(): object[] { return require('assets/config/element-ui/rate.config.json').events }
}
</script>