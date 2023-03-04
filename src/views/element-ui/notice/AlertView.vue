<template>
  <div class="page-container">
    <h2 id="header">Alert 警告</h2>
    <p>用于页面中展示重要的提示信息。</p>
    <h3 id="ji-ben-yong-fa">基本用法</h3>
    <p>页面中的非浮层元素，不会自动消失。</p>
    <demo-block>
      <template v-slot:source>
        <JiBenYongFa />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jiBenYongFa" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="zhu-ti">主题</h3>
    <p>Alert 组件提供了两个不同的主题：<code>light</code>和<code>dark</code>。</p>
    <demo-block>
      <template v-slot:source>
        <ZhuTi />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in zhuTi" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="zi-ding-yi-guan-bi-an-niu">自定义关闭按钮</h3>
    <p>自定义关闭按钮为文字或其他符号。</p>
    <demo-block>
      <template v-slot:source>
        <ZiDingYiGuanBiAnNiu />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in ziDingYiGuanBiAnNiu" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="dai-you-icon">带有 icon</h3>
    <p>表示某种状态时提升可读性。</p>
    <demo-block>
      <template v-slot:source>
        <DaiYouIcon />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in daiYouIcon" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="wen-zi-ju-zhong">文字居中</h3>
    <p>使用 <code>center</code> 属性让文字水平居中。</p>
    <demo-block>
      <template v-slot:source>
        <WenZiJuZhong />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in wenZiJuZhong" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="dai-you-fu-zhu-xing-wen-zi-jie-shao">带有辅助性文字介绍</h3>
    <p>包含标题和内容，解释更详细的警告。</p>
    <demo-block>
      <template v-slot:source>
        <DaiYouFuZhuXingWenZiJieShao />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in daiYouFuZhuXingWenZiJieShao" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="dai-you-icon-he-fu-zhu-xing-wen-zi-jie-shao">带有 icon 和辅助性文字介绍</h3>
    <demo-block>
      <template v-slot:source>
        <DaiYouIconHeFuZhuXingWenZiJieShao />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in daiYouIconHeFuZhuXingWenZiJieShao" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="attributes">Attributes</h3>
    <table-props :data="attributes" />
    <h3 id="slot">Slot</h3>
    <table-slot :data="slot" />
    <h3 id="events">Events</h3>
    <table-events :data="events" />
    <br />
    <br />
    <br />

    <page-navigation target="header">
      <page-navigation-item target="ji-ben-yong-fa">基本用法</page-navigation-item>
      <page-navigation-item target="zhu-ti">主题</page-navigation-item>
      <page-navigation-item target="zi-ding-yi-guan-bi-an-niu">自定义关闭按钮</page-navigation-item>
      <page-navigation-item target="dai-you-icon">带有 icon</page-navigation-item>
      <page-navigation-item target="wen-zi-ju-zhong">文字居中</page-navigation-item>
      <page-navigation-item target="dai-you-fu-zhu-xing-wen-zi-jie-shao">带有辅助性文字介绍</page-navigation-item>
      <page-navigation-item target="dai-you-icon-he-fu-zhu-xing-wen-zi-jie-shao">带有 icon 和辅助性文字介绍</page-navigation-item>
      <page-navigation-item target="attributes">Attributes</page-navigation-item>
      <page-navigation-item target="slot">Slot</page-navigation-item>
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
import JiBenYongFa from './components/alert/JiBenYongFa.vue'
import ZhuTi from './components/alert/ZhuTi.vue'
import ZiDingYiGuanBiAnNiu from './components/alert/ZiDingYiGuanBiAnNiu.vue'
import DaiYouIcon from './components/alert/DaiYouIcon.vue'
import WenZiJuZhong from './components/alert/WenZiJuZhong.vue'
import DaiYouFuZhuXingWenZiJieShao from './components/alert/DaiYouFuZhuXingWenZiJieShao.vue'
import DaiYouIconHeFuZhuXingWenZiJieShao from './components/alert/DaiYouIconHeFuZhuXingWenZiJieShao.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, JiBenYongFa, ZhuTi, ZiDingYiGuanBiAnNiu, DaiYouIcon, WenZiJuZhong, DaiYouFuZhuXingWenZiJieShao, DaiYouIconHeFuZhuXingWenZiJieShao }})
export default class AlertView extends Vue {
  get jiBenYongFa(): object[] { return require('assets/config/element-ui/alert.config.json').code.jiBenYongFa }
  get zhuTi(): object[] { return require('assets/config/element-ui/alert.config.json').code.zhuTi }
  get ziDingYiGuanBiAnNiu(): object[] { return require('assets/config/element-ui/alert.config.json').code.ziDingYiGuanBiAnNiu }
  get daiYouIcon(): object[] { return require('assets/config/element-ui/alert.config.json').code.daiYouIcon }
  get wenZiJuZhong(): object[] { return require('assets/config/element-ui/alert.config.json').code.wenZiJuZhong }
  get daiYouFuZhuXingWenZiJieShao(): object[] { return require('assets/config/element-ui/alert.config.json').code.daiYouFuZhuXingWenZiJieShao }
  get daiYouIconHeFuZhuXingWenZiJieShao(): object[] { return require('assets/config/element-ui/alert.config.json').code.daiYouIconHeFuZhuXingWenZiJieShao }
  get attributes(): object[] { return require('assets/config/element-ui/alert.config.json').attributes }
  get slot(): object[] { return require('assets/config/element-ui/alert.config.json').slot }
  get events(): object[] { return require('assets/config/element-ui/alert.config.json').events }
}
</script>