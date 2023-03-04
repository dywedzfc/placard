<template>
  <div class="page-container">
    <h2 id="header">Layout 布局</h2>
    <p>通过基础的 24 分栏，迅速简便地创建布局。</p>
    <h3 id="ji-chu-bu-ju">基础布局</h3>
    <p>使用单一分栏创建基础的栅格布局。</p>
    <demo-block>
      <template v-slot:source>
        <JiChuBuJu />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jiChuBuJu" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="fen-lan-jian-ge">分栏间隔</h3>
    <p>分栏之间存在间隔。</p>
    <demo-block>
      <template v-slot:source>
        <FenLanJianGe />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in fenLanJianGe" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="hun-he-bu-ju">混合布局</h3>
    <p>通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。</p>
    <demo-block>
      <template v-slot:source>
        <HunHeBuJu />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in hunHeBuJu" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="fen-lan-pian-yi">分栏偏移</h3>
    <p>支持偏移指定的栏数。</p>
    <demo-block>
      <template v-slot:source>
        <FenLanPianYi />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in fenLanPianYi" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="dui-qi-fang-shi">对齐方式</h3>
    <p>通过 <code>flex</code> 布局来对分栏进行灵活的对齐。</p>
    <demo-block>
      <template v-slot:source>
        <DuiQiFangShi />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in duiQiFangShi" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="xiang-ying-shi-bu-ju">响应式布局</h3>
    <p>参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：<code>xs</code>、<code>sm</code>、<code>md</code>、<code>lg</code> 和 <code>xl</code>。</p>
    <demo-block>
      <template v-slot:source>
        <XiangYingShiBuJu />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in xiangYingShiBuJu" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="ji-yu-duan-dian-de-yin-cang-lei">基于断点的隐藏类</h3>
    <p>Element 额外提供了一系列类名，用于在某些条件下隐藏元素。这些类名可以添加在任何 DOM 元素或自定义组件上。如果需要，请自行引入以下文件：</p>
    <p>包含的类名及其含义为：</p>
    <h3 id="row-attributes">Row Attributes</h3>
    <table-props :data="rowAttributes" />
    <h3 id="col-attributes">Col Attributes</h3>
    <table-props :data="colAttributes" />
    <br />
    <br />
    <br />

    <page-navigation target="header">
      <page-navigation-item target="ji-chu-bu-ju">基础布局</page-navigation-item>
      <page-navigation-item target="fen-lan-jian-ge">分栏间隔</page-navigation-item>
      <page-navigation-item target="hun-he-bu-ju">混合布局</page-navigation-item>
      <page-navigation-item target="fen-lan-pian-yi">分栏偏移</page-navigation-item>
      <page-navigation-item target="dui-qi-fang-shi">对齐方式</page-navigation-item>
      <page-navigation-item target="xiang-ying-shi-bu-ju">响应式布局</page-navigation-item>
      <page-navigation-item target="ji-yu-duan-dian-de-yin-cang-lei">基于断点的隐藏类</page-navigation-item>
      <page-navigation-item target="row-attributes">Row Attributes</page-navigation-item>
      <page-navigation-item target="col-attributes">Col Attributes</page-navigation-item>
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
import JiChuBuJu from './components/layout/JiChuBuJu.vue'
import FenLanJianGe from './components/layout/FenLanJianGe.vue'
import HunHeBuJu from './components/layout/HunHeBuJu.vue'
import FenLanPianYi from './components/layout/FenLanPianYi.vue'
import DuiQiFangShi from './components/layout/DuiQiFangShi.vue'
import XiangYingShiBuJu from './components/layout/XiangYingShiBuJu.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, JiChuBuJu, FenLanJianGe, HunHeBuJu, FenLanPianYi, DuiQiFangShi, XiangYingShiBuJu }})
export default class LayoutView extends Vue {
  get jiChuBuJu(): object[] { return require('assets/config/element-ui/layout.config.json').code.jiChuBuJu }
  get fenLanJianGe(): object[] { return require('assets/config/element-ui/layout.config.json').code.fenLanJianGe }
  get hunHeBuJu(): object[] { return require('assets/config/element-ui/layout.config.json').code.hunHeBuJu }
  get fenLanPianYi(): object[] { return require('assets/config/element-ui/layout.config.json').code.fenLanPianYi }
  get duiQiFangShi(): object[] { return require('assets/config/element-ui/layout.config.json').code.duiQiFangShi }
  get xiangYingShiBuJu(): object[] { return require('assets/config/element-ui/layout.config.json').code.xiangYingShiBuJu }
  get rowAttributes(): object[] { return require('assets/config/element-ui/layout.config.json').rowAttributes }
  get colAttributes(): object[] { return require('assets/config/element-ui/layout.config.json').colAttributes }
}
</script>