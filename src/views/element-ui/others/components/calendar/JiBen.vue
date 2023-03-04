<template>
  <div class="model-box">
    <el-calendar v-model="value"> </el-calendar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class JiBen extends Vue {
  value = new Date()
}
</script>

<style lang="scss" scoped></style>
