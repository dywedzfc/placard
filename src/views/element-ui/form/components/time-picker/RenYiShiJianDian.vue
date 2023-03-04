<template>
  <div class="model-box">
    <el-time-picker
      v-model="value1"
      :picker-options="{ selectableRange: '18:30:00 - 20:30:00' }"
      placeholder="任意时间点"
    >
    </el-time-picker>
    <el-time-picker
      arrow-control
      v-model="value2"
      :picker-options="{ selectableRange: '18:30:00 - 20:30:00' }"
      placeholder="任意时间点"
    >
    </el-time-picker>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class RenYiShiJianDian extends Vue {
  value1 = new Date(2016, 9, 10, 18, 40)
  value2 = new Date(2016, 9, 10, 18, 40)
}
</script>

<style lang="scss" scoped></style>
