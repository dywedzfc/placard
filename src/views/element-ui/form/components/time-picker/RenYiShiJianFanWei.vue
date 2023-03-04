<template>
  <div class="model-box">
    <el-time-picker
      is-range
      v-model="value1"
      range-separator="至"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      placeholder="选择时间范围"
    >
    </el-time-picker>
    <el-time-picker
      is-range
      arrow-control
      v-model="value2"
      range-separator="至"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      placeholder="选择时间范围"
    >
    </el-time-picker>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class RenYiShiJianFanWei extends Vue {
  value1 = [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
  value2 = [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
}
</script>

<style lang="scss" scoped>
.el-date-editor + .el-date-editor {
  margin-left: 15px;
}
</style>
