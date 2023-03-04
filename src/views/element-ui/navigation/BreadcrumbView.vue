<template>
  <div class="page-container">
    <h2 id="header">Breadcrumb 面包屑</h2>
    <p>显示当前页面的路径，快速返回之前的任意页面。</p>
    <h3 id="ji-chu-yong-fa">基础用法</h3>
    <p>适用广泛的基础用法。</p>
    <demo-block>
      <template v-slot:source>
        <JiChuYongFa />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jiChuYongFa" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="tu-biao-fen-ge-fu">图标分隔符</h3>
    <demo-block>
      <template v-slot:source>
        <TuBiaoFenGeFu />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in tuBiaoFenGeFu" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="breadcrumb-attributes">Breadcrumb Attributes</h3>
    <table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>separator</td><td>分隔符</td><td>string</td><td>—</td><td>斜杠'/'</td></tr><tr><td>separator-class</td><td>图标分隔符 class</td><td>string</td><td>—</td><td>-</td></tr></tbody></table>
    <h3 id="breadcrumb-item-attributes">Breadcrumb Item Attributes</h3>
    <table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>to</td><td>路由跳转对象，同 <code>vue-router</code> 的 <code>to</code></td><td>string/object</td><td>—</td><td>—</td></tr><tr><td>replace</td><td>在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>
    <br />
    <br />
    <br />

    <page-navigation target="header">
      <page-navigation-item target="ji-chu-yong-fa">基础用法</page-navigation-item>
      <page-navigation-item target="tu-biao-fen-ge-fu">图标分隔符</page-navigation-item>
      <page-navigation-item target="breadcrumb-attributes">Breadcrumb Attributes</page-navigation-item>
      <page-navigation-item target="breadcrumb-item-attributes">Breadcrumb Item Attributes</page-navigation-item>
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
import JiChuYongFa from './components/breadcrumb/JiChuYongFa.vue'
import TuBiaoFenGeFu from './components/breadcrumb/TuBiaoFenGeFu.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, JiChuYongFa, TuBiaoFenGeFu }})
export default class BreadcrumbView extends Vue {
  get jiChuYongFa(): object[] { return require('assets/config/element-ui/breadcrumb.config.json').code.jiChuYongFa }
  get tuBiaoFenGeFu(): object[] { return require('assets/config/element-ui/breadcrumb.config.json').code.tuBiaoFenGeFu }
}
</script>