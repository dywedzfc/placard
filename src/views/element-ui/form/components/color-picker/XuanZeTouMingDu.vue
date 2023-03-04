<template>
  <div class="model-box">
    <el-color-picker v-model="color" show-alpha></el-color-picker>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class XuanZeTouMingDu extends Vue {
  color = 'rgba(19, 206, 102, 0.8)'
}
</script>

<style lang="scss" scoped></style>
