<template>
  <section>
    <div>
      <img
        class="btn1"
        src="../assets/icon-paper.svg"
        @click="playerSelect('Paper')"
      />

      <img
        class="btn2"
        src="../assets/icon-scissors.svg"
        @click="playerSelect('Scissors')"
      />
      <img
        class="btn3"
        src="../assets/icon-rock.svg"
        @click="playerSelect('Rock')"
      />
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
  background: rgb(167, 140, 240);
  text-align: center;
}
div {
  flex: 1;
  width: max-content;
  justify-content: center;
}
img {
  margin: 5vw;
  border: rgb(103, 103, 192) 15px solid;
  border-radius: 50%;
  padding: 20px;
  background: ivory;
  box-shadow: 5px 7px black;
}
img:hover {
  cursor: pointer;
}
.btn2 {
  border-color: rgba(255, 196, 0, 0.863);
}
.btn3 {
  border-color: rgba(243, 75, 52, 0.829);
}
</style>
