<template>
  <div class="model-box">
    <el-checkbox v-model="checked1" disabled>备选项1</el-checkbox>
    <el-checkbox v-model="checked2" disabled>备选项</el-checkbox>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class JinYongZhuangTai extends Vue {
  checked1 = false
  checked2 = true
}
</script>

<style lang="scss" scoped></style>
