<template>
  <div class="model-box">
    <el-tree :props="props" :load="loadNode" lazy show-checkbox @check-change="handleCheckChange"> </el-tree>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class KeXuanZe extends Vue {
  props = {
    label: 'name',
    children: 'zones',
  }
  count = 1

  handleCheckChange(data: any, checked: any, indeterminate: any) {
    console.log(data, checked, indeterminate)
  }
  handleNodeClick(data: any) {
    console.log(data)
  }
  loadNode(node: any, resolve: any) {
    if (node.level === 0) { return resolve([{ name: 'region1' }, { name: 'region2' }]) }

    if (node.level > 3) { return resolve([]) }
    let hasChild: any
    if (node.data.name === 'region1') { hasChild = true } else if (node.data.name === 'region2') { hasChild = false } else { hasChild = Math.random() > 0.5 }

    setTimeout(() => {
      let data: any
      if (hasChild) { data = [{ name: 'zone' + this.count++ }, { name: 'zone' + this.count++ }] } else { data = [] }

      resolve(data)
    }, 500)
  }
}
</script>

<style lang="scss" scoped></style>
