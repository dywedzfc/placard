<template>
  <div class="model-box">
    <el-input-number v-model="num" :disabled="true"></el-input-number>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class JinYongZhuangTai extends Vue {
  num = 1
}
</script>

<style lang="scss" scoped></style>
