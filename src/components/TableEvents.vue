<template>
  <table class="table-props">
    <thead>
      <tr>
        <th>事件名称</th>
        <th>说明</th>
        <th>回调参数</th>
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
export default class TableEvents extends Vue {
  @Prop({ type: Array }) private data!: object[]
}
</script>
