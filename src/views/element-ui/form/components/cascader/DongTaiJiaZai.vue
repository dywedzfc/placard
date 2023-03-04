<template>
  <div class="model-box">
    <el-cascader :props="props"></el-cascader>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

let id = 0
@Component
export default class DongTaiJiaZai extends Vue {
  props = {
    lazy: true,
    lazyLoad(node: any, resolve: any) {
      const { level } = node
      setTimeout(() => {
        const nodes = Array.from({ length: level + 1 }).map(item => ({
          value: ++id,
          label: `选项${id}`,
          leaf: level >= 2,
        }))
        // 通过调用resolve将子节点数据返回，通知组件数据加载完成
        resolve(nodes)
      }, 1000)
    },
  }
}
</script>

<style lang="scss" scoped></style>
