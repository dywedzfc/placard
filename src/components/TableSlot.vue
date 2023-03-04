<template>
  <table class="table-props">
    <thead>
      <tr>
        <th>name</th>
        <th>说明</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in data" :key="index">
        <td>{{ item.name }} <span class="key-point" v-if="item.keyPoint">*</span></td>
        <td>{{ item.directions }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class TableSlot extends Vue {
  @Prop({ type: Array }) private data!: object[]
}
</script>
