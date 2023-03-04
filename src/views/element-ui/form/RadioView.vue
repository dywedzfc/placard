<template>
  <div class="page-container">
    <h2 id="header">Radio 单选框</h2>
    <p>在一组备选项中进行单选</p>
    <h3 id="ji-chu-yong-fa">基础用法</h3>
    <p>由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。</p>
    <demo-block>
      <template v-slot:source>
        <JiChuYongFa />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jiChuYongFa" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="jin-yong-zhuang-tai">禁用状态</h3>
    <p>单选框不可用的状态。</p>
    <demo-block>
      <template v-slot:source>
        <JinYongZhuangTai />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jinYongZhuangTai" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="dan-xuan-kuang-zu">单选框组</h3>
    <p>适用于在多个互斥的选项中选择的场景</p>
    <demo-block>
      <template v-slot:source>
        <DanXuanKuangZu />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in danXuanKuangZu" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="an-niu-yang-shi">按钮样式</h3>
    <p>按钮样式的单选组合。</p>
    <demo-block>
      <template v-slot:source>
        <AnNiuYangShi />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in anNiuYangShi" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="dai-you-bian-kuang">带有边框</h3>
    <demo-block>
      <template v-slot:source>
        <DaiYouBianKuang />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in daiYouBianKuang" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="radio-attributes">Radio Attributes</h3>
    <table-props :data="radioAttributes" />
    <h3 id="radio-events">Radio Events</h3>
    <table-events :data="radioEvents" />
    <h3 id="radio-group-attributes">Radio-group Attributes</h3>
    <table-props :data="radioGroupAttributes" />
    <h3 id="radio-group-events">Radio-group Events</h3>
    <table-events :data="radioGroupEvents" />
    <h3 id="radio-button-attributes">Radio-button Attributes</h3>
    <table-props :data="radioButtonAttributes" />
    <br />
    <br />
    <br />

    <page-navigation target="header">
      <page-navigation-item target="ji-chu-yong-fa">基础用法</page-navigation-item>
      <page-navigation-item target="jin-yong-zhuang-tai">禁用状态</page-navigation-item>
      <page-navigation-item target="dan-xuan-kuang-zu">单选框组</page-navigation-item>
      <page-navigation-item target="an-niu-yang-shi">按钮样式</page-navigation-item>
      <page-navigation-item target="dai-you-bian-kuang">带有边框</page-navigation-item>
      <page-navigation-item target="radio-attributes">Radio Attributes</page-navigation-item>
      <page-navigation-item target="radio-events">Radio Events</page-navigation-item>
      <page-navigation-item target="radio-group-attributes">Radio-group Attributes</page-navigation-item>
      <page-navigation-item target="radio-group-events">Radio-group Events</page-navigation-item>
      <page-navigation-item target="radio-button-attributes">Radio-button Attributes</page-navigation-item>
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
import JiChuYongFa from './components/radio/JiChuYongFa.vue'
import JinYongZhuangTai from './components/radio/JinYongZhuangTai.vue'
import DanXuanKuangZu from './components/radio/DanXuanKuangZu.vue'
import AnNiuYangShi from './components/radio/AnNiuYangShi.vue'
import DaiYouBianKuang from './components/radio/DaiYouBianKuang.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, JiChuYongFa, JinYongZhuangTai, DanXuanKuangZu, AnNiuYangShi, DaiYouBianKuang }})
export default class RadioView extends Vue {
  get jiChuYongFa(): object[] { return require('assets/config/element-ui/radio.config.json').code.jiChuYongFa }
  get jinYongZhuangTai(): object[] { return require('assets/config/element-ui/radio.config.json').code.jinYongZhuangTai }
  get danXuanKuangZu(): object[] { return require('assets/config/element-ui/radio.config.json').code.danXuanKuangZu }
  get anNiuYangShi(): object[] { return require('assets/config/element-ui/radio.config.json').code.anNiuYangShi }
  get daiYouBianKuang(): object[] { return require('assets/config/element-ui/radio.config.json').code.daiYouBianKuang }
  get radioAttributes(): object[] { return require('assets/config/element-ui/radio.config.json').radioAttributes }
  get radioEvents(): object[] { return require('assets/config/element-ui/radio.config.json').radioEvents }
  get radioGroupAttributes(): object[] { return require('assets/config/element-ui/radio.config.json').radioGroupAttributes }
  get radioGroupEvents(): object[] { return require('assets/config/element-ui/radio.config.json').radioGroupEvents }
  get radioButtonAttributes(): object[] { return require('assets/config/element-ui/radio.config.json').radioButtonAttributes }
}
</script>