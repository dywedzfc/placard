<template>
  <div class="model-box">
    <div class="infinite-list-wrapper" style="overflow: auto">
      <ul
        class="list"
        v-infinite-scroll="load"
        infinite-scroll-disabled="disabled"
      >
        <li class="list-item" v-for="i in count" :key="i">{{ i }}</li>
      </ul>
      <p v-if="loading">加载中...</p>
      <p v-if="noMore">没有更多了</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class JinYongJiaZai extends Vue {
  count = 10
  loading = false

  get noMore() {
    return this.count >= 20
  }
  get disabled() {
    return this.loading || this.noMore
  }

  load() {
    this.loading = true
    setTimeout(() => {
      this.count += 2
      this.loading = false
    }, 2000)
  }
}
</script>

<style lang="scss" scoped>
.infinite-list-wrapper {
  height: 300px;
  .list {
    padding: 0;
    margin: 0;
    list-style: none;

    .list-item {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
      background: #fff6f6;
      color: #ff8484;

      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
  }
  p {
    text-align: center;
  }
}
</style>
