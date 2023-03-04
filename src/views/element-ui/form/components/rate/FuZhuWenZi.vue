<template>
  <div class="model-box">
    <el-rate v-model="value" show-text> </el-rate>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class FuZhuWenZi extends Vue {
  value = null
}
</script>

<style lang="scss" scoped></style>
