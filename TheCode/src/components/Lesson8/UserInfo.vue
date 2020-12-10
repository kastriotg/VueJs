<template>
  <section>
    <BaseCard>
      <template #header>
      <h2>{{ fullName }}</h2>
      <BaseBadge :type="role" :caption="role.toUpperCase()" />
      </template>
      <template v-slot:default>
      <p>{{ infoText }}</p>
      </template>
    </BaseCard>
  </section>
</template>

<script>
//Importing components
import BaseBadge from './BaseBadge'
import BaseCard from './BaseCard'
export default {
  //Exporting BaseBadge to use on template
  components: {
      BaseBadge,
      BaseCard
  },
  // Getting properties from lesson 8
  props: ['fullName', 'infoText', 'role'],
};
</script>

<style scoped>
p{
    text-align: center;
    padding: 0;
}
</style>