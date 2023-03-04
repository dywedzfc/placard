<template>
  <div class="page-container">
    <h2 id="header">GridLayout 网格布局</h2>
    <p>用于整体布局，方便快速搭建页面的网格结构。</p>

    <page-navigation target="header">
      <page-navigation-item target="base-code">基础布局</page-navigation-item>
      <page-navigation-item target="border-code">边距</page-navigation-item>
      <page-navigation-item target="grid-layout-attributes" text="GridLayout Attributes" />
    </page-navigation>

    <h3 id="base-code">基础布局</h3>
    <demo-block>
      <template v-slot:source>
        <t-grid-layout class="my-grid">
          <t-panel class="my-grid-item"></t-panel>
          <t-panel class="my-grid-item"></t-panel>
          <t-panel class="my-grid-item"></t-panel>
          <t-panel class="my-grid-item"></t-panel>
        </t-grid-layout>
      </template>
      <template v-slot:highlight>
        <code-line v-for="(item, index) in baseCode" :key="index" :type="item.type" :code="item.data" />
      </template>
    </demo-block>

    <h3 id="border-code">边距</h3>
    <demo-block>
      <template v-slot:source>
        <t-grid-layout class="my-grid" margin="10">
          <t-panel class="my-grid-item"></t-panel>
          <t-panel class="my-grid-item"></t-panel>
          <t-panel class="my-grid-item"></t-panel>
          <t-panel class="my-grid-item"></t-panel>
        </t-grid-layout>
      </template>
      <template v-slot:highlight>
        <code-line v-for="(item, index) in marginCode" :key="index" :type="item.type" :code="item.data" />
      </template>
    </demo-block>

    <h3 id="grid-layout-attributes">GridLayout Attributes</h3>
    <table-props :data="tableAttributes" />
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

@Component({
  components: { CodeLine, DemoBlock, TableProps, PageNavigation, PageNavigationItem },
})
export default class GridLayoutView extends Vue {
  get baseCode(): object[] {
    return require('assets/config/t-ui/grid-layout.config').code.baseCode
  }
  get marginCode(): object[] {
    return require('assets/config/t-ui/grid-layout.config').code.marginCode
  }
  get tableAttributes(): object[] {
    return require('assets/config/t-ui/grid-layout.config.json').attributes
  }
}
</script>

<style lang="scss" scoped>
.my-grid {
  // border: 1px solid #eeeeee;
  height: 400px;

  &-item {
    display: inline-block;
    background-color: #e9eef3;

    &:nth-child(2n) {
      background-color: #d3dce6;
    }
    &:nth-child(3n) {
      background-color: #c7cfd8;
    }
    &:nth-child(4n) {
      background-color: #b5bcc4;
    }
  }
}
</style>
