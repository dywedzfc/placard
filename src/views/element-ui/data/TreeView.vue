<template>
  <div class="page-container">
    <h2 id="header">Tree 树形控件</h2>
    <p>用清晰的层级结构展示信息，可展开或折叠。</p>
    <h3 id="ji-chu-yong-fa">基础用法</h3>
    <p>基础的树形结构展示。</p>
    <demo-block>
      <template v-slot:source>
        <JiChuYongFa />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jiChuYongFa" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="ke-xuan-ze">可选择</h3>
    <p>适用于需要选择层级时使用。</p>
    <demo-block>
      <template v-slot:source>
        <KeXuanZe />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in keXuanZe" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="lan-jia-zai-zi-ding-yi-xie-zi-jie-dian">懒加载自定义叶子节点</h3>
    <demo-block>
      <template v-slot:source>
        <LanJiaZaiZiDingYiXieZiJieDian />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in lanJiaZaiZiDingYiXieZiJieDian" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="mo-ren-zhan-kai-he-mo-ren-xuan-zhong">默认展开和默认选中</h3>
    <p>可将 Tree 的某些节点设置为默认展开或默认选中</p>
    <demo-block>
      <template v-slot:source>
        <MoRenZhanKaiHeMoRenXuanZhong />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in moRenZhanKaiHeMoRenXuanZhong" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="jin-yong-zhuang-tai">禁用状态</h3>
    <p>可将 Tree 的某些节点设置为禁用状态</p>
    <demo-block>
      <template v-slot:source>
        <JinYongZhuangTai />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jinYongZhuangTai" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="shu-jie-dian-de-xuan-ze">树节点的选择</h3>
    <demo-block>
      <template v-slot:source>
        <ShuJieDianDeXuanZe />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in shuJieDianDeXuanZe" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="zi-ding-yi-jie-dian-nei-rong">自定义节点内容</h3>
    <p>节点的内容支持自定义，可以在节点区添加按钮或图标等内容</p>
    <demo-block>
      <template v-slot:source>
        <ZiDingYiJieDianNeiRong />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in ziDingYiJieDianNeiRong" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="jie-dian-guo-lu">节点过滤</h3>
    <p>通过关键字过滤树节点</p>
    <demo-block>
      <template v-slot:source>
        <JieDianGuoLu />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jieDianGuoLu" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="shou-feng-qin-mo-shi">手风琴模式</h3>
    <p>对于同一级的节点，每次只能展开一个</p>
    <demo-block>
      <template v-slot:source>
        <ShouFengQinMoShi />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in shouFengQinMoShi" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="ke-tuo-zhuai-jie-dian">可拖拽节点</h3>
    <p>通过 draggable 属性可让节点变为可拖拽。</p>
    <demo-block>
      <template v-slot:source>
        <KeTuoZhuaiJieDian />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in keTuoZhuaiJieDian" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="attributes">Attributes</h3>
    <table-props :data="attributes" />
    <h3 id="props">Props</h3>
    <table-props :data="props" />
    <h3 id="methods">Methods</h3>
    <p><code>Tree</code> 内部使用了 Node 类型的对象来包装用户传入的数据，用来保存目前节点的状态。
<code>Tree</code> 拥有如下方法：</p>
    <table-methods :data="methods" />
    <h3 id="events">Events</h3>
    <table-events :data="events" />
    <h3 id="scoped-slot">Scoped Slot</h3>
    <table-slot :data="scopedSlot" />
    <br />
    <br />
    <br />

    <page-navigation target="header">
      <page-navigation-item target="ji-chu-yong-fa">基础用法</page-navigation-item>
      <page-navigation-item target="ke-xuan-ze">可选择</page-navigation-item>
      <page-navigation-item target="lan-jia-zai-zi-ding-yi-xie-zi-jie-dian">懒加载自定义叶子节点</page-navigation-item>
      <page-navigation-item target="mo-ren-zhan-kai-he-mo-ren-xuan-zhong">默认展开和默认选中</page-navigation-item>
      <page-navigation-item target="jin-yong-zhuang-tai">禁用状态</page-navigation-item>
      <page-navigation-item target="shu-jie-dian-de-xuan-ze">树节点的选择</page-navigation-item>
      <page-navigation-item target="zi-ding-yi-jie-dian-nei-rong">自定义节点内容</page-navigation-item>
      <page-navigation-item target="jie-dian-guo-lu">节点过滤</page-navigation-item>
      <page-navigation-item target="shou-feng-qin-mo-shi">手风琴模式</page-navigation-item>
      <page-navigation-item target="ke-tuo-zhuai-jie-dian">可拖拽节点</page-navigation-item>
      <page-navigation-item target="attributes">Attributes</page-navigation-item>
      <page-navigation-item target="props">Props</page-navigation-item>
      <page-navigation-item target="methods">Methods</page-navigation-item>
      <page-navigation-item target="events">Events</page-navigation-item>
      <page-navigation-item target="scoped-slot">Scoped Slot</page-navigation-item>
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
import JiChuYongFa from './components/tree/JiChuYongFa.vue'
import KeXuanZe from './components/tree/KeXuanZe.vue'
import LanJiaZaiZiDingYiXieZiJieDian from './components/tree/LanJiaZaiZiDingYiXieZiJieDian.vue'
import MoRenZhanKaiHeMoRenXuanZhong from './components/tree/MoRenZhanKaiHeMoRenXuanZhong.vue'
import JinYongZhuangTai from './components/tree/JinYongZhuangTai.vue'
import ShuJieDianDeXuanZe from './components/tree/ShuJieDianDeXuanZe.vue'
import ZiDingYiJieDianNeiRong from './components/tree/ZiDingYiJieDianNeiRong.vue'
import JieDianGuoLu from './components/tree/JieDianGuoLu.vue'
import ShouFengQinMoShi from './components/tree/ShouFengQinMoShi.vue'
import KeTuoZhuaiJieDian from './components/tree/KeTuoZhuaiJieDian.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, JiChuYongFa, KeXuanZe, LanJiaZaiZiDingYiXieZiJieDian, MoRenZhanKaiHeMoRenXuanZhong, JinYongZhuangTai, ShuJieDianDeXuanZe, ZiDingYiJieDianNeiRong, JieDianGuoLu, ShouFengQinMoShi, KeTuoZhuaiJieDian }})
export default class TreeView extends Vue {
  get jiChuYongFa(): object[] { return require('assets/config/element-ui/tree.config.json').code.jiChuYongFa }
  get keXuanZe(): object[] { return require('assets/config/element-ui/tree.config.json').code.keXuanZe }
  get lanJiaZaiZiDingYiXieZiJieDian(): object[] { return require('assets/config/element-ui/tree.config.json').code.lanJiaZaiZiDingYiXieZiJieDian }
  get moRenZhanKaiHeMoRenXuanZhong(): object[] { return require('assets/config/element-ui/tree.config.json').code.moRenZhanKaiHeMoRenXuanZhong }
  get jinYongZhuangTai(): object[] { return require('assets/config/element-ui/tree.config.json').code.jinYongZhuangTai }
  get shuJieDianDeXuanZe(): object[] { return require('assets/config/element-ui/tree.config.json').code.shuJieDianDeXuanZe }
  get ziDingYiJieDianNeiRong(): object[] { return require('assets/config/element-ui/tree.config.json').code.ziDingYiJieDianNeiRong }
  get jieDianGuoLu(): object[] { return require('assets/config/element-ui/tree.config.json').code.jieDianGuoLu }
  get shouFengQinMoShi(): object[] { return require('assets/config/element-ui/tree.config.json').code.shouFengQinMoShi }
  get keTuoZhuaiJieDian(): object[] { return require('assets/config/element-ui/tree.config.json').code.keTuoZhuaiJieDian }
  get attributes(): object[] { return require('assets/config/element-ui/tree.config.json').attributes }
  get props(): object[] { return require('assets/config/element-ui/tree.config.json').props }
  get methods(): object[] { return require('assets/config/element-ui/tree.config.json').methods }
  get events(): object[] { return require('assets/config/element-ui/tree.config.json').events }
  get scopedSlot(): object[] { return require('assets/config/element-ui/tree.config.json').scopedSlot }
}
</script>