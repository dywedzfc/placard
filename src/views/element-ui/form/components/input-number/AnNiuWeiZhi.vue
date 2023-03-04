<template>
  <div class="model-box">
    <el-input-number
      v-model="num"
      controls-position="right"
      @change="handleChange"
      :min="1"
      :max="10"
    ></el-input-number>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class AnNiuWeiZhi extends Vue {
  num = 1

  handleChange(value: number) {
    console.log(value)
  }
}
</script>

<style lang="scss" scoped></style>
