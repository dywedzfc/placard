<template>
  <div class="model-box">
    <el-input-number v-model="num" :step="2"></el-input-number>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class BuShu extends Vue {
  num = 5
}
</script>

<style lang="scss" scoped></style>
