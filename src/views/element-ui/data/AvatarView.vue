<template>
  <div class="page-container">
    <h2 id="header">Avatar 头像</h2>
    <p>用图标、图片或者字符的形式展示用户或事物信息。</p>
    <h3 id="ji-ben-yong-fa">基本用法</h3>
    <p>通过 <code>shape</code> 和 <code>size</code> 设置头像的形状和大小。</p>
    <demo-block>
      <template v-slot:source>
        <JiBenYongFa />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jiBenYongFa" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="zhan-shi-lei-xing">展示类型</h3>
    <p>支持三种类型：图标、图片和字符</p>
    <demo-block>
      <template v-slot:source>
        <ZhanShiLeiXing />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in zhanShiLeiXing" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="tu-pian-jia-zai-shi-bai-de-fallback-xing-wei">图片加载失败的 fallback 行为</h3>
    <p>当展示类型为图片的时候，图片加载失败的 fallback 行为</p>
    <demo-block>
      <template v-slot:source>
        <TuPianJiaZaiShiBaiDeFallbackXingWei />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in tuPianJiaZaiShiBaiDeFallbackXingWei" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="tu-pian-ru-he-gua-ying-rong-qi-kuang">图片如何适应容器框</h3>
    <p>当展示类型为图片的时候，使用 <code>fit</code> 属性定义图片如何适应容器框，同原生 <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit">object-fit</a>。</p>
    <demo-block>
      <template v-slot:source>
        <TuPianRuHeGuaYingRongQiKuang />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in tuPianRuHeGuaYingRongQiKuang" :key="index" :type="item.type" :code="item.data" /></template>
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
      <page-navigation-item target="ji-ben-yong-fa">基本用法</page-navigation-item>
      <page-navigation-item target="zhan-shi-lei-xing">展示类型</page-navigation-item>
      <page-navigation-item target="tu-pian-jia-zai-shi-bai-de-fallback-xing-wei">图片加载失败的 fallback 行为</page-navigation-item>
      <page-navigation-item target="tu-pian-ru-he-gua-ying-rong-qi-kuang">图片如何适应容器框</page-navigation-item>
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
import JiBenYongFa from './components/avatar/JiBenYongFa.vue'
import ZhanShiLeiXing from './components/avatar/ZhanShiLeiXing.vue'
import TuPianJiaZaiShiBaiDeFallbackXingWei from './components/avatar/TuPianJiaZaiShiBaiDeFallbackXingWei.vue'
import TuPianRuHeGuaYingRongQiKuang from './components/avatar/TuPianRuHeGuaYingRongQiKuang.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, JiBenYongFa, ZhanShiLeiXing, TuPianJiaZaiShiBaiDeFallbackXingWei, TuPianRuHeGuaYingRongQiKuang }})
export default class AvatarView extends Vue {
  get jiBenYongFa(): object[] { return require('assets/config/element-ui/avatar.config.json').code.jiBenYongFa }
  get zhanShiLeiXing(): object[] { return require('assets/config/element-ui/avatar.config.json').code.zhanShiLeiXing }
  get tuPianJiaZaiShiBaiDeFallbackXingWei(): object[] { return require('assets/config/element-ui/avatar.config.json').code.tuPianJiaZaiShiBaiDeFallbackXingWei }
  get tuPianRuHeGuaYingRongQiKuang(): object[] { return require('assets/config/element-ui/avatar.config.json').code.tuPianRuHeGuaYingRongQiKuang }
  get attributes(): object[] { return require('assets/config/element-ui/avatar.config.json').attributes }
  get events(): object[] { return require('assets/config/element-ui/avatar.config.json').events }
  get slot(): object[] { return require('assets/config/element-ui/avatar.config.json').slot }
}
</script>