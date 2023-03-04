<template>
  <t-layout class="index-wrapper" header="80" left="240" innter-border>
    <template v-slot:header>
      <t-header></t-header>
    </template>
    <div class="index-body">
      <router-view />
    </div>
  </t-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import THeader from 'components/Header.vue'

@Component({ components: { THeader } })
export default class Index extends Vue {
  menu: object[] = []

  mounted() {
    this.menu = require('assets/js/menu').getMenuList()
  }

  capitalize(value: string): string {
    return value.substring(0, 1).toUpperCase() + value.substring(1)
  }
}
</script>

<style lang="scss" scoped></style>
