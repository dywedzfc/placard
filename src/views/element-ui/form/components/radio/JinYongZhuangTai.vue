<template>
  <div class="model-box">
    <el-radio disabled v-model="radio" label="禁用">备选项</el-radio>
    <el-radio disabled v-model="radio" label="选中且禁用">备选项</el-radio>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class JinYongZhuangTai extends Vue {
  radio = '选中且禁用'
}
</script>

<style lang="scss" scoped></style>
