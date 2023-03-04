<template>
  <div class="page-container">
    <h2 id="header">Transfer 穿梭框</h2>
    <h3 id="ji-chu-yong-fa">基础用法</h3>
    <demo-block>
      <template v-slot:source>
        <JiChuYongFa />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jiChuYongFa" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="ke-sou-suo">可搜索</h3>
    <p>在数据很多的情况下，可以对数据进行搜索和过滤。</p>
    <demo-block>
      <template v-slot:source>
        <KeSouSuo />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in keSouSuo" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="ke-zi-ding-yi">可自定义</h3>
    <p>可以对列表标题文案、按钮文案、数据项的渲染函数、列表底部的勾选状态文案、列表底部的内容区等进行自定义。</p>
    <demo-block>
      <template v-slot:source>
        <KeZiDingYi />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in keZiDingYi" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="shu-ju-xiang-shu-xing-bie-ming">数据项属性别名</h3>
    <p>默认情况下，Transfer 仅能识别数据项中的 <code>key</code>、<code>label</code> 和 <code>disabled</code> 字段。如果你的数据的字段名不同，可以使用 <code>props</code> 属性为它们设置别名。</p>
    <demo-block>
      <template v-slot:source>
        <ShuJuXiangShuXingBieMing />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in shuJuXiangShuXingBieMing" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="attributes">Attributes</h3>
    <table-props :data="attributes" />
    <h3 id="slot">Slot</h3>
    <table-slot :data="slot" />
    <h3 id="scoped-slot">Scoped Slot</h3>
    <table-slot :data="scopedSlot" />
    <h3 id="methods">Methods</h3>
    <table-methods :data="methods" />
    <h3 id="events">Events</h3>
    <table-events :data="events" />
    <br />
    <br />
    <br />

    <page-navigation target="header">
      <page-navigation-item target="ji-chu-yong-fa">基础用法</page-navigation-item>
      <page-navigation-item target="ke-sou-suo">可搜索</page-navigation-item>
      <page-navigation-item target="ke-zi-ding-yi">可自定义</page-navigation-item>
      <page-navigation-item target="shu-ju-xiang-shu-xing-bie-ming">数据项属性别名</page-navigation-item>
      <page-navigation-item target="attributes">Attributes</page-navigation-item>
      <page-navigation-item target="slot">Slot</page-navigation-item>
      <page-navigation-item target="scoped-slot">Scoped Slot</page-navigation-item>
      <page-navigation-item target="methods">Methods</page-navigation-item>
      <page-navigation-item target="events">Events</page-navigation-item>
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
import JiChuYongFa from './components/transfer/JiChuYongFa.vue'
import KeSouSuo from './components/transfer/KeSouSuo.vue'
import KeZiDingYi from './components/transfer/KeZiDingYi.vue'
import ShuJuXiangShuXingBieMing from './components/transfer/ShuJuXiangShuXingBieMing.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, JiChuYongFa, KeSouSuo, KeZiDingYi, ShuJuXiangShuXingBieMing }})
export default class TransferView extends Vue {
  get jiChuYongFa(): object[] { return require('assets/config/element-ui/transfer.config.json').code.jiChuYongFa }
  get keSouSuo(): object[] { return require('assets/config/element-ui/transfer.config.json').code.keSouSuo }
  get keZiDingYi(): object[] { return require('assets/config/element-ui/transfer.config.json').code.keZiDingYi }
  get shuJuXiangShuXingBieMing(): object[] { return require('assets/config/element-ui/transfer.config.json').code.shuJuXiangShuXingBieMing }
  get attributes(): object[] { return require('assets/config/element-ui/transfer.config.json').attributes }
  get slot(): object[] { return require('assets/config/element-ui/transfer.config.json').slot }
  get scopedSlot(): object[] { return require('assets/config/element-ui/transfer.config.json').scopedSlot }
  get methods(): object[] { return require('assets/config/element-ui/transfer.config.json').methods }
  get events(): object[] { return require('assets/config/element-ui/transfer.config.json').events }
}
</script>