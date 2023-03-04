<template>
  <div class="model-box">
    <el-rate v-model="value" disabled show-score text-color="#ff9900" score-template="{value}"> </el-rate>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ZhiDu extends Vue {
  value = 3.7
}
</script>

<style lang="scss" scoped></style>
