<template>
  <div class="model-box">
    <el-switch v-model="value1" disabled></el-switch>
    <el-switch v-model="value2" disabled></el-switch>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class JinYongZhuangTai extends Vue {
  value1 = true
  value2 = false
}
</script>

<style lang="scss" scoped>
.el-switch {
  margin: 20px 20px 20px 0;
}
</style>
