<template>
  <section>
    <h2>You {{ winOrLose }}</h2>
    <p>Player Selected: {{ playerSelected }}</p>
    <p>Computer Selected: {{ pcSelected }}</p>
    <div>
      <button @click="playerSelect(null)">Again</button>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    playerSelect(payload) {
      this.$store.dispatch("playerSelect", payload);
    },
  },
  computed: {
    playerSelected() {
      return this.$store.getters.playerSelected;
    },
    pcSelected() {
      return this.$store.getters.pcSelected;
    },
    winOrLose() {
      return this.$store.getters.winner === "player" ? "Win" : "Lose";
    },
  },
};
</script>

<style></style>
