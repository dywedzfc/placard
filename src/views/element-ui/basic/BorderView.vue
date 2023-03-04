<template>
  <div class="page-container">
    <h2 id="header">Border 边框</h2>
    <p>我们对边框进行统一规范，可用于按钮、卡片、弹窗等组件里。</p>
    <h3 id="bian-kuang">边框</h3>
    <p>我们提供了以下几种边框样式，以供选择。</p>
    <table><tbody><tr><td class="text">名称</td><td class="text">粗细</td><td class="line">举例</td></tr><tr><td class="text">实线</td><td class="text">1px</td><td class="line"><div></div></td></tr><tr><td class="text">虚线</td><td class="text">2px</td><td class="line"><div class="dashed"></div></td></tr></tbody></table>
    <h3 id="yuan-jiao">圆角</h3>
    <p>我们提供了以下几种圆角样式，以供选择。</p>
    <div class="demo-radius el-row" style="margin-left: -6px; margin-right: -6px;"><div class="el-col el-col-6 el-col-xs-12" style="padding-left: 6px; padding-right: 6px;"><div class="title">无圆角</div><div class="value">border-radius: 0px</div><div class="radius"></div></div><div class="el-col el-col-6 el-col-xs-12" style="padding-left: 6px; padding-right: 6px;"><div class="title">小圆角</div><div class="value">border-radius: 2px</div><div class="radius" style="border-radius: 2px;"></div></div><div class="el-col el-col-6 el-col-xs-12" style="padding-left: 6px; padding-right: 6px;"><div class="title">大圆角</div><div class="value">border-radius: 4px</div><div class="radius" style="border-radius: 4px;"></div></div><div class="el-col el-col-6 el-col-xs-12" style="padding-left: 6px; padding-right: 6px;"><div class="title">圆形圆角</div><div class="value">border-radius: 30px</div><div class="radius radius-30"></div></div></div>
    <h3 id="tou-ying">投影</h3>
    <p>我们提供了以下几种投影样式，以供选择。</p>
    <div class="demo-shadow" style="box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 4px, rgba(0, 0, 0, 0.04) 0px 0px 6px;"></div>
    <span class="demo-shadow-text">基础投影 box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)</span>
    <div class="demo-shadow" style="box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 12px 0px;"></div>
    <span class="demo-shadow-text">浅色投影 box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)</span>
    <br />
    <br />
    <br />

    <page-navigation target="header">
      <page-navigation-item target="bian-kuang">边框</page-navigation-item>
      <page-navigation-item target="yuan-jiao">圆角</page-navigation-item>
      <page-navigation-item target="tou-ying">投影</page-navigation-item>
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

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem }})
export default class BorderView extends Vue {
}
</script>