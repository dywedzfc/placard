<template>
  <span :class="[codeClassName]" v-html="codeType"></span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { codeType, codeClassName } from '@/assets/js/util'

interface CodePan {
  script: string
  html: string
  style: string
}

@Component
export default class CodeLine extends Vue {
  @Prop({ type: String }) private type?: string
  @Prop({ type: String, required: true }) private code!: string

  get codeType(): string {
    return codeType(this.type || '', this.code)
  }
  get codeClassName(): string {
    return codeClassName(this.type || '')
  }
}
</script>

<style lang="scss"></style>
