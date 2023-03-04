<template>
  <div class="model-box">
    <el-input-number v-model="num" :precision="2" :step="0.1" :max="10"></el-input-number>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class JingDu extends Vue {
  num = 1
}
</script>

<style lang="scss" scoped></style>
