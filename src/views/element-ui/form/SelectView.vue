<template>
  <div class="page-container">
    <h2 id="header">Select 选择器</h2>
    <p>当选项过多时，使用下拉菜单展示并选择内容。</p>
    <h3 id="ji-chu-yong-fa">基础用法</h3>
    <p>适用广泛的基础单选</p>
    <demo-block>
      <template v-slot:source>
        <JiChuYongFa />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jiChuYongFa" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="you-jin-yong-xuan-xiang">有禁用选项</h3>
    <demo-block>
      <template v-slot:source>
        <YouJinYongXuanXiang />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in youJinYongXuanXiang" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="jin-yong-zhuang-tai">禁用状态</h3>
    <p>选择器不可用状态</p>
    <demo-block>
      <template v-slot:source>
        <JinYongZhuangTai />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jinYongZhuangTai" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="ke-qing-kong-dan-xuan">可清空单选</h3>
    <p>包含清空按钮，可将选择器清空为初始状态</p>
    <demo-block>
      <template v-slot:source>
        <KeQingKongDanXuan />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in keQingKongDanXuan" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="ji-chu-duo-xuan">基础多选</h3>
    <p>适用性较广的基础多选，用 Tag 展示已选项</p>
    <demo-block>
      <template v-slot:source>
        <JiChuDuoXuan />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jiChuDuoXuan" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="zi-ding-yi-mo-ban">自定义模板</h3>
    <p>可以自定义备选项</p>
    <demo-block>
      <template v-slot:source>
        <ZiDingYiMoBan />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in ziDingYiMoBan" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="fen-zu">分组</h3>
    <p>备选项进行分组展示</p>
    <demo-block>
      <template v-slot:source>
        <FenZu />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in fenZu" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="ke-sou-suo">可搜索</h3>
    <p>可以利用搜索功能快速查找选项</p>
    <demo-block>
      <template v-slot:source>
        <KeSouSuo />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in keSouSuo" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="yuan-cheng-sou-suo">远程搜索</h3>
    <p>从服务器搜索数据，输入关键字进行查找</p>
    <demo-block>
      <template v-slot:source>
        <YuanChengSouSuo />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in yuanChengSouSuo" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="chuang-jian-tiao-mu">创建条目</h3>
    <p>可以创建并选中选项中不存在的条目</p>
    <demo-block>
      <template v-slot:source>
        <ChuangJianTiaoMu />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in chuangJianTiaoMu" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <div class="tip" style=""><p>如果 Select 的绑定值为对象类型，请务必指定 <code>value-key</code> 作为它的唯一性标识。</p></div>
    <h3 id="select-attributes">Select Attributes</h3>
    <table-props :data="selectAttributes" />
    <h3 id="select-events">Select Events</h3>
    <table-events :data="selectEvents" />
    <h3 id="select-slots">Select Slots</h3>
    <table-slot :data="selectSlots" />
    <h3 id="option-group-attributes">Option Group Attributes</h3>
    <table-props :data="optionGroupAttributes" />
    <h3 id="option-attributes">Option Attributes</h3>
    <table-props :data="optionAttributes" />
    <h3 id="methods">Methods</h3>
    <table-methods :data="methods" />
    <br />
    <br />
    <br />

    <page-navigation target="header">
      <page-navigation-item target="ji-chu-yong-fa">基础用法</page-navigation-item>
      <page-navigation-item target="you-jin-yong-xuan-xiang">有禁用选项</page-navigation-item>
      <page-navigation-item target="jin-yong-zhuang-tai">禁用状态</page-navigation-item>
      <page-navigation-item target="ke-qing-kong-dan-xuan">可清空单选</page-navigation-item>
      <page-navigation-item target="ji-chu-duo-xuan">基础多选</page-navigation-item>
      <page-navigation-item target="zi-ding-yi-mo-ban">自定义模板</page-navigation-item>
      <page-navigation-item target="fen-zu">分组</page-navigation-item>
      <page-navigation-item target="ke-sou-suo">可搜索</page-navigation-item>
      <page-navigation-item target="yuan-cheng-sou-suo">远程搜索</page-navigation-item>
      <page-navigation-item target="chuang-jian-tiao-mu">创建条目</page-navigation-item>
      <page-navigation-item target="select-attributes">Select Attributes</page-navigation-item>
      <page-navigation-item target="select-events">Select Events</page-navigation-item>
      <page-navigation-item target="select-slots">Select Slots</page-navigation-item>
      <page-navigation-item target="option-group-attributes">Option Group Attributes</page-navigation-item>
      <page-navigation-item target="option-attributes">Option Attributes</page-navigation-item>
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
import JiChuYongFa from './components/select/JiChuYongFa.vue'
import YouJinYongXuanXiang from './components/select/YouJinYongXuanXiang.vue'
import JinYongZhuangTai from './components/select/JinYongZhuangTai.vue'
import KeQingKongDanXuan from './components/select/KeQingKongDanXuan.vue'
import JiChuDuoXuan from './components/select/JiChuDuoXuan.vue'
import ZiDingYiMoBan from './components/select/ZiDingYiMoBan.vue'
import FenZu from './components/select/FenZu.vue'
import KeSouSuo from './components/select/KeSouSuo.vue'
import YuanChengSouSuo from './components/select/YuanChengSouSuo.vue'
import ChuangJianTiaoMu from './components/select/ChuangJianTiaoMu.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, JiChuYongFa, YouJinYongXuanXiang, JinYongZhuangTai, KeQingKongDanXuan, JiChuDuoXuan, ZiDingYiMoBan, FenZu, KeSouSuo, YuanChengSouSuo, ChuangJianTiaoMu }})
export default class SelectView extends Vue {
  get jiChuYongFa(): object[] { return require('assets/config/element-ui/select.config.json').code.jiChuYongFa }
  get youJinYongXuanXiang(): object[] { return require('assets/config/element-ui/select.config.json').code.youJinYongXuanXiang }
  get jinYongZhuangTai(): object[] { return require('assets/config/element-ui/select.config.json').code.jinYongZhuangTai }
  get keQingKongDanXuan(): object[] { return require('assets/config/element-ui/select.config.json').code.keQingKongDanXuan }
  get jiChuDuoXuan(): object[] { return require('assets/config/element-ui/select.config.json').code.jiChuDuoXuan }
  get ziDingYiMoBan(): object[] { return require('assets/config/element-ui/select.config.json').code.ziDingYiMoBan }
  get fenZu(): object[] { return require('assets/config/element-ui/select.config.json').code.fenZu }
  get keSouSuo(): object[] { return require('assets/config/element-ui/select.config.json').code.keSouSuo }
  get yuanChengSouSuo(): object[] { return require('assets/config/element-ui/select.config.json').code.yuanChengSouSuo }
  get chuangJianTiaoMu(): object[] { return require('assets/config/element-ui/select.config.json').code.chuangJianTiaoMu }
  get selectAttributes(): object[] { return require('assets/config/element-ui/select.config.json').selectAttributes }
  get selectEvents(): object[] { return require('assets/config/element-ui/select.config.json').selectEvents }
  get selectSlots(): object[] { return require('assets/config/element-ui/select.config.json').selectSlots }
  get optionGroupAttributes(): object[] { return require('assets/config/element-ui/select.config.json').optionGroupAttributes }
  get optionAttributes(): object[] { return require('assets/config/element-ui/select.config.json').optionAttributes }
  get methods(): object[] { return require('assets/config/element-ui/select.config.json').methods }
}
</script>