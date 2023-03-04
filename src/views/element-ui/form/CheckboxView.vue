<template>
  <div class="page-container">
    <h2 id="header">Checkbox 多选框</h2>
    <p>一组备选项中进行多选</p>
    <h3 id="ji-chu-yong-fa">基础用法</h3>
    <p>单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。</p>
    <demo-block>
      <template v-slot:source>
        <JiChuYongFa />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jiChuYongFa" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="jin-yong-zhuang-tai">禁用状态</h3>
    <p>多选框不可用状态。</p>
    <demo-block>
      <template v-slot:source>
        <JinYongZhuangTai />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jinYongZhuangTai" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="duo-xuan-kuang-zu">多选框组</h3>
    <p>适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。</p>
    <demo-block>
      <template v-slot:source>
        <DuoXuanKuangZu />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in duoXuanKuangZu" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="indeterminate-zhuang-tai">indeterminate 状态</h3>
    <p><code>indeterminate</code> 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果</p>
    <demo-block>
      <template v-slot:source>
        <IndeterminateZhuangTai />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in indeterminateZhuangTai" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="ke-xuan-xiang-mu-shu-liang-de-xian-zhi">可选项目数量的限制</h3>
    <p>使用 <code>min</code> 和 <code>max</code> 属性能够限制可以被勾选的项目的数量。</p>
    <demo-block>
      <template v-slot:source>
        <KeXuanXiangMuShuLiangDeXianZhi />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in keXuanXiangMuShuLiangDeXianZhi" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="an-niu-yang-shi">按钮样式</h3>
    <p>按钮样式的多选组合。</p>
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
    <h3 id="checkbox-attributes">Checkbox Attributes</h3>
    <table-props :data="checkboxAttributes" />
    <h3 id="checkbox-events">Checkbox Events</h3>
    <table-events :data="checkboxEvents" />
    <h3 id="checkbox-group-attributes">Checkbox-group Attributes</h3>
    <table-props :data="checkboxGroupAttributes" />
    <h3 id="checkbox-group-events">Checkbox-group Events</h3>
    <table-events :data="checkboxGroupEvents" />
    <h3 id="checkbox-button-attributes">Checkbox-button Attributes</h3>
    <table-props :data="checkboxButtonAttributes" />
    <br />
    <br />
    <br />

    <page-navigation target="header">
      <page-navigation-item target="ji-chu-yong-fa">基础用法</page-navigation-item>
      <page-navigation-item target="jin-yong-zhuang-tai">禁用状态</page-navigation-item>
      <page-navigation-item target="duo-xuan-kuang-zu">多选框组</page-navigation-item>
      <page-navigation-item target="indeterminate-zhuang-tai">indeterminate 状态</page-navigation-item>
      <page-navigation-item target="ke-xuan-xiang-mu-shu-liang-de-xian-zhi">可选项目数量的限制</page-navigation-item>
      <page-navigation-item target="an-niu-yang-shi">按钮样式</page-navigation-item>
      <page-navigation-item target="dai-you-bian-kuang">带有边框</page-navigation-item>
      <page-navigation-item target="checkbox-attributes">Checkbox Attributes</page-navigation-item>
      <page-navigation-item target="checkbox-events">Checkbox Events</page-navigation-item>
      <page-navigation-item target="checkbox-group-attributes">Checkbox-group Attributes</page-navigation-item>
      <page-navigation-item target="checkbox-group-events">Checkbox-group Events</page-navigation-item>
      <page-navigation-item target="checkbox-button-attributes">Checkbox-button Attributes</page-navigation-item>
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
import JiChuYongFa from './components/checkbox/JiChuYongFa.vue'
import JinYongZhuangTai from './components/checkbox/JinYongZhuangTai.vue'
import DuoXuanKuangZu from './components/checkbox/DuoXuanKuangZu.vue'
import IndeterminateZhuangTai from './components/checkbox/IndeterminateZhuangTai.vue'
import KeXuanXiangMuShuLiangDeXianZhi from './components/checkbox/KeXuanXiangMuShuLiangDeXianZhi.vue'
import AnNiuYangShi from './components/checkbox/AnNiuYangShi.vue'
import DaiYouBianKuang from './components/checkbox/DaiYouBianKuang.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, JiChuYongFa, JinYongZhuangTai, DuoXuanKuangZu, IndeterminateZhuangTai, KeXuanXiangMuShuLiangDeXianZhi, AnNiuYangShi, DaiYouBianKuang }})
export default class CheckboxView extends Vue {
  get jiChuYongFa(): object[] { return require('assets/config/element-ui/checkbox.config.json').code.jiChuYongFa }
  get jinYongZhuangTai(): object[] { return require('assets/config/element-ui/checkbox.config.json').code.jinYongZhuangTai }
  get duoXuanKuangZu(): object[] { return require('assets/config/element-ui/checkbox.config.json').code.duoXuanKuangZu }
  get indeterminateZhuangTai(): object[] { return require('assets/config/element-ui/checkbox.config.json').code.indeterminateZhuangTai }
  get keXuanXiangMuShuLiangDeXianZhi(): object[] { return require('assets/config/element-ui/checkbox.config.json').code.keXuanXiangMuShuLiangDeXianZhi }
  get anNiuYangShi(): object[] { return require('assets/config/element-ui/checkbox.config.json').code.anNiuYangShi }
  get daiYouBianKuang(): object[] { return require('assets/config/element-ui/checkbox.config.json').code.daiYouBianKuang }
  get checkboxAttributes(): object[] { return require('assets/config/element-ui/checkbox.config.json').checkboxAttributes }
  get checkboxEvents(): object[] { return require('assets/config/element-ui/checkbox.config.json').checkboxEvents }
  get checkboxGroupAttributes(): object[] { return require('assets/config/element-ui/checkbox.config.json').checkboxGroupAttributes }
  get checkboxGroupEvents(): object[] { return require('assets/config/element-ui/checkbox.config.json').checkboxGroupEvents }
  get checkboxButtonAttributes(): object[] { return require('assets/config/element-ui/checkbox.config.json').checkboxButtonAttributes }
}
</script>