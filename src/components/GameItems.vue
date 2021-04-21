<template>
  <section>
    <div>
      <button @click="playerSelect('Paper')">Paper</button>
      <button @click="playerSelect('Scissors')">Scissors</button>
      <button @click="playerSelect('Rock')">Rock</button>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    pcSelect() {
      var a = ["Paper", "Scissors", "Rock"];
      var payload = a[Math.floor(a.length * Math.random())];
      this.$store.dispatch("pcSelect", payload);
    },
    playerSelect(payload) {
      this.$store.dispatch("playerSelect", payload);
      this.pcSelect();
    },
  },
  computed: {},
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
