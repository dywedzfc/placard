<template>
  <div class="model-box">
    <template>
      <el-table :data="tableData" style="width: 100%" :default-sort="{ prop: 'date', order: 'descending' }">
        <el-table-column prop="date" label="日期" sortable width="180"> </el-table-column>
        <el-table-column prop="name" label="姓名" sortable width="180"> </el-table-column>
        <el-table-column prop="address" label="地址" :formatter="formatter"> </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class PaiXu extends Vue {
  tableData = [
    { date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
    { date: '2016-05-04', name: '王小虎', address: '上海市普陀区金沙江路 1517 弄' },
    { date: '2016-05-01', name: '王小虎', address: '上海市普陀区金沙江路 1519 弄' },
    { date: '2016-05-03', name: '王小虎', address: '上海市普陀区金沙江路 1516 弄' },
  ]

  formatter(row: any, column: any) {
    return row.address
  }
}
</script>

<style lang="scss" scoped></style>
