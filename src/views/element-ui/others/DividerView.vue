<template>
  <div class="page-container">
    <h2 id="header">Divider 分割线</h2>
    <p>区隔内容的分割线。</p>
    <h3 id="ji-chu-yong-fa">基础用法</h3>
    <p>对不同章节的文本段落进行分割。</p>
    <demo-block>
      <template v-slot:source>
        <JiChuYongFa />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jiChuYongFa" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="she-zhi-wen-an">设置文案</h3>
    <p>可以在分割线上自定义文案内容。</p>
    <demo-block>
      <template v-slot:source>
        <SheZhiWenAn />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in sheZhiWenAn" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="chui-zhi-fen-ge">垂直分割</h3>
    <demo-block>
      <template v-slot:source>
        <ChuiZhiFenGe />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in chuiZhiFenGe" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="divider-attributes">Divider Attributes</h3>
    <table-props :data="dividerAttributes" />
    <br />
    <br />
    <br />

    <page-navigation target="header">
      <page-navigation-item target="ji-chu-yong-fa">基础用法</page-navigation-item>
      <page-navigation-item target="she-zhi-wen-an">设置文案</page-navigation-item>
      <page-navigation-item target="chui-zhi-fen-ge">垂直分割</page-navigation-item>
      <page-navigation-item target="divider-attributes">Divider Attributes</page-navigation-item>
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
import JiChuYongFa from './components/divider/JiChuYongFa.vue'
import SheZhiWenAn from './components/divider/SheZhiWenAn.vue'
import ChuiZhiFenGe from './components/divider/ChuiZhiFenGe.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, JiChuYongFa, SheZhiWenAn, ChuiZhiFenGe }})
export default class DividerView extends Vue {
  get jiChuYongFa(): object[] { return require('assets/config/element-ui/divider.config.json').code.jiChuYongFa }
  get sheZhiWenAn(): object[] { return require('assets/config/element-ui/divider.config.json').code.sheZhiWenAn }
  get chuiZhiFenGe(): object[] { return require('assets/config/element-ui/divider.config.json').code.chuiZhiFenGe }
  get dividerAttributes(): object[] { return require('assets/config/element-ui/divider.config.json').dividerAttributes }
}
</script>