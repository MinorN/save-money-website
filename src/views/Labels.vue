<template>
  <div>
    <Layout>
      <div class="tags">
        <router-link class="tag"
                     :to="`/labels/edit/${tag.id}`"
                     v-for="tag in tags"
                     :key="tag.id">
          <span>{{ tag.name }}</span>
          <Icon name="right"/>
        </router-link>

      </div>
      <div class="createTag-wrapper">
        <Button @click.native="createTag" class="createTag">新建标签</Button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Button from '@/components/Button.vue';
import store from '@/store/index2';

@Component({
  components: {Button}
})
export default class Labels extends Vue {
  tags = store.tagList;

  createTag() {
    const name = window.prompt('请输入标签名');
    if (name) {
      store.createTag(name);
    }
  }

}

</script>

<style lang="scss" scoped>
.tags {
  font-size: 16px;
  background: white;
  padding-left: 16px;

  > .tag {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;

    svg {
      color: #666;
      margin-right: 16px;
      width: 20px;
      height: 20px;
    }
  }
}

.createTag {
  background: #87cefa;
  color: white;
  border-radius: 4px;
  border: none;
  min-height: 40px;
  padding: 0 16px;

  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 28px;
  }
}

</style>