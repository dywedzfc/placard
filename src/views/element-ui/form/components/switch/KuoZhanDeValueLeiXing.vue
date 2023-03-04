<template>
  <div class="model-box">
    <el-tooltip :content="'Switch value: ' + value" placement="top">
      <el-switch
        v-model="value"
        active-color="#13ce66"
        inactive-color="#ff4949"
        active-value="100"
        inactive-value="0"
      />
    </el-tooltip>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class KuoZhanDeValueLeiXing extends Vue {
  value = '100'
}
</script>

<style lang="scss" scoped></style>
