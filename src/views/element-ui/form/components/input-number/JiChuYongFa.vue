<template>
  <div class="model-box">
    <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class JiChuYongFa extends Vue {
  num = 1

  handleChange(value: number) {
    console.log(value)
  }
}
</script>

<style lang="scss" scoped></style>
