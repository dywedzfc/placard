<template>
  <div class="model-box">
    <template>
      <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
        <el-table-column prop="date" label="日期" width="180"> </el-table-column>
        <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class DaiZhuangTaiBiaoGe extends Vue {
  tableData = [
    { date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
    { date: '2016-05-04', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
    { date: '2016-05-01', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
    { date: '2016-05-03', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
  ]

  tableRowClassName({ row, rowIndex }: any) {
    if (rowIndex === 1) {
      return 'warning-row'
    } else if (rowIndex === 3) {
      return 'success-row'
    }
    return ''
  }
}
</script>

<style lang="scss" scoped>
.el-table .warning-row {
  background: oldlace;
}
.el-table .success-row {
  background: #f0f9eb;
}
</style>
