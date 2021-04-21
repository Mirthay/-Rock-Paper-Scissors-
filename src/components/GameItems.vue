<template>
  <section>
    <div>
      <button @click="playerSelect('paper')">Paper</button>
      <button @click="playerSelect('scissors')">Scissors</button>
      <button @click="playerSelect('rock')">Rock</button>
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
};
</script>

<style scoped>
section {
  background: violet;
  flex: 1;
  text-align: center;
}
div {
  flex: 1;
  width: max-content;
  justify-content: center;
}
button {
  margin: 5vw;
}
</style>
