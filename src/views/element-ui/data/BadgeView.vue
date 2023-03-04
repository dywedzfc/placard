<template>
  <div class="page-container">
    <h2 id="header">Badge 标记</h2>
    <p>出现在按钮、图标旁的数字或状态标记。</p>
    <h3 id="ji-chu-yong-fa">基础用法</h3>
    <p>展示新消息数量。</p>
    <demo-block>
      <template v-slot:source>
        <JiChuYongFa />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jiChuYongFa" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="zui-da-zhi">最大值</h3>
    <p>可自定义最大值。</p>
    <demo-block>
      <template v-slot:source>
        <ZuiDaZhi />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in zuiDaZhi" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="zi-ding-yi-nei-rong">自定义内容</h3>
    <p>可以显示数字以外的文本内容。</p>
    <demo-block>
      <template v-slot:source>
        <ZiDingYiNeiRong />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in ziDingYiNeiRong" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="xiao-hong-dian">小红点</h3>
    <p>以红点的形式标注需要关注的内容。</p>
    <demo-block>
      <template v-slot:source>
        <XiaoHongDian />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in xiaoHongDian" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="attributes">Attributes</h3>
    <table-props :data="attributes" />
    <br />
    <br />
    <br />

    <page-navigation target="header">
      <page-navigation-item target="ji-chu-yong-fa">基础用法</page-navigation-item>
      <page-navigation-item target="zui-da-zhi">最大值</page-navigation-item>
      <page-navigation-item target="zi-ding-yi-nei-rong">自定义内容</page-navigation-item>
      <page-navigation-item target="xiao-hong-dian">小红点</page-navigation-item>
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
import JiChuYongFa from './components/badge/JiChuYongFa.vue'
import ZuiDaZhi from './components/badge/ZuiDaZhi.vue'
import ZiDingYiNeiRong from './components/badge/ZiDingYiNeiRong.vue'
import XiaoHongDian from './components/badge/XiaoHongDian.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, JiChuYongFa, ZuiDaZhi, ZiDingYiNeiRong, XiaoHongDian }})
export default class BadgeView extends Vue {
  get jiChuYongFa(): object[] { return require('assets/config/element-ui/badge.config.json').code.jiChuYongFa }
  get zuiDaZhi(): object[] { return require('assets/config/element-ui/badge.config.json').code.zuiDaZhi }
  get ziDingYiNeiRong(): object[] { return require('assets/config/element-ui/badge.config.json').code.ziDingYiNeiRong }
  get xiaoHongDian(): object[] { return require('assets/config/element-ui/badge.config.json').code.xiaoHongDian }
  get attributes(): object[] { return require('assets/config/element-ui/badge.config.json').attributes }
}
</script>