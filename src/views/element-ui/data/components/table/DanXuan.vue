<template>
  <div class="model-box">
    <template>
      <el-table
        ref="singleTable"
        :data="tableData"
        highlight-current-row
        @current-change="handleCurrentChange"
        style="width: 100%"
      >
        <el-table-column type="index" width="50"> </el-table-column>
        <el-table-column property="date" label="日期" width="120"> </el-table-column>
        <el-table-column property="name" label="姓名" width="120"> </el-table-column>
        <el-table-column property="address" label="地址"> </el-table-column>
      </el-table>
      <div style="margin-top: 20px">
        <el-button @click="setCurrent(tableData[1])">选中第二行</el-button>
        <el-button @click="setCurrent()">取消选择</el-button>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class DanXuan extends Vue {
  tableData = [
    { date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
    { date: '2016-05-04', name: '王小虎', address: '上海市普陀区金沙江路 1517 弄' },
    { date: '2016-05-01', name: '王小虎', address: '上海市普陀区金沙江路 1519 弄' },
    { date: '2016-05-03', name: '王小虎', address: '上海市普陀区金沙江路 1516 弄' },
  ]
  currentRow = null

  setCurrent(row: any) {
    ; (this.$refs.singleTable as any).setCurrentRow(row)
  }
  handleCurrentChange(val: any) {
    this.currentRow = val
  }
}
</script>

<style lang="scss" scoped></style>
