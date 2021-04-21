<template>
  <section>
    <h2>{{ title }}</h2>
    <div>
      <h3>SCORE</h3>
      <p>{{ score }}</p>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    title() {
      return this.$store.getters.title;
    },
    score() {
      return this.$store.getters.score;
    },
  },
};
</script>

<style scoped>
section {
  display: flex;
  text-align: center;
  max-width: 60rem;
  margin: 2rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 10px;
}
h2 {
  flex: 1;
  text-align: left;
}
p {
  text-align: center;
}
</style>
