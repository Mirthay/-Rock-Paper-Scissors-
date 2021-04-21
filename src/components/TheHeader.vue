<template>
  <section>
    <h2>{{ title }}</h2>
    <div></div>
    <slot></slot>
  </section>
</template>

<script>
export default {
  computed: {
    title() {
      return this.$store.state.title;
    },
  },
};
</script>

<style scoped>
section {
  text-align: center;
  max-width: 60rem;
  margin: 2rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 10px;
}
</style>
