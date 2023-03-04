<template>
  <div class="page-container">
    <h2 id="header">Tooltip 文字提示</h2>
    <p>常用于展示鼠标 hover 时的提示信息。</p>
    <h3 id="ji-chu-yong-fa">基础用法</h3>
    <p>在这里我们提供 9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。</p>
    <demo-block>
      <template v-slot:source>
        <JiChuYongFa />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jiChuYongFa" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="zhu-ti">主题</h3>
    <p>Tooltip 组件提供了两个不同的主题：<code>dark</code>和<code>light</code>。</p>
    <demo-block>
      <template v-slot:source>
        <ZhuTi />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in zhuTi" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="geng-duo-content">更多 Content</h3>
    <p>展示多行文本或者是设置文本内容的格式</p>
    <demo-block>
      <template v-slot:source>
        <GengDuoContent />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in gengDuoContent" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="gao-ji-kuo-zhan">高级扩展</h3>
    <p>除了这些基本设置外，还有一些属性可以让使用者更好的定制自己的效果：</p>
    <p><code>transition</code> 属性可以定制显隐的动画效果，默认为<code>fade-in-linear</code>。
如果需要关闭 <code>tooltip</code> 功能，<code>disabled</code> 属性可以满足这个需求，它接受一个<code>Boolean</code>，设置为<code>true</code>即可。</p>
    <p>事实上，这是基于 <a target="_blank" href="https://github.com/element-component/vue-popper">Vue-popper</a> 的扩展，你可以自定义任意 Vue-popper 中允许定义的字段。
当然 Tooltip 组件实际上十分强大，文末的API文档会做一一说明。</p>
    <demo-block>
      <template v-slot:source>
        <GaoJiKuoZhan />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in gaoJiKuoZhan" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <div class="tip" style=""><p>tooltip 内不支持 <code>router-link</code> 组件，请使用 <code>vm.$router.push</code> 代替。</p><p>tooltip 内不支持 disabled form 元素，参考<a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/Events/mouseenter">MDN</a>，请在 disabled form 元素外层添加一层包裹元素。</p></div>
    <h3 id="attributes">Attributes</h3>
    <table-props :data="attributes" />
    <br />
    <br />
    <br />

    <page-navigation target="header">
      <page-navigation-item target="ji-chu-yong-fa">基础用法</page-navigation-item>
      <page-navigation-item target="zhu-ti">主题</page-navigation-item>
      <page-navigation-item target="geng-duo-content">更多 Content</page-navigation-item>
      <page-navigation-item target="gao-ji-kuo-zhan">高级扩展</page-navigation-item>
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
import JiChuYongFa from './components/tooltip/JiChuYongFa.vue'
import ZhuTi from './components/tooltip/ZhuTi.vue'
import GengDuoContent from './components/tooltip/GengDuoContent.vue'
import GaoJiKuoZhan from './components/tooltip/GaoJiKuoZhan.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, JiChuYongFa, ZhuTi, GengDuoContent, GaoJiKuoZhan }})
export default class TooltipView extends Vue {
  get jiChuYongFa(): object[] { return require('assets/config/element-ui/tooltip.config.json').code.jiChuYongFa }
  get zhuTi(): object[] { return require('assets/config/element-ui/tooltip.config.json').code.zhuTi }
  get gengDuoContent(): object[] { return require('assets/config/element-ui/tooltip.config.json').code.gengDuoContent }
  get gaoJiKuoZhan(): object[] { return require('assets/config/element-ui/tooltip.config.json').code.gaoJiKuoZhan }
  get attributes(): object[] { return require('assets/config/element-ui/tooltip.config.json').attributes }
}
</script>