<template>
  <div class="page-button" @click="handleButtonClick">
    <slot>{{ text }}</slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class PageNavigationItem extends Vue {
  display = false

  @Prop({ type: String }) text?: string
  @Prop({ type: String, required: true }) target!: string

  handleButtonClick(): void {
    if (this.target === 'returnTop') {
      window.scrollTo(0, 0)
    } else {
      const id = document.getElementById(this.target)
      if (id) {
        id.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.page-button {
  cursor: pointer;

  height: 30px;
  padding-left: 10px;
  padding-right: 10px;

  font-size: 14px;
  line-height: 30px;
  white-space: nowrap;
  color: #888888;

  &:hover {
    color: #409eff;
  }
}
</style>
