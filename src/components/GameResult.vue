<template>
  <section>
    <div class="left">
      <h4>
        YOU:<br /><br />
        {{ playerSelected }}
      </h4>
      <img
        v-if="playerSelected === 'Scissors'"
        src="../assets/icon-scissors.svg"
      />
      <img
        v-else-if="playerSelected === 'Rock'"
        src="../assets/icon-rock.svg"
      />
      <img v-else src="../assets/icon-paper.svg" />
    </div>
    <div class="mid">
      <h2>{{ gameResult }}</h2>
      <button @click="playerSelect(null)">Play again</button>
    </div>
    <div class="right">
      <h4>
        THE HOUSE:<br /><br />
        {{ pcSelected }}
      </h4>
      <img v-if="pcSelected === 'Scissors'" src="../assets/icon-scissors.svg" />
      <img v-else-if="pcSelected === 'Rock'" src="../assets/icon-rock.svg" />
      <img v-else src="../assets/icon-paper.svg" />
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
section {
  display: grid;
}
h2 {
  margin-bottom: 1vw;
  padding-left: 1vw;
  padding-bottom: 20px;
}

div .left {
  grid-column: 1;
  width: 30%;
}
div .right {
  grid-column: 3;
  width: 30%;
}
div .mid {
  grid-column: 2;
  width: 40%;
}
img {
  grid-column: 3;
  margin: 0px;
  border: rgb(103, 103, 192) 15px solid;
  border-radius: 50%;
  padding: 15px;
  background: ivory;
  box-shadow: 5px 7px black;
}
</style>
