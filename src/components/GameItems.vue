<template>
  <div>
    <button @click="playerSelect('paper')">Paper</button>
    <button @click="playerSelect('scissors')">Scissors</button>
    <button @click="playerSelect('rock')">Rock</button>
    <p>{{ this.$store.state.playerSelected }}</p>
  </div>
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
