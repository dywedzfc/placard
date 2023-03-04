<template>
  <div class="page-container">
    <h2 id="header">Input 输入框</h2>
    <p>通过鼠标或键盘输入字符</p>
    <div class="warning" style=""><p>Input 为受控组件，它<strong>总会显示 Vue 绑定值</strong>。</p><p>通常情况下，应当处理 <code>input</code> 事件，并更新组件的绑定值（或使用<code>v-model</code>）。否则，输入框内显示的值将不会改变。</p><p>不支持 <code>v-model</code> 修饰符。</p></div>
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
    <h3 id="ke-qing-kong">可清空</h3>
    <demo-block>
      <template v-slot:source>
        <KeQingKong />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in keQingKong" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="mi-ma-kuang">密码框</h3>
    <demo-block>
      <template v-slot:source>
        <MiMaKuang />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in miMaKuang" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="dai-icon-de-shu-ru-kuang">带 icon 的输入框</h3>
    <p>带有图标标记输入类型</p>
    <demo-block>
      <template v-slot:source>
        <DaiIconDeShuRuKuang />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in daiIconDeShuRuKuang" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="wen-ben-yu">文本域</h3>
    <p>用于输入多行文本信息，通过将 <code>type</code> 属性的值指定为 textarea。</p>
    <demo-block>
      <template v-slot:source>
        <WenBenYu />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in wenBenYu" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="ke-zi-gua-ying-wen-ben-gao-du-de-wen-ben-yu">可自适应文本高度的文本域</h3>
    <p>通过设置 <code>autosize</code> 属性可以使得文本域的高度能够根据文本内容自动进行调整，并且 <code>autosize</code> 还可以设定为一个对象，指定最小行数和最大行数。</p>
    <demo-block>
      <template v-slot:source>
        <KeZiGuaYingWenBenGaoDuDeWenBenYu />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in keZiGuaYingWenBenGaoDuDeWenBenYu" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="fu-he-xing-shu-ru-kuang">复合型输入框</h3>
    <p>可前置或后置元素，一般为标签或按钮</p>
    <demo-block>
      <template v-slot:source>
        <FuHeXingShuRuKuang />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in fuHeXingShuRuKuang" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="chi-cun">尺寸</h3>
    <demo-block>
      <template v-slot:source>
        <ChiCun />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in chiCun" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="dai-shu-ru-jian-yi">带输入建议</h3>
    <p>根据输入内容提供对应的输入建议</p>
    <demo-block>
      <template v-slot:source>
        <DaiShuRuJianYi />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in daiShuRuJianYi" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="zi-ding-yi-mo-ban">自定义模板</h3>
    <p>可自定义输入建议的显示</p>
    <demo-block>
      <template v-slot:source>
        <ZiDingYiMoBan />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in ziDingYiMoBan" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="yuan-cheng-sou-suo">远程搜索</h3>
    <p>从服务端搜索数据</p>
    <demo-block>
      <template v-slot:source>
        <YuanChengSouSuo />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in yuanChengSouSuo" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="shu-ru-chang-du-xian-zhi">输入长度限制</h3>
    <demo-block>
      <template v-slot:source>
        <ShuRuChangDuXianZhi />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in shuRuChangDuXianZhi" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="input-attributes">Input Attributes</h3>
    <table-props :data="inputAttributes" />
    <h3 id="input-slots">Input Slots</h3>
    <table-slot :data="inputSlots" />
    <h3 id="input-events">Input Events</h3>
    <table-events :data="inputEvents" />
    <h3 id="input-methods">Input Methods</h3>
    <table-methods :data="inputMethods" />
    <h3 id="autocomplete-attributes">Autocomplete Attributes</h3>
    <table-props :data="autocompleteAttributes" />
    <h3 id="autocomplete-slots">Autocomplete Slots</h3>
    <table-slot :data="autocompleteSlots" />
    <h3 id="autocomplete-scoped-slot">Autocomplete Scoped Slot</h3>
    <table-slot :data="autocompleteScopedSlot" />
    <h3 id="autocomplete-events">Autocomplete Events</h3>
    <table-events :data="autocompleteEvents" />
    <h3 id="autocomplete-methods">Autocomplete Methods</h3>
    <table-methods :data="autocompleteMethods" />
    <br />
    <br />
    <br />

    <page-navigation target="header">
      <page-navigation-item target="ji-chu-yong-fa">基础用法</page-navigation-item>
      <page-navigation-item target="jin-yong-zhuang-tai">禁用状态</page-navigation-item>
      <page-navigation-item target="ke-qing-kong">可清空</page-navigation-item>
      <page-navigation-item target="mi-ma-kuang">密码框</page-navigation-item>
      <page-navigation-item target="dai-icon-de-shu-ru-kuang">带 icon 的输入框</page-navigation-item>
      <page-navigation-item target="wen-ben-yu">文本域</page-navigation-item>
      <page-navigation-item target="ke-zi-gua-ying-wen-ben-gao-du-de-wen-ben-yu">可自适应文本高度的文本域</page-navigation-item>
      <page-navigation-item target="fu-he-xing-shu-ru-kuang">复合型输入框</page-navigation-item>
      <page-navigation-item target="chi-cun">尺寸</page-navigation-item>
      <page-navigation-item target="dai-shu-ru-jian-yi">带输入建议</page-navigation-item>
      <page-navigation-item target="zi-ding-yi-mo-ban">自定义模板</page-navigation-item>
      <page-navigation-item target="yuan-cheng-sou-suo">远程搜索</page-navigation-item>
      <page-navigation-item target="shu-ru-chang-du-xian-zhi">输入长度限制</page-navigation-item>
      <page-navigation-item target="input-attributes">Input Attributes</page-navigation-item>
      <page-navigation-item target="input-slots">Input Slots</page-navigation-item>
      <page-navigation-item target="input-events">Input Events</page-navigation-item>
      <page-navigation-item target="input-methods">Input Methods</page-navigation-item>
      <page-navigation-item target="autocomplete-attributes">Autocomplete Attributes</page-navigation-item>
      <page-navigation-item target="autocomplete-slots">Autocomplete Slots</page-navigation-item>
      <page-navigation-item target="autocomplete-scoped-slot">Autocomplete Scoped Slot</page-navigation-item>
      <page-navigation-item target="autocomplete-events">Autocomplete Events</page-navigation-item>
      <page-navigation-item target="autocomplete-methods">Autocomplete Methods</page-navigation-item>
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
import JiChuYongFa from './components/input/JiChuYongFa.vue'
import JinYongZhuangTai from './components/input/JinYongZhuangTai.vue'
import KeQingKong from './components/input/KeQingKong.vue'
import MiMaKuang from './components/input/MiMaKuang.vue'
import DaiIconDeShuRuKuang from './components/input/DaiIconDeShuRuKuang.vue'
import WenBenYu from './components/input/WenBenYu.vue'
import KeZiGuaYingWenBenGaoDuDeWenBenYu from './components/input/KeZiGuaYingWenBenGaoDuDeWenBenYu.vue'
import FuHeXingShuRuKuang from './components/input/FuHeXingShuRuKuang.vue'
import ChiCun from './components/input/ChiCun.vue'
import DaiShuRuJianYi from './components/input/DaiShuRuJianYi.vue'
import ZiDingYiMoBan from './components/input/ZiDingYiMoBan.vue'
import YuanChengSouSuo from './components/input/YuanChengSouSuo.vue'
import ShuRuChangDuXianZhi from './components/input/ShuRuChangDuXianZhi.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, JiChuYongFa, JinYongZhuangTai, KeQingKong, MiMaKuang, DaiIconDeShuRuKuang, WenBenYu, KeZiGuaYingWenBenGaoDuDeWenBenYu, FuHeXingShuRuKuang, ChiCun, DaiShuRuJianYi, ZiDingYiMoBan, YuanChengSouSuo, ShuRuChangDuXianZhi }})
export default class InputView extends Vue {
  get jiChuYongFa(): object[] { return require('assets/config/element-ui/input.config.json').code.jiChuYongFa }
  get jinYongZhuangTai(): object[] { return require('assets/config/element-ui/input.config.json').code.jinYongZhuangTai }
  get keQingKong(): object[] { return require('assets/config/element-ui/input.config.json').code.keQingKong }
  get miMaKuang(): object[] { return require('assets/config/element-ui/input.config.json').code.miMaKuang }
  get daiIconDeShuRuKuang(): object[] { return require('assets/config/element-ui/input.config.json').code.daiIconDeShuRuKuang }
  get wenBenYu(): object[] { return require('assets/config/element-ui/input.config.json').code.wenBenYu }
  get keZiGuaYingWenBenGaoDuDeWenBenYu(): object[] { return require('assets/config/element-ui/input.config.json').code.keZiGuaYingWenBenGaoDuDeWenBenYu }
  get fuHeXingShuRuKuang(): object[] { return require('assets/config/element-ui/input.config.json').code.fuHeXingShuRuKuang }
  get chiCun(): object[] { return require('assets/config/element-ui/input.config.json').code.chiCun }
  get daiShuRuJianYi(): object[] { return require('assets/config/element-ui/input.config.json').code.daiShuRuJianYi }
  get ziDingYiMoBan(): object[] { return require('assets/config/element-ui/input.config.json').code.ziDingYiMoBan }
  get yuanChengSouSuo(): object[] { return require('assets/config/element-ui/input.config.json').code.yuanChengSouSuo }
  get shuRuChangDuXianZhi(): object[] { return require('assets/config/element-ui/input.config.json').code.shuRuChangDuXianZhi }
  get inputAttributes(): object[] { return require('assets/config/element-ui/input.config.json').inputAttributes }
  get inputSlots(): object[] { return require('assets/config/element-ui/input.config.json').inputSlots }
  get inputEvents(): object[] { return require('assets/config/element-ui/input.config.json').inputEvents }
  get inputMethods(): object[] { return require('assets/config/element-ui/input.config.json').inputMethods }
  get autocompleteAttributes(): object[] { return require('assets/config/element-ui/input.config.json').autocompleteAttributes }
  get autocompleteSlots(): object[] { return require('assets/config/element-ui/input.config.json').autocompleteSlots }
  get autocompleteScopedSlot(): object[] { return require('assets/config/element-ui/input.config.json').autocompleteScopedSlot }
  get autocompleteEvents(): object[] { return require('assets/config/element-ui/input.config.json').autocompleteEvents }
  get autocompleteMethods(): object[] { return require('assets/config/element-ui/input.config.json').autocompleteMethods }
}
</script>