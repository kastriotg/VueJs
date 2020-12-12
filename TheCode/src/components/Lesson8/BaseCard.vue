<template>
  <div>
    <!-- <header v-if="$slots.header"> -->
    <header>
      <slot name="header">
        <!-- The default text will be shown if we dont provide anything-->
        <h2>The Default</h2>
      </slot>
    </header>
    <div id="description">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-evenly;
}
#description {
  margin: 0 4rem;
  display: flex;
  justify-content: center;
  font-size: 1.4rem;
}
</style>
