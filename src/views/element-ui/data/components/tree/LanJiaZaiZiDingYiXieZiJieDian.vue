<template>
  <div class="model-box">
    <el-tree :props="props" :load="loadNode" lazy show-checkbox> </el-tree>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class LanJiaZaiZiDingYiXieZiJieDian extends Vue {
  props = { label: 'name', children: 'zones', isLeaf: 'leaf' }

  loadNode(node: any, resolve: any) {
    if (node.level === 0) { return resolve([{ name: 'region' }]) }

    if (node.level > 1) { return resolve([]) }
    setTimeout(() => {
      const data = [{ name: 'leaf', leaf: true }, { name: 'zone' }]
      resolve(data)
    }, 500)
  }
}
</script>

<style lang="scss" scoped></style>
