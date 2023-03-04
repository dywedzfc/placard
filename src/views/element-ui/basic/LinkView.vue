<template>
  <div class="page-container">
    <h2 id="header">Link 文字链接</h2>
    <p>文字超链接</p>
    <h3 id="ji-chu-yong-fa">基础用法</h3>
    <p>基础的文字链接用法。</p>
    <demo-block>
      <template v-slot:source>
        <JiChuYongFa />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jiChuYongFa" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="jin-yong-zhuang-tai">禁用状态</h3>
    <p>文字链接不可用状态。</p>
    <demo-block>
      <template v-slot:source>
        <JinYongZhuangTai />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jinYongZhuangTai" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="xia-hua-xian">下划线</h3>
    <p>文字链接下划线。</p>
    <demo-block>
      <template v-slot:source>
        <XiaHuaXian />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in xiaHuaXian" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="tu-biao">图标</h3>
    <p>带图标的文字链接可增强辨识度。</p>
    <demo-block>
      <template v-slot:source>
        <TuBiao />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in tuBiao" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="attributes">Attributes</h3>
    <table-props :data="attributes" />
    <br />
    <br />
    <br />

    <page-navigation target="header">
      <page-navigation-item target="ji-chu-yong-fa">基础用法</page-navigation-item>
      <page-navigation-item target="jin-yong-zhuang-tai">禁用状态</page-navigation-item>
      <page-navigation-item target="xia-hua-xian">下划线</page-navigation-item>
      <page-navigation-item target="tu-biao">图标</page-navigation-item>
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
import JiChuYongFa from './components/link/JiChuYongFa.vue'
import JinYongZhuangTai from './components/link/JinYongZhuangTai.vue'
import XiaHuaXian from './components/link/XiaHuaXian.vue'
import TuBiao from './components/link/TuBiao.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, JiChuYongFa, JinYongZhuangTai, XiaHuaXian, TuBiao }})
export default class LinkView extends Vue {
  get jiChuYongFa(): object[] { return require('assets/config/element-ui/link.config.json').code.jiChuYongFa }
  get jinYongZhuangTai(): object[] { return require('assets/config/element-ui/link.config.json').code.jinYongZhuangTai }
  get xiaHuaXian(): object[] { return require('assets/config/element-ui/link.config.json').code.xiaHuaXian }
  get tuBiao(): object[] { return require('assets/config/element-ui/link.config.json').code.tuBiao }
  get attributes(): object[] { return require('assets/config/element-ui/link.config.json').attributes }
}
</script>