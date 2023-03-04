<template>
  <div class="page-container">
    <h2 id="header">Pagination 分页</h2>
    <p>当数据量过多时，使用分页分解数据。</p>
    <h3 id="ji-chu-yong-fa">基础用法</h3>
    <demo-block>
      <template v-slot:source>
        <JiChuYongFa />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jiChuYongFa" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="she-zhi-zui-da-ye-ma-an-niu-shu">设置最大页码按钮数</h3>
    <demo-block>
      <template v-slot:source>
        <SheZhiZuiDaYeMaAnNiuShu />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in sheZhiZuiDaYeMaAnNiuShu" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="dai-you-bei-jing-se-de-fen-ye">带有背景色的分页</h3>
    <demo-block>
      <template v-slot:source>
        <DaiYouBeiJingSeDeFenYe />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in daiYouBeiJingSeDeFenYe" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="xiao-xing-fen-ye">小型分页</h3>
    <p>在空间有限的情况下，可以使用简单的小型分页。</p>
    <demo-block>
      <template v-slot:source>
        <XiaoXingFenYe />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in xiaoXingFenYe" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="fu-jia-gong-neng">附加功能</h3>
    <p>根据场景需要，可以添加其他功能模块。</p>
    <demo-block>
      <template v-slot:source>
        <FuJiaGongNeng />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in fuJiaGongNeng" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="dang-zhi-you-yi-ye-shi-yin-cang-fen-ye">当只有一页时隐藏分页</h3>
    <p>当只有一页时，通过设置 <code>hide-on-single-page</code> 属性来隐藏分页。</p>
    <demo-block>
      <template v-slot:source>
        <DangZhiYouYiYeShiYinCangFenYe />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in dangZhiYouYiYeShiYinCangFenYe" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="attributes">Attributes</h3>
    <table-props :data="attributes" />
    <h3 id="events">Events</h3>
    <table-events :data="events" />
    <h3 id="slot">Slot</h3>
    <table-slot :data="slot" />
    <br />
    <br />
    <br />

    <page-navigation target="header">
      <page-navigation-item target="ji-chu-yong-fa">基础用法</page-navigation-item>
      <page-navigation-item target="she-zhi-zui-da-ye-ma-an-niu-shu">设置最大页码按钮数</page-navigation-item>
      <page-navigation-item target="dai-you-bei-jing-se-de-fen-ye">带有背景色的分页</page-navigation-item>
      <page-navigation-item target="xiao-xing-fen-ye">小型分页</page-navigation-item>
      <page-navigation-item target="fu-jia-gong-neng">附加功能</page-navigation-item>
      <page-navigation-item target="dang-zhi-you-yi-ye-shi-yin-cang-fen-ye">当只有一页时隐藏分页</page-navigation-item>
      <page-navigation-item target="attributes">Attributes</page-navigation-item>
      <page-navigation-item target="events">Events</page-navigation-item>
      <page-navigation-item target="slot">Slot</page-navigation-item>
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
import JiChuYongFa from './components/pagination/JiChuYongFa.vue'
import SheZhiZuiDaYeMaAnNiuShu from './components/pagination/SheZhiZuiDaYeMaAnNiuShu.vue'
import DaiYouBeiJingSeDeFenYe from './components/pagination/DaiYouBeiJingSeDeFenYe.vue'
import XiaoXingFenYe from './components/pagination/XiaoXingFenYe.vue'
import FuJiaGongNeng from './components/pagination/FuJiaGongNeng.vue'
import DangZhiYouYiYeShiYinCangFenYe from './components/pagination/DangZhiYouYiYeShiYinCangFenYe.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, JiChuYongFa, SheZhiZuiDaYeMaAnNiuShu, DaiYouBeiJingSeDeFenYe, XiaoXingFenYe, FuJiaGongNeng, DangZhiYouYiYeShiYinCangFenYe }})
export default class PaginationView extends Vue {
  get jiChuYongFa(): object[] { return require('assets/config/element-ui/pagination.config.json').code.jiChuYongFa }
  get sheZhiZuiDaYeMaAnNiuShu(): object[] { return require('assets/config/element-ui/pagination.config.json').code.sheZhiZuiDaYeMaAnNiuShu }
  get daiYouBeiJingSeDeFenYe(): object[] { return require('assets/config/element-ui/pagination.config.json').code.daiYouBeiJingSeDeFenYe }
  get xiaoXingFenYe(): object[] { return require('assets/config/element-ui/pagination.config.json').code.xiaoXingFenYe }
  get fuJiaGongNeng(): object[] { return require('assets/config/element-ui/pagination.config.json').code.fuJiaGongNeng }
  get dangZhiYouYiYeShiYinCangFenYe(): object[] { return require('assets/config/element-ui/pagination.config.json').code.dangZhiYouYiYeShiYinCangFenYe }
  get attributes(): object[] { return require('assets/config/element-ui/pagination.config.json').attributes }
  get events(): object[] { return require('assets/config/element-ui/pagination.config.json').events }
  get slot(): object[] { return require('assets/config/element-ui/pagination.config.json').slot }
}
</script>