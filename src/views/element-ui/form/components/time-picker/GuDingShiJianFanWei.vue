<template>
  <div class="model-box">
    <el-time-select
      placeholder="起始时间"
      v-model="startTime"
      :picker-options="{ start: '08:30', step: '00:15', end: '18:30' }"
    >
    </el-time-select>
    <el-time-select
      placeholder="结束时间"
      v-model="endTime"
      :picker-options="{ start: '08:30', step: '00:15', end: '18:30', minTime: startTime }"
    >
    </el-time-select>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class GuDingShiJianFanWei extends Vue {
  startTime = ''
  endTime = ''
}
</script>

<style lang="scss" scoped></style>
