<template>
  <div class="page-container">
    <h2 id="header">InputNumber 计数器</h2>
    <p>仅允许输入标准的数字值，可定义范围</p>
    <h3 id="ji-chu-yong-fa">基础用法</h3>
    <demo-block>
      <template v-slot:source>
        <JiChuYongFa />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jiChuYongFa" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="jin-yong-zhuang-tai">禁用状态</h3>
    <demo-block>
      <template v-slot:source>
        <JinYongZhuangTai />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jinYongZhuangTai" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="bu-shu">步数</h3>
    <p>允许定义递增递减的步数控制</p>
    <demo-block>
      <template v-slot:source>
        <BuShu />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in buShu" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="yan-ge-bu-shu">严格步数</h3>
    <demo-block>
      <template v-slot:source>
        <YanGeBuShu />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in yanGeBuShu" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="jing-du">精度</h3>
    <demo-block>
      <template v-slot:source>
        <JingDu />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jingDu" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <div class="tip" style=""><p><code>precision</code> 的值必须是一个非负整数，并且不能小于 <code>step</code> 的小数位数。</p></div>
    <h3 id="chi-cun">尺寸</h3>
    <p>额外提供了 <code>medium</code>、<code>small</code>、<code>mini</code> 三种尺寸的数字输入框</p>
    <demo-block>
      <template v-slot:source>
        <ChiCun />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in chiCun" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="an-niu-wei-zhi">按钮位置</h3>
    <demo-block>
      <template v-slot:source>
        <AnNiuWeiZhi />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in anNiuWeiZhi" :key="index" :type="item.type" :code="item.data" /></template>
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
      <page-navigation-item target="ji-chu-yong-fa">基础用法</page-navigation-item>
      <page-navigation-item target="jin-yong-zhuang-tai">禁用状态</page-navigation-item>
      <page-navigation-item target="bu-shu">步数</page-navigation-item>
      <page-navigation-item target="yan-ge-bu-shu">严格步数</page-navigation-item>
      <page-navigation-item target="jing-du">精度</page-navigation-item>
      <page-navigation-item target="chi-cun">尺寸</page-navigation-item>
      <page-navigation-item target="an-niu-wei-zhi">按钮位置</page-navigation-item>
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
import JiChuYongFa from './components/input-number/JiChuYongFa.vue'
import JinYongZhuangTai from './components/input-number/JinYongZhuangTai.vue'
import BuShu from './components/input-number/BuShu.vue'
import YanGeBuShu from './components/input-number/YanGeBuShu.vue'
import JingDu from './components/input-number/JingDu.vue'
import ChiCun from './components/input-number/ChiCun.vue'
import AnNiuWeiZhi from './components/input-number/AnNiuWeiZhi.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, JiChuYongFa, JinYongZhuangTai, BuShu, YanGeBuShu, JingDu, ChiCun, AnNiuWeiZhi }})
export default class InputNumberView extends Vue {
  get jiChuYongFa(): object[] { return require('assets/config/element-ui/input-number.config.json').code.jiChuYongFa }
  get jinYongZhuangTai(): object[] { return require('assets/config/element-ui/input-number.config.json').code.jinYongZhuangTai }
  get buShu(): object[] { return require('assets/config/element-ui/input-number.config.json').code.buShu }
  get yanGeBuShu(): object[] { return require('assets/config/element-ui/input-number.config.json').code.yanGeBuShu }
  get jingDu(): object[] { return require('assets/config/element-ui/input-number.config.json').code.jingDu }
  get chiCun(): object[] { return require('assets/config/element-ui/input-number.config.json').code.chiCun }
  get anNiuWeiZhi(): object[] { return require('assets/config/element-ui/input-number.config.json').code.anNiuWeiZhi }
  get attributes(): object[] { return require('assets/config/element-ui/input-number.config.json').attributes }
  get events(): object[] { return require('assets/config/element-ui/input-number.config.json').events }
  get methods(): object[] { return require('assets/config/element-ui/input-number.config.json').methods }
}
</script>