<template>
  <div class="page-container">
    <h2 id="header">TablePage 分页表格</h2>
    <p>用于数据展示。</p>

    <page-navigation target="header">
      <page-navigation-item target="base-code">常见页面布局</page-navigation-item>
      <page-navigation-item target="highlight-code">选中高亮</page-navigation-item>
      <page-navigation-item target="formatter-code">格式化</page-navigation-item>
      <page-navigation-item target="sort-code">排序</page-navigation-item>
      <page-navigation-item target="summary-code">统计</page-navigation-item>
      <page-navigation-item target="method-code">合并</page-navigation-item>
      <page-navigation-item target="backstage-code">后端分页</page-navigation-item>
      <page-navigation-item target="table-attributes" text="Table Attributes" />
      <page-navigation-item target="table-events" text="Table Events" />
      <page-navigation-item target="table-index-attributes" text="Table Index Attributes" />
      <page-navigation-item target="table-checkbox-attributes" text="Table Checkbox Attributes" />
      <page-navigation-item target="table-column-attributes" text="Table Column Attributes" />
      <page-navigation-item target="table-column-slot" text="Table Column Slot" />
      <page-navigation-item target="table-operate-attributes" text="Table Operate Attributes" />
      <page-navigation-item target="table-operate-slot" text="Table Operate Slot" />
      <page-navigation-item target="table-button-attributes" text="Table Button Attributes" />
    </page-navigation>

    <h3 id="base-code">基础用法</h3>
    <demo-block>
      <template v-slot:source>
        <t-table-page :loading="table1.loading" :data="table1.data" :page-size="table1.pageSize" height="300px">
          <t-table-index />
          <t-table-column prop="date" label="日期" width="180" />
          <t-table-column prop="name" label="姓名" width="180" />
          <t-table-column prop="address" label="地址" />
        </t-table-page>
      </template>
      <template v-slot:highlight>
        <code-line v-for="(item, index) in baseCode" :key="index" :type="item.type" :code="item.data" />
      </template>
    </demo-block>

    <h3 id="highlight-code">选中高亮</h3>
    <demo-block>
      <template v-slot:source>
        <t-table-page
          :loading="table1.loading"
          :data="table1.data"
          :page-size="table1.pageSize"
          max-height="200px"
          highlight-current-row
        >
          <t-table-index />
          <t-table-column prop="date" label="日期" width="180" />
          <t-table-column prop="name" label="姓名" width="180" />
          <t-table-column prop="address" label="地址" />
        </t-table-page>
      </template>
      <template v-slot:highlight>
        <code-line v-for="(item, index) in highlightCode" :key="index" :type="item.type" :code="item.data" />
      </template>
    </demo-block>

    <h3 id="formatter-code">格式化</h3>
    <demo-block>
      <template v-slot:source>
        <t-table-page :loading="table1.loading" :data="table1.data" :page-size="table1.pageSize" height="300px">
          <t-table-index />
          <t-table-column prop="date" label="日期" width="180" />
          <t-table-column prop="name" label="姓名" width="180" :v-formatter="tableColumnFormatter" />
          <t-table-column prop="address" label="地址" />
        </t-table-page>
      </template>
      <template v-slot:highlight>
        <code-line v-for="(item, index) in formatterCode" :key="index" :type="item.type" :code="item.data" />
      </template>
    </demo-block>

    <h3 id="sort-code">排序</h3>
    <demo-block>
      <template v-slot:source>
        <t-table-page
          :loading="table3.loading"
          :data="table3.data"
          :page-size="table3.pageSize"
          :default-sort="{ prop: 'date', order: 'descending' }"
          height="300px"
        >
          <t-table-index />
          <t-table-column prop="date" label="日期" width="180" />
          <t-table-column prop="name" label="姓名" width="180" />
          <t-table-column prop="address" label="地址" />
        </t-table-page>
      </template>
      <template v-slot:highlight>
        <code-line v-for="(item, index) in defaultSortCode" :key="index" :type="item.type" :code="item.data" />
      </template>
    </demo-block>

    <h3 id="summary-code">统计</h3>
    <demo-block>
      <template v-slot:source>
        <t-table-page
          :loading="table2.loading"
          :data="table2.data"
          :page-size="table2.pageSize"
          max-height="200px"
          show-summary
          :summary-method="summaryValue"
        >
          <t-table-index />
          <t-table-column prop="name" label="姓名" />
          <t-table-column prop="date" label="语文" />
          <t-table-column prop="name1" label="数学" />
          <t-table-column prop="address" label="英语" />
        </t-table-page>
      </template>
      <template v-slot:highlight>
        <code-line v-for="(item, index) in summaryCode" :key="index" :type="item.type" :code="item.data" />
      </template>
    </demo-block>

    <h3 id="method-code">合并</h3>
    <demo-block>
      <template v-slot:source>
        <t-table-page
          :loading="table2.loading"
          :data="table2.data"
          :page-size="table2.pageSize"
          max-height="200px"
          :span-method="spanMergeMethod"
        >
          <t-table-index />
          <t-table-column label="组合" width="80px" />
          <t-table-column prop="name" label="姓名" />
          <t-table-column prop="date" label="语文" />
          <t-table-column prop="name1" label="数学" />
          <t-table-column prop="address" label="英语" />
        </t-table-page>
      </template>
      <template v-slot:highlight>
        <code-line v-for="(item, index) in spanMethodCode" :key="index" :type="item.type" :code="item.data" />
      </template>
    </demo-block>

    <h3 id="backstage-code">后端分页</h3>
    <demo-block>
      <template v-slot:source>
        <div class="my-panel">
          <t-table-page
            :loading.sync="table4.loading"
            :data="table4.data"
            :real-time-page.sync="table4.page"
            :page-size="table4.pageSize"
            :page-total="table4.total"
            @current-change="handleTableCurrentChange"
          >
            <t-table-index type="count" />
            <t-table-column prop="date" label="日期" width="180" />
            <t-table-column prop="name" label="姓名" width="180" />
            <t-table-column prop="address" label="地址" />
          </t-table-page>
        </div>
      </template>
      <template v-slot:highlight>
        <code-line v-for="(item, index) in backstageCode" :key="index" :type="item.type" :code="item.data" />
      </template>
    </demo-block>

    <h3 id="table-attributes">Table Attributes</h3>
    <table-props :data="tableAttributes" />
    <h3 id="table-events">Table Events</h3>
    <table-events :data="tableEvents" />
    <h3 id="table-index-attributes">Table Index Attributes</h3>
    <table-props :data="tableIndexAttributes" />
    <h3 id="table-checkbox-attributes">Table Checkbox Attributes</h3>
    <table-props :data="tableCheckboxAttributes" />
    <h3 id="table-column-attributes">Table Column Attributes</h3>
    <table-props :data="tableColumnAttributes" />
    <h3 id="table-column-slot">Table Column Slot</h3>
    <table-slot :data="tableColumnSlot" />
    <h3 id="table-operate-attributes">Table Operate Attributes</h3>
    <table-props :data="tableOperateAttributes" />
    <h3 id="table-operate-slot">Table Operate Slot</h3>
    <table-slot :data="tableOperateSlot" />
    <h3 id="table-button-attributes">Table Button Attributes</h3>
    <table-props :data="tableButtonAttributes" />
    <!-- <h3>Page Events</h3>
    <table-events :data="tablePageEvents" /> -->
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
import TableEvents from 'components/TableEvents.vue'
import TableSlot from 'components/TableSlot.vue'
import PageNavigation from 'components/PageNavigation.vue'
import PageNavigationItem from 'components/PageNavigationItem.vue'

@Component({
  components: {
    CodeLine,
    DemoBlock,
    TableProps,
    TableEvents,
    TableSlot,
    PageNavigation,
    PageNavigationItem,
  },
})
export default class TablePageView extends Vue {
  table1 = { loading: false, data: [], pageSize: 10 }
  table2 = { loading: false, data: [], pageSize: 100 }
  table3 = { loading: false, data: [], pageSize: 100 }
  table4 = { loading: false, data: [], page: 1, pageSize: 10, total: 0 }

  get baseCode(): object[] {
    return require('assets/config/t-ui/table-pages.config').code.baseCode
  }
  get highlightCode(): object[] {
    return require('assets/config/t-ui/table-pages.config').code.highlightCode
  }
  get formatterCode(): object[] {
    return require('assets/config/t-ui/table-pages.config').code.formatterCode
  }
  get defaultSortCode(): object[] {
    return require('assets/config/t-ui/table-pages.config').code.defaultSortCode
  }
  get summaryCode(): object[] {
    return require('assets/config/t-ui/table-pages.config').code.summaryCode
  }
  get spanMethodCode(): object[] {
    return require('assets/config/t-ui/table-pages.config').code.spanMethodCode
  }
  get backstageCode(): object[] {
    return require('assets/config/t-ui/table-pages.config').code.backstageCode
  }
  get tableAttributes(): object[] {
    return require('assets/config/t-ui/table-pages.config').attributes
  }
  get tableEvents(): object[] {
    return require('assets/config/t-ui/table-pages.config').events
  }
  get tableIndexAttributes(): object[] {
    return require('assets/config/t-ui/table-pages.config').tableIndexAttributes
  }
  get tableOperateAttributes(): object[] {
    return require('assets/config/t-ui/table-pages.config').tableOperateAttributes
  }
  get tableOperateSlot(): object[] {
    return require('assets/config/t-ui/table-pages.config').tableOperateSlot
  }
  get tableColumnAttributes(): object[] {
    return require('assets/config/t-ui/table-pages.config').tableColumnAttributes
  }
  get tableColumnSlot(): object[] {
    return require('assets/config/t-ui/table-pages.config').tableColumnSlot
  }
  get tableButtonAttributes(): object[] {
    return require('assets/config/t-ui/table-pages.config').tableButtonAttributes
  }
  get tableCheckboxAttributes(): object[] {
    return require('assets/config/t-ui/table-pages.config').tableCheckboxAttributes
  }
  get tablePageEvents(): object[] {
    return require('assets/config/t-ui/table-pages.config').pageEvents
  }

  created(): void {
    this.table1.data = [
      { date: '2016-05-03', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
      { date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
      { date: '2016-05-04', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
      { date: '2016-05-01', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
      { date: '2016-05-08', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
      { date: '2016-05-06', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
      { date: '2016-05-07', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
      { date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
      { date: '2016-05-04', name: '王小虎', address: '上海市普陀区金沙江路 1517 弄' },
      { date: '2016-05-01', name: '王小虎', address: '上海市普陀区金沙江路 1519 弄' },
      { date: '2016-05-03', name: '王小虎', address: '上海市普陀区金沙江路 1516 弄' },
    ] as any
    this.table2.data = [
      { name: '张三', date: 93, name1: 98, address: 96 },
      { name: '李四', date: 82, name1: 95, address: 99 },
      { name: '王五', date: 94, name1: 88, address: 73 },
      { name: '李六', date: 71, name1: 74, address: 94 },
      { name: '敬伟', date: 98, name1: 84, address: 64 },
      { name: '彩玲', date: 66, name1: 78, address: 80 },
      { name: '刘华', date: 87, name1: 81, address: 69 },
      { name: '白菜', date: 82, name1: 72, address: 77 },
      { name: '华彩', date: 64, name1: 69, address: 50 },
      { name: '刘丹', date: 91, name1: 96, address: 78 },
      { name: '奇华', date: 73, name1: 82, address: 70 },
    ] as any
    this.table3.data = [
      { id: 1, date: '2016-05-03', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
      { id: 2, date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
      {
        id: 3,
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        // hasChildren: true
        children: [
          {
            id: 31,
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
          },
          {
            id: 32,
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
          },
        ],
      },
      { id: 4, date: '2016-05-01', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
      { id: 5, date: '2016-05-08', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
      { id: 6, date: '2016-05-06', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
      { id: 7, date: '2016-05-07', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
      { id: 8, date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
      { id: 9, date: '2016-05-04', name: '王小虎', address: '上海市普陀区金沙江路 1517 弄' },
      { id: 10, date: '2016-05-01', name: '王小虎', address: '上海市普陀区金沙江路 1519 弄' },
      { id: 11, date: '2016-05-03', name: '王小虎', address: '上海市普陀区金沙江路 1516 弄' },
    ] as any
    this.getUserInfo()
  }

  getUserInfo(): void {
    const data = [
      { date: '2016-05-03', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
      { date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1519 弄' },
      { date: '2016-05-04', name: '王小虎', address: '上海市普陀区金沙江路 1520 弄' },
      { date: '2016-05-01', name: '王小虎', address: '上海市普陀区金沙江路 1521 弄' },
      { date: '2016-04-30', name: '王小虎', address: '上海市普陀区金沙江路 1522 弄' },
      { date: '2016-04-29', name: '王小虎', address: '上海市普陀区金沙江路 1523 弄' },
      { date: '2016-04-28', name: '王小虎', address: '上海市普陀区金沙江路 1524 弄' },
      { date: '2016-04-27', name: '王小虎', address: '上海市普陀区金沙江路 1525 弄' },
      { date: '2016-04-26', name: '王小虎', address: '上海市普陀区金沙江路 1526 弄' },
      { date: '2016-04-26', name: '王小虎', address: '上海市普陀区金沙江路 1527 弄' },
      { date: '2016-04-25', name: '王小虎', address: '上海市普陀区金沙江路 1528 弄' },
      { date: '2016-04-24', name: '王小虎', address: '上海市普陀区金沙江路 1529 弄' },
      { date: '2016-04-23', name: '王小虎', address: '上海市普陀区金沙江路 1530 弄' },
      { date: '2016-04-22', name: '王小虎', address: '上海市普陀区金沙江路 1531 弄' },
      { date: '2016-04-21', name: '王小虎', address: '上海市普陀区金沙江路 1532 弄' },
      { date: '2016-04-20', name: '王小虎', address: '上海市普陀区金沙江路 1533 弄' },
      { date: '2016-04-19', name: '王小虎', address: '上海市普陀区金沙江路 1534 弄' },
      { date: '2016-04-18', name: '王小虎', address: '上海市普陀区金沙江路 1535 弄' },
      { date: '2016-04-17', name: '王小虎', address: '上海市普陀区金沙江路 1536 弄' },
      { date: '2016-04-16', name: '王小虎', address: '上海市普陀区金沙江路 1537 弄' },
      { date: '2016-04-15', name: '王小虎', address: '上海市普陀区金沙江路 1538 弄' },
      { date: '2016-04-14', name: '王小虎', address: '上海市普陀区金沙江路 1539 弄' },
      { date: '2016-04-13', name: '王小虎', address: '上海市普陀区金沙江路 1540 弄' },
      { date: '2016-04-12', name: '王小虎', address: '上海市普陀区金沙江路 1541 弄' },
      { date: '2016-04-11', name: '王小虎', address: '上海市普陀区金沙江路 1542 弄' },
      { date: '2016-04-10', name: '王小虎', address: '上海市普陀区金沙江路 1543 弄' },
      { date: '2016-04-09', name: '王小虎', address: '上海市普陀区金沙江路 1544 弄' },
      { date: '2016-04-08', name: '王小虎', address: '上海市普陀区金沙江路 1545 弄' },
      { date: '2016-04-07', name: '王小虎', address: '上海市普陀区金沙江路 1546 弄' },
      { date: '2016-04-06', name: '王小虎', address: '上海市普陀区金沙江路 1547 弄' },
      { date: '2016-04-05', name: '王小虎', address: '上海市普陀区金沙江路 1548 弄' },
      { date: '2016-04-04', name: '王小虎', address: '上海市普陀区金沙江路 1549 弄' },
      { date: '2016-04-03', name: '王小虎', address: '上海市普陀区金沙江路 1551 弄' },
      { date: '2016-04-02', name: '王小虎', address: '上海市普陀区金沙江路 1552 弄' },
      { date: '2016-04-01', name: '王小虎', address: '上海市普陀区金沙江路 1553 弄' },
    ]
    const { page, pageSize } = this.table4
    const total = data.length
    this.table4.total = total
    const start = (page - 1) * pageSize
    const end = page * pageSize
    this.table4.data = data.slice(start, end) as any
  }

  handleTableCurrentChange({ currentPage }: { currentPage: number }) {
    this.table4.page = currentPage
    this.getUserInfo()
  }

  tableColumnFormatter(value: string, index: number) {
    return index % 4 === 0 && index !== 0 ? '-- 小胖虎 --' : value
  }

  summaryValue({ columns, data }: any) {
    const value: any[] = []
    columns.forEach((column: any, index: number) => {
      // 只找第一列放合计
      if (index === 0) {
        return (value[index] = '平均分'), undefined
      }

      let values = data.map((item: any) => {
        const _v = Number(item[column.property])
        return isNaN(_v) ? null : _v
      }) // 把对应一列中的值全部取出，放到一个数组中
      values = values.filter((item: number) => item >= 0)
      const sum = values.reduce((prev: number, _value: number) => prev + _value, 0)
      if (sum > 0) {
        value[index] = (sum / values.length).toFixed(1)
      } else {
        value[index] = ''
      }
    })
    return value
  }

  spanMergeMethod({ row, column, rowIndex, columnIndex }: any) {
    if (columnIndex === 1) {
      if (rowIndex % 2 === 0) {
        return { rowspan: 2, colspan: 1 }
      } else {
        return { rowspan: 0, colspan: 0 }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.my-panel {
  height: 400px;
}
</style>
