<template>
  <div class="model-box">
    <el-select v-model="value" multiple filterable allow-create default-first-option placeholder="请选择文章标签">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
    </el-select>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ChuangJianTiaoMu extends Vue {
  options = [
    { value: 'HTML', label: 'HTML' },
    { value: 'CSS', label: 'CSS' },
    { value: 'JavaScript', label: 'JavaScript' },
  ]
  value = []
}
</script>

<style lang="scss" scoped></style>
