<template>
  <div id="app">
    显示个数：
    <input type="text" v-model="counterNum" />
    <v-counterGroup :counterNum="parseInt(counterNum) || 0"></v-counterGroup>
  </div>
</template>

<script>
import CounterGroup from "./components/CounterGroup.vue";
export default {
  name: "app",
  components: {
    "v-counterGroup": CounterGroup
  },
  data() {
    return {
      counterNum: 0
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
