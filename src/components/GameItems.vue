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
      const a = ["Paper", "Scissors", "Rock"];
      const payload = a[Math.floor(a.length * Math.random())];
      this.$store.dispatch("pcSelect", payload);
    },
    playerSelect(payload) {
      this.$store.dispatch("playerSelect", payload);
      this.pcSelect();
      this.$store.dispatch("whoWin");
    },
  },
  computed: {},
};
</script>

<style scoped>
h2 {
  display: block;
}
section {
  background: khaki;
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
