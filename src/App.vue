<template>
  <the-header></the-header>

  <game-items v-if="!playerSelected"></game-items>
  <game-result v-if="playerSelected"></game-result>
  <router-link @click="triggerRules" to="/rules"
    >{{ showOrHide }} Rules</router-link
  >
  <router-view v-if="showRules"></router-view>
</template>
<script>
import TheHeader from "./components/TheHeader.vue";
import GameItems from "./components/GameItems.vue";
import GameResult from "./components/GameResult.vue";

export default {
  components: {
    TheHeader,
    GameResult,
    GameItems,
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
    playerSelected() {
      return this.$store.getters.playerSelected;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Zen+Dots&display=swap");
#app {
  font-family: "Zen Dots", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: hsl(214, 47%, 23%), hsl(237, 49%, 15%);
}
section {
  display: flex;
  text-align: center;
  max-width: 60rem;
  margin: 2rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 10px;
}
button {
  font-family: "Zen Dots", cursive;
}
</style>
