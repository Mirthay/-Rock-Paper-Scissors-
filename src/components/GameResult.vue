<template>
  <section>
    <h2>{{ gameResult }}</h2>
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
      this.$store.dispatch("pcSelect", payload);
      this.$store.dispatch("winOrLose", payload);
    },
  },
  computed: {
    playerSelected() {
      return this.$store.getters.playerSelected;
    },
    pcSelected() {
      return this.$store.getters.pcSelected;
    },
    gameResult() {
      return this.$store.getters.gameResult;
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 5vw;
}
p {
  margin: 5vw;
}
button {
  margin: 7vw;
}
</style>
