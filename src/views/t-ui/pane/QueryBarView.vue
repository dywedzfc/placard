<template>
  <div class="page-container">
    <h2 id="header">QueryBar 查询框</h2>
    <p>可用于表单查询。</p>

    <page-navigation target="header">
      <page-navigation-item target="base-code">基础用法</page-navigation-item>
      <page-navigation-item target="border-code">边框圆角</page-navigation-item>
      <page-navigation-item target="shadow-code">阴影和尺寸</page-navigation-item>
      <page-navigation-item target="login-code">登录面板</page-navigation-item>
      <page-navigation-item target="form-code">提交面板</page-navigation-item>
      <page-navigation-item target="query-bar-attributes" text="QueryBar Attributes" />
      <page-navigation-item target="query-bar-events" text="QueryBar Events" />
      <page-navigation-item target="query-bar-methods" text="QueryBar Methods" />
      <page-navigation-item target="form-item-attributes" text="Form-Item Attributes" />
      <page-navigation-item target="form-item-slot" text="Form-Item Slot" />
      <page-navigation-item target="form-item-scoped-slot" text="Form-Item Scoped Slot" />
      <page-navigation-item target="form-item-methods" text="Form-Item Methods" />
    </page-navigation>

    <h3 id="base-code">基础用法</h3>
    <demo-block>
      <template v-slot:source>
        <t-query-bar class="my-query-bar">
          <el-form-item label="姓名">
            <el-input></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">查询</el-button>
          </el-form-item>
        </t-query-bar>
      </template>
      <template v-slot:highlight>
        <code-line v-for="(item, index) in baseCode" :key="index" :type="item.type" :code="item.data" />
      </template>
    </demo-block>

    <h3 id="border-code">边框圆角</h3>
    <demo-block>
      <template v-slot:source>
        <t-query-bar class="my-query-bar" border radius>
          <el-form-item label="姓名">
            <el-input></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">查询</el-button>
          </el-form-item>
        </t-query-bar>
      </template>
      <template v-slot:highlight>
        <code-line v-for="(item, index) in borderCode" :key="index" :type="item.type" :code="item.data" />
      </template>
    </demo-block>

    <h3 id="shadow-code">阴影和尺寸</h3>
    <demo-block>
      <template v-slot:source>
        <t-query-bar class="my-query-bar" border radius level="1" size="medium">
          <el-form-item label="姓名">
            <el-input></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">查询</el-button>
          </el-form-item>
        </t-query-bar>
        <t-query-bar class="my-query-bar" border radius level="2">
          <el-form-item label="姓名">
            <el-input></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">查询</el-button>
          </el-form-item>
        </t-query-bar>
        <t-query-bar class="my-query-bar" border radius level="3" size="mini">
          <el-form-item label="姓名">
            <el-input></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">查询</el-button>
          </el-form-item>
        </t-query-bar>
      </template>
      <template v-slot:highlight>
        <code-line v-for="(item, index) in shadowCode" :key="index" :type="item.type" :code="item.data" />
      </template>
    </demo-block>

    <h3 id="login-code">登录面板</h3>
    <demo-block>
      <template v-slot:source>
        <t-query-bar class="my-query-bar my-login" type="login" border radius level="1">
          <el-form-item>
            <el-input icon="el-icon-user" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input icon="el-icon-key" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">登录</el-button>
          </el-form-item>
        </t-query-bar>
      </template>
      <template v-slot:highlight>
        <code-line v-for="(item, index) in loginCode" :key="index" :type="item.type" :code="item.data" />
      </template>
    </demo-block>

    <h3 id="form-code">提交面板</h3>
    <demo-block>
      <template v-slot:source>
        <t-query-bar class="my-query-bar my-form" type="form" ref="form">
          <el-form-item label="姓名">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-input></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">取消</el-button>
            <el-button type="primary">提交</el-button>
          </el-form-item>
        </t-query-bar>
      </template>
      <template v-slot:highlight>
        <code-line v-for="(item, index) in formCode" :key="index" :type="item.type" :code="item.data" />
      </template>
    </demo-block>

    <h3 id="query-bar-attributes">QueryBar Attributes</h3>
    <table-props :data="querybarAttributes" />
    <h3 id="query-bar-events">QueryBar Events</h3>
    <table-methods :data="querybarEvents" />
    <h3 id="query-bar-methods">QueryBar Methods</h3>
    <table-methods :data="querybarMethods" />
    <h3 id="form-item-attributes">Form-Item Attributes</h3>
    <table-props :data="tableFormItemAttributes" />
    <h3 id="form-item-slot">Form-Item Slot</h3>
    <table-slot :data="tableFormItemSlots" />
    <h3 id="form-item-scoped-slot">Form-Item Scoped Slot</h3>
    <table-slot :data="tableFormItemScopedSlots" />
    <h3 id="form-item-methods">Form-Item Methods</h3>
    <table-methods :data="tableFormItemMethods" />
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
import TableMethods from 'components/TableMethods.vue'
import TableEvents from 'components/TableEvents.vue'
import TableSlot from 'components/TableSlot.vue'
import PageNavigation from 'components/PageNavigation.vue'
import PageNavigationItem from 'components/PageNavigationItem.vue'

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
  },
})
export default class QueryBarView extends Vue {
  get baseCode(): object[] {
    return require('assets/config/t-ui/query-bar.config').code.baseCode
  }
  get borderCode(): object[] {
    return require('assets/config/t-ui/query-bar.config').code.borderCode
  }
  get shadowCode(): object[] {
    return require('assets/config/t-ui/query-bar.config').code.shadowCode
  }
  get loginCode(): object[] {
    return require('assets/config/t-ui/query-bar.config').code.loginCode
  }
  get formCode(): object[] {
    return require('assets/config/t-ui/query-bar.config').code.formCode
  }
  get querybarAttributes(): object[] {
    return require('assets/config/t-ui/query-bar.config.json').attributes
  }
  get querybarEvents(): object[] {
    return require('assets/config/t-ui/query-bar.config.json').events
  }
  get querybarMethods(): object[] {
    return require('assets/config/t-ui/query-bar.config.json').methods
  }
  get tableFormItemAttributes(): object[] {
    return require('assets/config/t-ui/query-bar.config.json').formItemAttributes
  }
  get tableFormItemSlots(): object[] {
    return require('assets/config/t-ui/query-bar.config.json').formItemSlots
  }
  get tableFormItemScopedSlots(): object[] {
    return require('assets/config/t-ui/query-bar.config.json').formItemScopedSlots
  }
  get tableFormItemMethods(): object[] {
    return require('assets/config/t-ui/query-bar.config.json').formItemMethods
  }

  // mounted(): void {}
}
</script>

<style lang="scss" scoped>
.my-query-bar {
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}
.my-login {
  width: 300px;
}
.my-form {
  width: 350px;
}
</style>
