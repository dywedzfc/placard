<template>
  <div class="model-box">
    <div class="block">
      <el-slider v-model="value" show-input> </el-slider>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class DaiYouShuRuKuang extends Vue {
  value = 0
}
</script>

<style lang="scss" scoped></style>
