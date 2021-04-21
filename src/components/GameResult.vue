<template>
  <section>
    <p>Player Selectet: {{ playerSelected }}</p>
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
    },
  },
  computed: {
    playerSelected() {
      return this.$store.getters.playerSelected;
    },
  },
};
</script>
