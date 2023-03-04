<template>
  <t-layout class="index-wrapper" header="80" left="240" innter-border>
    <template v-slot:header>
      <t-header></t-header>
    </template>
    <template v-slot:left>
      <module-menu :menu="menu" />
    </template>
    <div class="index-body" ref="index-body">
      <router-view />
    </div>
  </t-layout>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import THeader from 'components/Header.vue'
import ModuleMenu from '@/components/ModuleMenu.vue'

@Component({ components: { THeader, ModuleMenu } })
export default class ComponentIndex extends Vue {
  menu: object[] = []

  @Watch('$route', { immediate: true, deep: true })
  watch$router(value: any, vold: any) {
    this.$nextTick(() => {
      // const indexBoby: any = this.$refs['index-body']
      // if (value != vold) indexBoby.scrollTop = 0
      document.documentElement.scrollTop = 0
    })
  }

  mounted(): void {
    this.menu = require('assets/js/menu').getMenuList('element-ui')
  }
}
</script>

<style lang="scss" scoped></style>
