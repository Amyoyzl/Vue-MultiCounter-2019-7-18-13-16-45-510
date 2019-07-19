<template>
  <div id="counterGroup">
    显示个数：
    <input type="text" v-model="counterNum" />
    <v-counter v-for="(n, index) in parseInt(counterNum)" :key="index"></v-counter>
  </div>
</template>

<script>
import Counter from './Counter.vue'
export default {
  name: "CounterGroup",
  components: {
    "v-counter": Counter
  },
  data() {
    return {
        counterNum: 1
    };
  }
};
</script>
