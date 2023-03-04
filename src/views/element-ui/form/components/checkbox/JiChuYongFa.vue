<template>
  <div class="model-box">
    <!-- `checked` 为 true 或 false -->
    <el-checkbox v-model="checked">备选项</el-checkbox>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class JiChuYongFa extends Vue {
  checked = true
}
</script>

<style lang="scss" scoped></style>
