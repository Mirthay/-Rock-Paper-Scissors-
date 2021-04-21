<template>
  <section>
    <h4>
      YOU:<br /><br />
      {{ playerSelected }}
    </h4>
    <img
      v-if="playerSelected === 'Scissors'"
      src="../assets/icon-scissors.svg"
    />
    <img v-else-if="playerSelected === 'Rock'" src="../assets/icon-rock.svg" />
    <img v-else src="../assets/icon-paper.svg" />

    <div>
      <h2>{{ gameResult }}</h2>
      <button @click="playerSelect(null)">Play again</button>
    </div>
    <h4>
      THE HOUSE:<br /><br />
      {{ pcSelected }}
    </h4>
    <img v-if="pcSelected === 'Scissors'" src="../assets/icon-scissors.svg" />
    <img v-else-if="pcSelected === 'Rock'" src="../assets/icon-rock.svg" />
    <img v-else src="../assets/icon-paper.svg" />
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
  margin-bottom: 1vw;
  padding-left: 1vw;
  padding-bottom: 20px;
}

h4 {
  width: 30%;
}
div {
  width: 40%;
}
</style>
