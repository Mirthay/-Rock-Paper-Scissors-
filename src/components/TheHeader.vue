<template>
  <section>
    <h2>{{ title }} The Couches</h2>
    <div>
      <button>button 1</button>
      <button>button 2</button>
    </div>
    <slot></slot>
  </section>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style scoped>
section {
  display: flex;
  max-width: 60rem;
  margin: 2rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 10px;
}

h2 {
  flex: 1;
  text-align: left;
  margin-right: 100px;
}
div {
  flex: 1;
  text-align: center;
}
button {
  margin: 5px;
  margin-top: 25px;
}
</style>
