<template>
  <div class="index-header">
    <div class="title">小书包</div>
    <ul class="nav">
      <router-link
        class="nav-item"
        :class="{ active: hasActive(item.path) }"
        tag="li"
        :to="item.path"
        v-for="item in systemList"
        :key="item.id"
      >
        {{ item.title }}
      </router-link>
      <div class="nav-item nav-gap"></div>
      <div class="nav-item nav-versions">{{ version }}</div>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

@Component
export default class THeader extends Vue {
  version: string = ''

  get systemList(): object[] {
    return require('assets/js/menu').getSystemList()
  }

  @Watch('$route.path', { immediate: true }) watchRoutePath(path: string): void {
    console.info('info-router:', path)
    if (path.indexOf('/t-ui') === 0) {
      this.version = require('@ipeak/t-ui/package.json').version
    }
    if (path.indexOf('/element-ui') === 0) {
      this.version = require('element-ui/package.json').version
    }
  }

  hasActive(path: string): boolean {
    if (path === '/') {
      return this.$route.path === path
    }
    return this.$route.path.indexOf(path) === 0
  }
}
</script>
