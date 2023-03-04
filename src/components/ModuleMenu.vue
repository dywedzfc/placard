<template>
  <div class="index-menu">
    <template v-for="item in menu">
      <router-link
        :class="['index-menu-item', { active: $route.path == item.path }]"
        v-if="item.type !== 'title' && item.type !== 'group'"
        tag="div"
        :to="item.path"
        :key="item.id"
      >
        <template v-if="!item.NE">{{ excisionCapitalize(item.id) }} </template>{{ item.title }}
      </router-link>
      <div class="index-menu-item nav__title" v-else-if="item.type === 'title'" :key="item.id">
        {{ capitalize(item.title) }}
      </div>
      <div class="index-menu-item nav__group" v-else :key="item.id">
        {{ capitalize(item.title) }}
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import PageNavigationItem from './PageNavigationItem.vue'
import { capitalize } from '@/assets/js/util'

@Component({ components: { PageNavigationItem } })
export default class ModuleMenu extends Vue {
  @Prop({ type: Array, required: true }) menu!: any[]

  capitalize(value: string): string {
    return capitalize(value)
  }
  excisionCapitalize(value: string): string {
    return capitalize(value, true)
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
