<template>
  <div class="model-box">
    <el-time-select
      v-model="value"
      :picker-options="{ start: '08:30', step: '00:15', end: '18:30' }"
      placeholder="选择时间"
    >
    </el-time-select>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class GuDingShiJianDian extends Vue {
  value = ''
}
</script>

<style lang="scss" scoped></style>
