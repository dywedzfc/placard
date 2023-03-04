<template>
  <div class="model-box">
    <div class="block">
      <p>组件值：{{ value }}</p>
      <el-date-picker
        v-model="value"
        type="daterange"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :default-time="['00:00:00', '23:59:59']"
      >
      </el-date-picker>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class MoRenXianShiRiQi extends Vue {
  value = ''
}
</script>

<style lang="scss" scoped></style>
