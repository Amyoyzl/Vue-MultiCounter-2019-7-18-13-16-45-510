<template>
  <div id="counterGroup">
    <v-counter v-for="(n, index) in counterNum" :key="index" v-on:change-counter="getSum"></v-counter>
    <v-counterSum :sum="sum"></v-counterSum>
  </div>
</template>

<script>
import Counter from './Counter.vue';
import CounterSum from './CounterSum.vue'
export default {
  name: "CounterGroup",
  components: {
    "v-counter": Counter,
    "v-counterSum": CounterSum
  },
  props: ['counterNum'],
  data() {
    return {
      sum: 0
    }
  },
  methods: {
    getSum: function(counter) {
      this.sum += counter;
    }
  }
};
</script>
