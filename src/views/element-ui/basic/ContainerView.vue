<template>
  <div class="page-container">
    <h2 id="header">Container 布局容器</h2>
    <p>用于布局的容器组件，方便快速搭建页面的基本结构：</p>
    <p>
      <code>&lt;el-container&gt;</code>：外层容器。当子元素中包含 <code>&lt;el-header&gt;</code> 或
      <code>&lt;el-footer&gt;</code> 时，全部子元素会垂直上下排列，否则会水平左右排列。
    </p>
    <p><code>&lt;el-header&gt;</code>：顶栏容器。</p>
    <p><code>&lt;el-aside&gt;</code>：侧边栏容器。</p>
    <p><code>&lt;el-main&gt;</code>：主要区域容器。</p>
    <p><code>&lt;el-footer&gt;</code>：底栏容器。</p>
    <div class="tip">
      <p>
        以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，<code>&lt;el-container&gt;</code>
        的子元素只能是后四者，后四者的父元素也只能是 <code>&lt;el-container&gt;</code>。
      </p>
    </div>
    <h3 id="chang-jian-ye-mian-bu-ju">常见页面布局</h3>
    <demo-block>
      <template v-slot:source>
        <ChangJianYeMianBuJu />
      </template>
      <template v-slot:highlight
        ><code-line v-for="(item, index) in changJianYeMianBuJu" :key="index" :type="item.type" :code="item.data"
      /></template>
    </demo-block>
    <h3 id="shi-li">实例</h3>
    <demo-block>
      <template v-slot:source>
        <ShiLi />
      </template>
      <template v-slot:highlight
        ><code-line v-for="(item, index) in shiLi" :key="index" :type="item.type" :code="item.data"
      /></template>
    </demo-block>
    <h3 id="container-attributes">Container Attributes</h3>
    <table-props :data="containerAttributes" />
    <h3 id="header-attributes">Header Attributes</h3>
    <table-props :data="headerAttributes" />
    <h3 id="aside-attributes">Aside Attributes</h3>
    <table-props :data="asideAttributes" />
    <h3 id="footer-attributes">Footer Attributes</h3>
    <table-props :data="footerAttributes" />
    <br />
    <br />
    <br />

    <page-navigation target="header">
      <page-navigation-item target="chang-jian-ye-mian-bu-ju">常见页面布局</page-navigation-item>
      <page-navigation-item target="shi-li">实例</page-navigation-item>
      <page-navigation-item target="container-attributes">Container Attributes</page-navigation-item>
      <page-navigation-item target="header-attributes">Header Attributes</page-navigation-item>
      <page-navigation-item target="aside-attributes">Aside Attributes</page-navigation-item>
      <page-navigation-item target="footer-attributes">Footer Attributes</page-navigation-item>
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
import ChangJianYeMianBuJu from './components/container/ChangJianYeMianBuJu.vue'
import ShiLi from './components/container/ShiLi.vue'

@Component({
  components: {
    CodeLine,
    DemoBlock,
    TableProps,
    TableMethods,
    TableEvents,
    TableSlot,
    PageNavigation,
    PageNavigationItem,
    ChangJianYeMianBuJu,
    ShiLi,
  },
})
export default class ContainerView extends Vue {
  get changJianYeMianBuJu(): object[] {
    return require('assets/config/element-ui/container.config.json').code.changJianYeMianBuJu
  }
  get shiLi(): object[] {
    return require('assets/config/element-ui/container.config.json').code.shiLi
  }
  get containerAttributes(): object[] {
    return require('assets/config/element-ui/container.config.json').containerAttributes
  }
  get headerAttributes(): object[] {
    return require('assets/config/element-ui/container.config.json').headerAttributes
  }
  get asideAttributes(): object[] {
    return require('assets/config/element-ui/container.config.json').asideAttributes
  }
  get footerAttributes(): object[] {
    return require('assets/config/element-ui/container.config.json').footerAttributes
  }
}
</script>
