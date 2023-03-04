<template>
  <div class="page-container">
    <h2 id="header">Switch 开关</h2>
    <p>表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>
    <h3 id="ji-ben-yong-fa">基本用法</h3>
    <demo-block>
      <template v-slot:source>
        <JiBenYongFa />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jiBenYongFa" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="wen-zi-miao-shu">文字描述</h3>
    <demo-block>
      <template v-slot:source>
        <WenZiMiaoShu />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in wenZiMiaoShu" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="kuo-zhan-de-value-lei-xing">扩展的 value 类型</h3>
    <demo-block>
      <template v-slot:source>
        <KuoZhanDeValueLeiXing />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in kuoZhanDeValueLeiXing" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="jin-yong-zhuang-tai">禁用状态</h3>
    <demo-block>
      <template v-slot:source>
        <JinYongZhuangTai />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jinYongZhuangTai" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="attributes">Attributes</h3>
    <table-props :data="attributes" />
    <h3 id="events">Events</h3>
    <table-events :data="events" />
    <h3 id="methods">Methods</h3>
    <table-methods :data="methods" />
    <br />
    <br />
    <br />

    <page-navigation target="header">
      <page-navigation-item target="ji-ben-yong-fa">基本用法</page-navigation-item>
      <page-navigation-item target="wen-zi-miao-shu">文字描述</page-navigation-item>
      <page-navigation-item target="kuo-zhan-de-value-lei-xing">扩展的 value 类型</page-navigation-item>
      <page-navigation-item target="jin-yong-zhuang-tai">禁用状态</page-navigation-item>
      <page-navigation-item target="attributes">Attributes</page-navigation-item>
      <page-navigation-item target="events">Events</page-navigation-item>
      <page-navigation-item target="methods">Methods</page-navigation-item>
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
import JiBenYongFa from './components/switch/JiBenYongFa.vue'
import WenZiMiaoShu from './components/switch/WenZiMiaoShu.vue'
import KuoZhanDeValueLeiXing from './components/switch/KuoZhanDeValueLeiXing.vue'
import JinYongZhuangTai from './components/switch/JinYongZhuangTai.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, JiBenYongFa, WenZiMiaoShu, KuoZhanDeValueLeiXing, JinYongZhuangTai }})
export default class SwitchView extends Vue {
  get jiBenYongFa(): object[] { return require('assets/config/element-ui/switch.config.json').code.jiBenYongFa }
  get wenZiMiaoShu(): object[] { return require('assets/config/element-ui/switch.config.json').code.wenZiMiaoShu }
  get kuoZhanDeValueLeiXing(): object[] { return require('assets/config/element-ui/switch.config.json').code.kuoZhanDeValueLeiXing }
  get jinYongZhuangTai(): object[] { return require('assets/config/element-ui/switch.config.json').code.jinYongZhuangTai }
  get attributes(): object[] { return require('assets/config/element-ui/switch.config.json').attributes }
  get events(): object[] { return require('assets/config/element-ui/switch.config.json').events }
  get methods(): object[] { return require('assets/config/element-ui/switch.config.json').methods }
}
</script>