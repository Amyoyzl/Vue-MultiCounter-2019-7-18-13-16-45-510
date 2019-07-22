<template>
  <div id="counterGroup">
    <v-counter v-for="(n, index) in counterNum" :key="index"></v-counter>
    <v-counterSum></v-counterSum>
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
  props: ['counterNum']
};
</script>
