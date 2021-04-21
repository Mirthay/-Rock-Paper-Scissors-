<template>
  <section>
    <p v-html="rules"></p>
  </section>
</template>

<script>
export default {
  computed: {
    rules() {
      return this.$store.state.rules;
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
  text-align: center;
}
</style>
