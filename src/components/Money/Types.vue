<template>
  <div>
    <ul class="types">
      <li class="selected">支出</li>
      <li>收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Types extends Vue {

}
</script>

<style lang="scss" scoped>
.types {
  font-size: 24px;
  background: #c4c4c4;
  display: flex;
  text-align: center;

  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &.selected::after {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      height: 4px;
      background: #333;
    }
  }

}
</style>