<template>
  <table class="table-props">
    <thead>
      <tr>
        <th>方法名</th>
        <th>说明</th>
        <th>参数</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in data" :key="index">
        <td>{{ item.name }} <span class="key-point" v-if="item.keyPoint">*</span></td>
        <td>{{ item.directions }}</td>
        <td>{{ item.parameter }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class TableMethods extends Vue {
  @Prop({ type: Array }) private data!: object[]
}
</script>
