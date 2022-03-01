<template>
  <div>
    <Layout class-prefix="layout">
      <NumberPad/>
      <Types/>
      <Notes/>
      <Tags :data-source.sync="tags" />
    </Layout>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Tags from '@/components/Money/Tags.vue';
import Notes from '@/components/Money/Notes.vue';

@Component({
  components: {Notes, Tags, Types, NumberPad}
})
export default class Money extends Vue {
  tags= ['衣','食','住','行']
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
