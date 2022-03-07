<template>
  <div>
    <Layout class-prefix="layout">
      <NumberPad :value="record.amount" @update:value="onUpdateAmount" @submit="saveRecord"/>
      <Tabs :data-source="recordTypeList" :value.sync="record.type" />
      <FormItem placeholder="在这里输入备注" field-name="备注" @update:value="onUpdateNotes"/>
      <Tags/>
    </Layout>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Tags from '@/components/Money/Tags.vue';
import FormItem from '@/components/Money/FormItem.vue';
import Tabs from '@/components/Tabs.vue';
import recordTypeList from '@/constants/recordTypeList';

@Component({
  components: {Tabs, FormItem, Tags, Types, NumberPad},
})
export default class Money extends Vue {
  record: RecordItem = {tags: [], notes: '', type: '-', amount: 0};
  recordTypeList = recordTypeList;

  get recordList() {
    return this.$store.state.recordList;
  }

  created() {
    this.$store.commit('fetchRecords');
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }

  saveRecord() {
    this.$store.commit('createRecord', this.record);
  }


}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
