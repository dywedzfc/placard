<template>
  <div class="page-container">
    <h2 id="header">QueryPanel 查询面板</h2>
    <p>将查询与展示信息聚合在容器中展示。</p>

    <page-navigation target="header">
      <page-navigation-item target="base-code">常见页面布局</page-navigation-item>
      <page-navigation-item target="height-code">高度</page-navigation-item>
      <page-navigation-item target="query-panel-attributes" text="QueryPanel Attributes" />
      <page-navigation-item target="query-panel-slot" text="QueryPanel Slot" />
    </page-navigation>

    <h3 id="base-code">基础用法</h3>
    <demo-block>
      <template v-slot:source>
        <t-query-panel class="my-query-panel">
          <template #querybar>
            <el-form-item label="姓名">
              <el-input></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">查询</el-button>
            </el-form-item>
          </template>
          <div class="my-query-center">内容</div>
          <template #footer>
            <div class="my-query-footer">底部</div>
          </template>
        </t-query-panel>
      </template>
      <template v-slot:highlight>
        <code-line v-for="(item, index) in baseCode" :key="index" :type="item.type" :code="item.data" />
      </template>
    </demo-block>

    <h3 id="height-code">高度</h3>
    <p>固定模块高度或内部主体和底部面板高度</p>
    <demo-block>
      <template v-slot:source>
        <t-query-panel class="my-query-panel" height="300px">
          <template #querybar>
            <el-form-item label="姓名">
              <el-input></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">查询</el-button>
            </el-form-item>
          </template>
          <div class="my-query-center t">内容</div>
          <template #footer>
            <div class="my-query-footer">底部</div>
          </template>
        </t-query-panel>

        <t-query-panel class="my-query-panel" body-height="150px" footer-height="100px">
          <template #querybar>
            <el-form-item label="姓名">
              <el-input></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">查询</el-button>
            </el-form-item>
          </template>
          <div class="my-query-center t">内容</div>
          <template #footer>
            <div class="my-query-footer t">底部</div>
          </template>
        </t-query-panel>
      </template>
      <template v-slot:highlight>
        <code-line v-for="(item, index) in headerCode" :key="index" :type="item.type" :code="item.data" />
      </template>
    </demo-block>

    <h3 id="query-panel-attributes">QueryPanel Attributes</h3>
    <table-props :data="tableAttributes" />
    <h3 id="query-panel-slot">QueryPanel Slot</h3>
    <table-slot :data="tableSlots" />
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
import TableSlot from 'components/TableSlot.vue'
import PageNavigation from 'components/PageNavigation.vue'
import PageNavigationItem from 'components/PageNavigationItem.vue'
// import { attributes, slots } from 'assets/config/query-panel.config'

@Component({
  components: {
    CodeLine,
    DemoBlock,
    TableProps,
    TableSlot,
    PageNavigation,
    PageNavigationItem,
  },
})
export default class QueryPanelView extends Vue {
  get baseCode(): object[] {
    return require('assets/config/t-ui/query-panel.config').code.baseCode
  }
  get sizeCode(): object[] {
    return require('assets/config/t-ui/query-panel.config').code.sizeCode
  }
  get headerCode(): object[] {
    return require('assets/config/t-ui/query-panel.config').code.headerCode
  }
  get tableAttributes(): object[] {
    return require('assets/config/t-ui/query-panel.config').attributes
  }
  get tableSlots(): object[] {
    return require('assets/config/t-ui/query-panel.config').slots
  }
}
</script>

<style lang="scss" scoped>
.my-query {
  &-center {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e9eef3;
    height: 200px;
    color: #333333;

    &.t {
      height: 100%;
    }
  }
  &-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #b3c0d1;
    height: 60px;
    color: #333333;

    &.t {
      height: 100%;
    }
  }
}
</style>
