<template>
  <div class="page-container">
    <h2 id="header">Container 布局容器</h2>
    <p>用于布局的容器组件，方便快速搭建页面的基本结构：</p>
    <p>
      <code>&lt;t-container&gt;</code>：外层容器。当子元素中包含 &lt;t-container-header&gt; 或
      &lt;t-container-footer&gt; 时，全部子元素会垂直上下排列，否则会水平左右排列。
    </p>
    <p><code>&lt;t-header&gt;</code>：顶栏容器。</p>
    <p><code>&lt;t-aside&gt;</code>：侧边栏容器。</p>
    <p><code>&lt;t-body&gt;</code>：主要区域容器。</p>
    <p><code>&lt;t-footer&gt;</code>：底栏容器。</p>

    <div class="tip">
      <p>
        以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，
        <code>&lt;t-container&gt;</code>
        的子元素只能是后四者，后四者的父元素也只能是
        <code>&lt;t-container&gt;</code>。
      </p>
    </div>

    <page-navigation target="header">
      <page-navigation-item target="base-code">常见页面布局</page-navigation-item>
      <page-navigation-item target="show-code">展示、隐藏与拖拽</page-navigation-item>
      <page-navigation-item target="container-attributes" text="Container Attributes" />
      <page-navigation-item target="header-attributes" text="Header Attributes" />
      <page-navigation-item target="aside-attributes" text="Aside Attributes" />
      <page-navigation-item target="footer-attributes" text="Footer Attributes" />
    </page-navigation>

    <h3 id="base-code">常见页面布局</h3>
    <demo-block>
      <template v-slot:source>
        <t-container class="my-container">
          <t-header class="my-header">Header</t-header>
          <t-body class="my-body">Body</t-body>
        </t-container>
        <t-container class="my-container">
          <t-header class="my-header">Header</t-header>
          <t-body class="my-body">Body</t-body>
          <t-footer class="my-footer">Footer</t-footer>
        </t-container>
        <t-container class="my-container">
          <t-header class="my-header">Header</t-header>
          <t-container class="my-container">
            <t-aside class="my-aside">Aside</t-aside>
            <t-body class="my-body">Body</t-body>
          </t-container>
          <t-footer class="my-footer">Footer</t-footer>
        </t-container>
        <t-container class="my-container">
          <t-aside class="my-aside">Aside</t-aside>
          <t-body class="my-body">
            <t-container class="my-container">
              <t-header class="my-header">Header</t-header>
              <t-body class="my-body">Body</t-body>
              <t-footer class="my-footer">Footer</t-footer>
            </t-container>
          </t-body>
        </t-container>
      </template>
      <template v-slot:highlight>
        <code-line v-for="(item, index) in baseCode" :key="index" :type="item.type" :code="item.data" />
      </template>
    </demo-block>

    <h3 id="show-code">展示、隐藏与拖拽</h3>
    <demo-block>
      <template v-slot:source>
        <t-container class="my-container">
          <t-header class="my-header">Header</t-header>
          <t-container class="my-container">
            <t-aside class="my-aside" control-strip>Aside</t-aside>
            <t-body class="my-body">Body</t-body>
            <t-aside class="my-aside" control-strip control-type="move">Aside</t-aside>
          </t-container>
          <t-footer class="my-footer" control-strip>Footer</t-footer>
        </t-container>
      </template>
      <template v-slot:highlight>
        <code-line v-for="(item, index) in showCode" :key="index" :type="item.type" :code="item.data" />
      </template>
    </demo-block>

    <h3 id="container-attributes">Container Attributes</h3>
    <table-props :data="tableAttributes" />
    <h3 id="header-attributes">Header Attributes</h3>
    <table-props :data="tableHeaderAttributes" />
    <h3 id="aside-attributes">Aside Attributes</h3>
    <table-props :data="tableAsideAttributes" />
    <h3 id="footer-attributes">Footer Attributes</h3>
    <table-props :data="tableFoolerAttributes" />
    <br />
    <br />
    <br />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CodeLine from 'components/CodeLine.vue'
import DemoBlock from 'components/DemoBlock.vue'
import TableProps from 'components/TableProps.vue'
import PageNavigation from 'components/PageNavigation.vue'
import PageNavigationItem from 'components/PageNavigationItem.vue'
import { codeType, codeClassName } from '@/assets/js/util'
// import { codeHtmlTag, codeHtmlTagStart, codeHtmlTagEnd } from 'util'

@Component({
  components: { CodeLine, DemoBlock, TableProps, PageNavigation, PageNavigationItem },
})
export default class ContainerView extends Vue {
  get baseCode(): object[] {
    return require('assets/config/t-ui/container.config').code.baseCode
  }
  get showCode(): object[] {
    return require('assets/config/t-ui/container.config').code.showCode
  }
  get tableAttributes(): object[] {
    return require('assets/config/t-ui/container.config.json').attributes
  }
  get tableHeaderAttributes(): object[] {
    return require('assets/config/t-ui/container.config.json').headerAttributes
  }
  get tableAsideAttributes(): object[] {
    return require('assets/config/t-ui/container.config.json').asideAttributes
  }
  get tableFoolerAttributes(): object[] {
    return require('assets/config/t-ui/container.config.json').foolerAttributes
  }
}
</script>

<style lang="scss" scoped>
.my-container {
  height: 240px;
  margin-bottom: 20px;
  border: 1px solid #eeeeee;
  border-radius: 5px;

  &:last-child {
    margin-bottom: 0;
  }
  .my-container {
    margin-bottom: 0;
    border: none;
    border-radius: 0;
  }
}

.my-header,
.my-footer {
  background-color: #b3c0d1;
}
.my-aside {
  text-align: center;
  background-color: #d3dce6;

  &:first-child {
    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;
  }
  &:last-child {
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
  }

  ~ .my-body {
    &:last-child {
      border-top-right-radius: inherit;
      border-bottom-right-radius: inherit;
    }
  }
}
.my-body {
  width: 100%;
  background-color: #e9eef3;
  > .my-container {
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
  }
}
.my-footer {
  line-height: 60px;
}
.my-header,
.my-aside::v-deep .t-aside-wrapper,
.my-body,
.my-footer::v-deep .t-footer-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;

  color: #333333;
}
.my-header,
.my-body,
.my-footer {
  &:first-child {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }
  &:last-child {
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
  }
}
</style>
