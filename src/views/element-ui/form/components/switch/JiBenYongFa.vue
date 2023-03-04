<template>
  <div class="model-box">
    <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class JiBenYongFa extends Vue {
  value = true
}
</script>

<style lang="scss" scoped></style>
