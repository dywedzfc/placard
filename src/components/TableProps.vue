<template>
  <table class="table-props">
    <thead>
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in data" :key="index">
        <td class="parameter">
          {{ item.parameter }} <span class="key-point" v-if="item.keyPoint">*</span>
        </td>
        <td class="directions">{{ item.directions }}</td>
        <td class="type">{{ item.type }}</td>
        <td class="optional">{{ item.optional }}</td>
        <td class="default">{{ item.default }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class TableProps extends Vue {
  @Prop({ type: Array }) private data!: object[]
}
</script>
