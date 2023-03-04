<template>
  <div class="page-container">
    <h2 id="header">Card 卡片</h2>
    <p>将信息聚合在卡片容器中展示。</p>
    <h3 id="ji-chu-yong-fa">基础用法</h3>
    <p>包含标题，内容和操作。</p>
    <demo-block>
      <template v-slot:source>
        <JiChuYongFa />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jiChuYongFa" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="jian-dan-qia-pian">简单卡片</h3>
    <p>卡片可以只有内容区域。</p>
    <demo-block>
      <template v-slot:source>
        <JianDanQiaPian />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jianDanQiaPian" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="dai-tu-pian">带图片</h3>
    <p>可配置定义更丰富的内容展示。</p>
    <demo-block>
      <template v-slot:source>
        <DaiTuPian />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in daiTuPian" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="qia-pian-yin-ying">卡片阴影</h3>
    <p>可对阴影的显示进行配置。</p>
    <demo-block>
      <template v-slot:source>
        <QiaPianYinYing />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in qiaPianYinYing" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="attributes">Attributes</h3>
    <table-props :data="attributes" />
    <br />
    <br />
    <br />

    <page-navigation target="header">
      <page-navigation-item target="ji-chu-yong-fa">基础用法</page-navigation-item>
      <page-navigation-item target="jian-dan-qia-pian">简单卡片</page-navigation-item>
      <page-navigation-item target="dai-tu-pian">带图片</page-navigation-item>
      <page-navigation-item target="qia-pian-yin-ying">卡片阴影</page-navigation-item>
      <page-navigation-item target="attributes">Attributes</page-navigation-item>
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
import JiChuYongFa from './components/card/JiChuYongFa.vue'
import JianDanQiaPian from './components/card/JianDanQiaPian.vue'
import DaiTuPian from './components/card/DaiTuPian.vue'
import QiaPianYinYing from './components/card/QiaPianYinYing.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, JiChuYongFa, JianDanQiaPian, DaiTuPian, QiaPianYinYing }})
export default class CardView extends Vue {
  get jiChuYongFa(): object[] { return require('assets/config/element-ui/card.config.json').code.jiChuYongFa }
  get jianDanQiaPian(): object[] { return require('assets/config/element-ui/card.config.json').code.jianDanQiaPian }
  get daiTuPian(): object[] { return require('assets/config/element-ui/card.config.json').code.daiTuPian }
  get qiaPianYinYing(): object[] { return require('assets/config/element-ui/card.config.json').code.qiaPianYinYing }
  get attributes(): object[] { return require('assets/config/element-ui/card.config.json').attributes }
}
</script>