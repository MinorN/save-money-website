<template>
  <nav>
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="money"/>
      记账
    </router-link>
    <router-link to="/labels" class="item" active-class="selected">
      <Icon name="label"/>
      标签
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="statistics"/>
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
@Component
export default class Nav extends Vue {

}
</script>

<style lang="scss" scoped>
@import "src/assets/style/helper";
nav {
  @extend %outerShadow;
  display: flex;
  font-size: 12px;

  > .item {
    width: 33.333333%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2px 0;

    > .icon {
      width: 32px;
      height: 32px;
    }
  }
  >.item.selected{
    color:$color-highlight
  }
}
</style>