<template>
  <div class="flex width-100">
    <div
      v-for="item in list"
      :key="id"
      class="zan-tab__item width-100"
      :class="{'zan-tab__item--selected': selectedId === item.id }"
      :data-component-id="componentId"
      :data-item-id="item.id"
      @click="__change"
    >
      <div class="zan-tab__title width-100">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
  import {extractComponentId} from '@/plugins/utils/helper'
  export default {
    props: ['list', 'selectedId', 'componentId', '_handleZanTabChange'],
    methods: {
      __change (e) {
        const componentId = extractComponentId(e)
        const dataset = e.currentTarget.dataset
        const selectedId = dataset.itemId
        const data = { componentId, selectedId }
        this.$emit('change', data)
      }
    }
  }
</script>

<style scoped>

</style>
