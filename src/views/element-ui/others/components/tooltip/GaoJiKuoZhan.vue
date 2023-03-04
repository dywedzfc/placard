<template>
  <div class="model-box">
    <el-tooltip
      :disabled="disabled"
      content="点击关闭 tooltip 功能"
      placement="bottom"
      effect="light"
    >
      <el-button @click="disabled = !disabled"
        >点击{{ disabled ? '开启' : '关闭' }} tooltip 功能</el-button
      >
    </el-tooltip>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class GaoJiKuoZhan extends Vue {
  disabled = false
}
</script>

<style lang="scss" scoped></style>
