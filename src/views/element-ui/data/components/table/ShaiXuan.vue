<template>
  <div class="model-box">
    <template>
      <el-button @click="resetDateFilter">清除日期过滤器</el-button>
      <el-button @click="clearFilter">清除所有过滤器</el-button>
      <el-table ref="filterTable" :data="tableData" style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          sortable
          width="180"
          column-key="date"
          :filters="[
            { text: '2016-05-01', value: '2016-05-01' },
            { text: '2016-05-02', value: '2016-05-02' },
            { text: '2016-05-03', value: '2016-05-03' },
            { text: '2016-05-04', value: '2016-05-04' },
          ]"
          :filter-method="filterHandler"
        >
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
        <el-table-column prop="address" label="地址" :formatter="formatter"> </el-table-column>
        <el-table-column
          prop="tag"
          label="标签"
          width="100"
          :filters="[
            { text: '家', value: '家' },
            { text: '公司', value: '公司' },
          ]"
          :filter-method="filterTag"
          filter-placement="bottom-end"
        >
          <template slot-scope="scope">
            <el-tag :type="scope.row.tag === '家' ? 'primary' : 'success'" disable-transitions>{{
              scope.row.tag
            }}</el-tag>
          </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ShaiXuan extends Vue {
  tableData = [
    { date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄', tag: '家' },
    { date: '2016-05-04', name: '王小虎', address: '上海市普陀区金沙江路 1517 弄', tag: '公司' },
    { date: '2016-05-01', name: '王小虎', address: '上海市普陀区金沙江路 1519 弄', tag: '家' },
    { date: '2016-05-03', name: '王小虎', address: '上海市普陀区金沙江路 1516 弄', tag: '公司' },
  ]

  resetDateFilter() {
    ; (this.$refs.filterTable as any).clearFilter('date')
  }
  clearFilter() {
    ; (this.$refs.filterTable as any).clearFilter()
  }
  formatter(row: any, column: any) {
    return row.address
  }
  filterTag(value: any, row: any) {
    return row.tag === value
  }
  filterHandler(value: any, row: any, column: any) {
    const property = column.property
    return row[property] === value
  }
}
</script>

<style lang="scss" scoped></style>
