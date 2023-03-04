<template>
  <div class="model-box">
    <template>
      <ul class="infinite-list" v-infinite-scroll="load" style="overflow: auto">
        <li class="infinite-list-item" v-for="i in count" :key="i">{{ i }}</li>
      </ul>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class JiChuYongFa extends Vue {
  count = 0

  load() {
    this.count += 2
  }
}
</script>

<style lang="scss" scoped>
.infinite-list {
  height: 300px;
  padding: 0;
  margin: 0;
  list-style: none;

  &-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background: #e8f3fe;
    margin: 10px;
    color: #7dbcfc;

    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
}
</style>
