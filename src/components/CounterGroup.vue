<template>
  <div id="counterGroup">
    <v-counter v-for="(n, index) in counterNum" :key="index"></v-counter>
  </div>
</template>

<script>
import Counter from './Counter.vue'
export default {
  name: "CounterGroup",
  components: {
    "v-counter": Counter
  },
  props: ['counterNum']
};
</script>
