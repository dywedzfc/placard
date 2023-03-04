<template>
  <div class="model-box">
    <div class="demo-type">
      <el-avatar :size="60" src="https://empty" @error="errorHandler">
        <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
      </el-avatar>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class TuPianJiaZaiShiBaiDeFallbackXingWei extends Vue {
  errorHandler() {
    return true
  }
}
</script>

<style lang="scss" scoped></style>
