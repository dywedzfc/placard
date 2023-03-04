import _ from 'lodash'
// import { system, menu } from './menu.config.json'
// const { system, menu } = require('./menu.config.json')

export function getMenuList(id: string) {
  const { menu } = require('./menu.config.json')
  return _.filter(menu, (item: any) => id === 'ALL' || item.pid === id)
}

export function getSystemList() {
  const { system } = require('./menu.config.json')
  return system
}
