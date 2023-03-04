<template>
  <div class="page-navigation">
    <slot></slot>
    <page-navigation-item class="page-return-top" v-if="display" :target="returnTop">
      <template><i class="el-icon-top"></i></template>
      <template>{{ '返回顶部' }}</template>
    </page-navigation-item>
    <!-- <div class="page-button page-return-top" v-if="display" @click="handleReturnTopClick">
      返回顶部
    </div> -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import PageNavigationItem from './PageNavigationItem.vue'

@Component({ components: { PageNavigationItem } })
export default class PageNavigation extends Vue {
  display = false

  @Prop({ type: String }) target?: string

  get returnTop() {
    if (this.target) { return this.target } else { return 'returnTop' }
  }

  mounted(): void {
    this.$nextTick(() => {
      window.addEventListener('scroll', this.handleScroll)
    })
  }
  destroyed(): void {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(): void {
    if (window.scrollY >= 300) { this.display = true } else { this.display = false }
  }
  handleReturnTopClick(): void {
    window.scrollTo(0, 0)
  }
}
</script>

<style lang="scss" scoped>
.page-navigation {
  position: fixed;
  top: 90px;
  left: calc(50% + (1260px / 2) - 130px);
  width: 130px;
}
.page-return-top::v-deep.page-button {
  color: #999999;

  &:hover {
    color: #409eff;
  }
}
.page-return-top {
  // position: relative;
  margin-top: 20px;
  // text-align: center;

  // i {
  //   position: absolute;
  //   top: 50%;
  //   left: -5px;
  //   transform: translateY(-50%);
  // }
}
</style>
