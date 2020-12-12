<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["mode"],
};
</script>

<style scoped>
button {
  padding: 0.75rem 1.5rem;
  margin: 0.5rem 1rem;
  font-family: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
  border-radius: 10px;
  outline: none;
  width: 10rem;
}

button:hover,
button:active {
  background-color: #270041;
  border-color: #270041;
}

.flat {
  background-color: #edd2ff;
  color: #3a0061;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #3a0061;
  color: #fff;
}
</style>
