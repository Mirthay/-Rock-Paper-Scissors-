<template>
  <section>
    <div>
      <img src="../assets/icon-paper.svg" @click="playerSelect('Paper')" />

      <img
        src="../assets/icon-scissors.svg"
        @click="playerSelect('Scissors')"
      />
      <img src="../assets/icon-rock.svg" @click="playerSelect('Rock')" />
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
img {
  margin: 5vw;
}
</style>
