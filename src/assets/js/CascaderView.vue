<template>
  <div class="page-container">
    <h2 id="header">Cascader 级联选择器</h2>
    <p>当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。</p>
    <h3 id="ji-chu-yong-fa">基础用法</h3>
    <p>有两种触发子菜单的方式</p>
    <demo-block>
      <template v-slot:source>
        <JiChuYongFa />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jiChuYongFa" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="jin-yong-xuan-xiang">禁用选项</h3>
    <p>通过在数据源中设置 <code>disabled</code> 字段来声明该选项是禁用的</p>
    <demo-block>
      <template v-slot:source>
        <JinYongXuanXiang />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jinYongXuanXiang" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="ke-qing-kong">可清空</h3>
    <p>通过 <code>clearable</code> 设置输入框可清空</p>
    <demo-block>
      <template v-slot:source>
        <KeQingKong />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in keQingKong" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="jin-xian-shi-zui-hou-yi-ji">仅显示最后一级</h3>
    <p>可以仅在输入框中显示选中项最后一级的标签，而不是选中项所在的完整路径。</p>
    <demo-block>
      <template v-slot:source>
        <JinXianShiZuiHouYiJi />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jinXianShiZuiHouYiJi" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="duo-xuan">多选</h3>
    <p>可通过 <code>props.multiple = true</code> 来开启多选模式</p>
    <demo-block>
      <template v-slot:source>
        <DuoXuan />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in duoXuan" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="xuan-ze-ren-yi-yi-ji-xuan-xiang">选择任意一级选项</h3>
    <p>在单选模式下，你只能选择叶子节点；而在多选模式下，勾选父节点真正选中的都是叶子节点。启用该功能后，可让父子节点取消关联，选择任意一级选项。</p>
    <demo-block>
      <template v-slot:source>
        <XuanZeRenYiYiJiXuanXiang />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in xuanZeRenYiYiJiXuanXiang" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="dong-tai-jia-zai">动态加载</h3>
    <p>当选中某一级时，动态加载该级下的选项。</p>
    <demo-block>
      <template v-slot:source>
        <DongTaiJiaZai />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in dongTaiJiaZai" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="ke-sou-suo">可搜索</h3>
    <p>可以快捷地搜索选项并选择。</p>
    <demo-block>
      <template v-slot:source>
        <KeSouSuo />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in keSouSuo" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="zi-ding-yi-jie-dian-nei-rong">自定义节点内容</h3>
    <p>可以自定义备选项的节点内容</p>
    <demo-block>
      <template v-slot:source>
        <ZiDingYiJieDianNeiRong />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in ziDingYiJieDianNeiRong" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="ji-lian-mian-ban">级联面板</h3>
    <p>级联面板是级联选择器的核心组件，与级联选择器一样，有单选、多选、动态加载等多种功能。</p>
    <demo-block>
      <template v-slot:source>
        <JiLianMianBan />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jiLianMianBan" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="cascader-attributes">Cascader Attributes</h3>
    <table-props :data="cascaderAttributes" />
    <h3 id="cascader-events">Cascader Events</h3>
    <table-events :data="cascaderEvents" />
    <h3 id="cascader-methods">Cascader Methods</h3>
    <table-methods :data="cascaderMethods" />
    <h3 id="cascader-slots">Cascader Slots</h3>
    <table-slot :data="cascaderSlots" />
    <h3 id="cascaderpanel-attributes">CascaderPanel Attributes</h3>
    <table-props :data="cascaderpanelAttributes" />
    <h3 id="cascaderpanel-events">CascaderPanel Events</h3>
    <table-events :data="cascaderpanelEvents" />
    <h3 id="cascaderpanel-methods">CascaderPanel Methods</h3>
    <table-methods :data="cascaderpanelMethods" />
    <h3 id="cascaderpanel-slots">CascaderPanel Slots</h3>
    <table-slot :data="cascaderpanelSlots" />
    <h3 id="props">Props</h3>
    <table-props :data="props" />
    <br />
    <br />
    <br />

    <page-navigation target="header">
      <page-navigation-item target="ji-chu-yong-fa">基础用法</page-navigation-item>
      <page-navigation-item target="jin-yong-xuan-xiang">禁用选项</page-navigation-item>
      <page-navigation-item target="ke-qing-kong">可清空</page-navigation-item>
      <page-navigation-item target="jin-xian-shi-zui-hou-yi-ji">仅显示最后一级</page-navigation-item>
      <page-navigation-item target="duo-xuan">多选</page-navigation-item>
      <page-navigation-item target="xuan-ze-ren-yi-yi-ji-xuan-xiang">选择任意一级选项</page-navigation-item>
      <page-navigation-item target="dong-tai-jia-zai">动态加载</page-navigation-item>
      <page-navigation-item target="ke-sou-suo">可搜索</page-navigation-item>
      <page-navigation-item target="zi-ding-yi-jie-dian-nei-rong">自定义节点内容</page-navigation-item>
      <page-navigation-item target="ji-lian-mian-ban">级联面板</page-navigation-item>
      <page-navigation-item target="cascader-attributes">Cascader Attributes</page-navigation-item>
      <page-navigation-item target="cascader-events">Cascader Events</page-navigation-item>
      <page-navigation-item target="cascader-methods">Cascader Methods</page-navigation-item>
      <page-navigation-item target="cascader-slots">Cascader Slots</page-navigation-item>
      <page-navigation-item target="cascaderpanel-attributes">CascaderPanel Attributes</page-navigation-item>
      <page-navigation-item target="cascaderpanel-events">CascaderPanel Events</page-navigation-item>
      <page-navigation-item target="cascaderpanel-methods">CascaderPanel Methods</page-navigation-item>
      <page-navigation-item target="cascaderpanel-slots">CascaderPanel Slots</page-navigation-item>
      <page-navigation-item target="props">Props</page-navigation-item>
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
import JiChuYongFa from './components/cascader/JiChuYongFa.vue'
import JinYongXuanXiang from './components/cascader/JinYongXuanXiang.vue'
import KeQingKong from './components/cascader/KeQingKong.vue'
import JinXianShiZuiHouYiJi from './components/cascader/JinXianShiZuiHouYiJi.vue'
import DuoXuan from './components/cascader/DuoXuan.vue'
import XuanZeRenYiYiJiXuanXiang from './components/cascader/XuanZeRenYiYiJiXuanXiang.vue'
import DongTaiJiaZai from './components/cascader/DongTaiJiaZai.vue'
import KeSouSuo from './components/cascader/KeSouSuo.vue'
import ZiDingYiJieDianNeiRong from './components/cascader/ZiDingYiJieDianNeiRong.vue'
import JiLianMianBan from './components/cascader/JiLianMianBan.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, JiChuYongFa, JinYongXuanXiang, KeQingKong, JinXianShiZuiHouYiJi, DuoXuan, XuanZeRenYiYiJiXuanXiang, DongTaiJiaZai, KeSouSuo, ZiDingYiJieDianNeiRong, JiLianMianBan }})
export default class CascaderView extends Vue {
  get jiChuYongFa(): object[] { return require('assets/config/element-ui/cascader.config.json').code.jiChuYongFa }
  get jinYongXuanXiang(): object[] { return require('assets/config/element-ui/cascader.config.json').code.jinYongXuanXiang }
  get keQingKong(): object[] { return require('assets/config/element-ui/cascader.config.json').code.keQingKong }
  get jinXianShiZuiHouYiJi(): object[] { return require('assets/config/element-ui/cascader.config.json').code.jinXianShiZuiHouYiJi }
  get duoXuan(): object[] { return require('assets/config/element-ui/cascader.config.json').code.duoXuan }
  get xuanZeRenYiYiJiXuanXiang(): object[] { return require('assets/config/element-ui/cascader.config.json').code.xuanZeRenYiYiJiXuanXiang }
  get dongTaiJiaZai(): object[] { return require('assets/config/element-ui/cascader.config.json').code.dongTaiJiaZai }
  get keSouSuo(): object[] { return require('assets/config/element-ui/cascader.config.json').code.keSouSuo }
  get ziDingYiJieDianNeiRong(): object[] { return require('assets/config/element-ui/cascader.config.json').code.ziDingYiJieDianNeiRong }
  get jiLianMianBan(): object[] { return require('assets/config/element-ui/cascader.config.json').code.jiLianMianBan }
  get cascaderAttributes(): object[] { return require('assets/config/element-ui/cascader.config.json').cascaderAttributes }
  get cascaderEvents(): object[] { return require('assets/config/element-ui/cascader.config.json').cascaderEvents }
  get cascaderMethods(): object[] { return require('assets/config/element-ui/cascader.config.json').cascaderMethods }
  get cascaderSlots(): object[] { return require('assets/config/element-ui/cascader.config.json').cascaderSlots }
  get cascaderpanelAttributes(): object[] { return require('assets/config/element-ui/cascader.config.json').cascaderpanelAttributes }
  get cascaderpanelEvents(): object[] { return require('assets/config/element-ui/cascader.config.json').cascaderpanelEvents }
  get cascaderpanelMethods(): object[] { return require('assets/config/element-ui/cascader.config.json').cascaderpanelMethods }
  get cascaderpanelSlots(): object[] { return require('assets/config/element-ui/cascader.config.json').cascaderpanelSlots }
  get props(): object[] { return require('assets/config/element-ui/cascader.config.json').props }
}
</script>