<template>
  <section>
    <p v-html="rules"></p>
    <img
      src="../game-desing/design/original/mobile-rules-modal.jpg"
      alt="rules"
    />
  </section>
</template>

<script>
export default {
  computed: {
    rules() {
      return this.$store.getters.rules;
    },
  },
};
</script>

<style scoped>
section {
  max-width: 60rem;
  margin: 2rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 10px;
}
p {
  text-align: left;
}
img {
  height: 700px;
  margin-top: -15px;
}
</style>
