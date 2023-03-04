<template>
  <div class="model-box">
    <el-input-number v-model="num" :step="2" step-strictly></el-input-number>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class YanGeBuShu extends Vue {
  num = 2
}
</script>

<style lang="scss" scoped></style>
