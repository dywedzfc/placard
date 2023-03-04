<template>
  <div class="page-container">
    <h2 id="header">Timeline 时间线</h2>
    <p>可视化地呈现时间流信息。</p>
    <h3 id="ji-chu-yong-fa">基础用法</h3>
    <p>Timeline 可拆分成多个按照时间戳正序或倒序排列的 activity，时间戳是其区分于其他控件的重要特征，使⽤时注意与 Steps 步骤条等区分。</p>
    <demo-block>
      <template v-slot:source>
        <JiChuYongFa />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jiChuYongFa" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="ding-yi-jie-dian-yang-shi">⾃定义节点样式</h3>
    <p>可根据实际场景⾃定义节点尺⼨、颜⾊，或直接使⽤图标。</p>
    <demo-block>
      <template v-slot:source>
        <DingYiJieDianYangShi />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in dingYiJieDianYangShi" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="ding-yi-shi-jian-chuo">⾃定义时间戳</h3>
    <p>当内容在垂直⽅向上过⾼时，可将时间戳置于内容之上。</p>
    <demo-block>
      <template v-slot:source>
        <DingYiShiJianChuo />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in dingYiShiJianChuo" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="timeline-attributes">Timeline Attributes</h3>
    <table-props :data="timelineAttributes" />
    <h3 id="timeline-item-attributes">Timeline-item Attributes</h3>
    <table-props :data="timelineItemAttributes" />
    <h3 id="timeline-item-slot">Timeline-Item Slot</h3>
    <table-slot :data="timelineItemSlot" />
    <br />
    <br />
    <br />

    <page-navigation target="header">
      <page-navigation-item target="ji-chu-yong-fa">基础用法</page-navigation-item>
      <page-navigation-item target="ding-yi-jie-dian-yang-shi">⾃定义节点样式</page-navigation-item>
      <page-navigation-item target="ding-yi-shi-jian-chuo">⾃定义时间戳</page-navigation-item>
      <page-navigation-item target="timeline-attributes">Timeline Attributes</page-navigation-item>
      <page-navigation-item target="timeline-item-attributes">Timeline-item Attributes</page-navigation-item>
      <page-navigation-item target="timeline-item-slot">Timeline-Item Slot</page-navigation-item>
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
import JiChuYongFa from './components/timeline/JiChuYongFa.vue'
import DingYiJieDianYangShi from './components/timeline/DingYiJieDianYangShi.vue'
import DingYiShiJianChuo from './components/timeline/DingYiShiJianChuo.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, JiChuYongFa, DingYiJieDianYangShi, DingYiShiJianChuo }})
export default class TimelineView extends Vue {
  get jiChuYongFa(): object[] { return require('assets/config/element-ui/timeline.config.json').code.jiChuYongFa }
  get dingYiJieDianYangShi(): object[] { return require('assets/config/element-ui/timeline.config.json').code.dingYiJieDianYangShi }
  get dingYiShiJianChuo(): object[] { return require('assets/config/element-ui/timeline.config.json').code.dingYiShiJianChuo }
  get timelineAttributes(): object[] { return require('assets/config/element-ui/timeline.config.json').timelineAttributes }
  get timelineItemAttributes(): object[] { return require('assets/config/element-ui/timeline.config.json').timelineItemAttributes }
  get timelineItemSlot(): object[] { return require('assets/config/element-ui/timeline.config.json').timelineItemSlot }
}
</script>