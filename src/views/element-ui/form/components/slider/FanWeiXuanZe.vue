<template>
  <div class="model-box">
    <div class="block">
      <el-slider v-model="value" range show-stops :max="10"> </el-slider>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class FanWeiXuanZe extends Vue {
  value = [4, 8]
}
</script>

<style lang="scss" scoped></style>
