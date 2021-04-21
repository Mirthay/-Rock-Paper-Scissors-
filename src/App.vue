<template>
  <the-header> </the-header>
  <button @click="triggerRules">{{ showOrHide }} Rules</button>
  <the-rules v-if="showRules"></the-rules>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheRules from "./components/TheRules.vue";

export default {
  components: {
    TheHeader,
    TheRules,
  },
  methods: {
    triggerRules() {
      this.$store.state.showRules = !this.$store.state.showRules;
    },
  },
  computed: {
    showRules() {
      return this.$store.getters.showRules;
    },
    showOrHide() {
      return this.showRules ? "Hide" : "Show";
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: hsl(214, 47%, 23%), hsl(237, 49%, 15%);
}
</style>
