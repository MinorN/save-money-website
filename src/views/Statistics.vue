<template>
  <Layout>
    <Tabs class-prefix="type" :value.sync="type" :data-source="recordTypeList"/>
    <Tabs class-prefix="interval" :value.sync="interval" :data-source="intervalList"/>
    <ol>
      <li v-for="(group,index) in result" :key="index.id">
        <h3 class="title">{{ group.title }}</h3>
        <ol>
          <li class="record" v-for="item in group.items" :key="item.id">
            <span>{{ tagString(item.tags) }}</span>
            <span class="notes">{{item.notes}}</span>
            <span>￥{{ item.amount }}</span>
          </li>
        </ol>
      </li>
    </ol>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import intervalList from '@/constants/intervalList';
import recordTypeList from '@/constants/recordTypeList';
/* eslint-disable */
@Component({
  components: {Tabs}
})
export default class Statistics extends Vue {
  tagString(tags: Tag[]) {
    return tags.length === 0 ? '无' : tags.join(',');
  }

  get recordList() {
    return (this.$store.state as RootType).recordList;
  }

  get result() {
    const {recordList} = this;
    type HashTableValue = { title: string, items: RecordItem[] }
    const hashTable: { [key: string]: HashTableValue } = {};
    for (let i = 0; i < recordList.length; i++) {
      const [date, time] = recordList[i].createdAT!.split('T');
      hashTable[date] = hashTable[date] || {title: date, items: []};
      hashTable[date].items.push(recordList[i]);
    }
    return hashTable;
  }

  beforeCreate() {
    this.$store.commit('fetchRecords');
  }

  type = '-';
  interval = 'day';
  intervalList = intervalList;
  recordTypeList = recordTypeList;
}
</script>

<style lang="scss" scoped>
::v-deep .type-tabs-item {
  background: white;

  &.selected {
    background: #c4c4c4;

    &::after {
      display: none;
    }
  }
}

::v-deep .interval-tabs-item {
  height: 48px;
}

%item {
  padding: 8px 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title {
  @extend %item
}

.record {
  background: white;
  @extend %item
}
.notes{
  margin-right: auto;
  margin-left: 16px;
  color: #999;
}


</style>