<template>
  <section>
    <p>YOU PICKED: {{ playerSelected }}</p>

    <div>
      <h2>{{ gameResult }}</h2>
      <button @click="playerSelect(null)">Play again</button>
    </div>
    <p>THE HOUSE PICKED: {{ pcSelected }}</p>
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
  margin: 2vw;
  margin-bottom: 1vw;
}
p {
  margin: 5vw;
}
button {
  margin: 2vw;
  margin-top: 1vw;
}
</style>
