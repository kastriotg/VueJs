<template>
  <section>
    <BaseCard>
      <template #header>
        <h2>Available Badges</h2>
      </template>
      <template #default>
        <ul>
          <li>
            <BaseBadge type="admin" caption="ADMIN" />
          </li>
          <li>
            <BaseBadge type="author" caption="AUTHOR" />
          </li>
        </ul>
      </template>
    </BaseCard>
  </section>
</template>

<script>
//Import Component
import BaseBadge from "./BaseBadge";
import BaseCard from "./BaseCard";
export default {
  //Export component to use at Template
  components: {
    BaseBadge,
    BaseCard,
  },
};
</script>

<style scoped>
section h2 {
  margin: 0.5rem 0;
  color: #3a3a3a;
}
ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
}

li {
  margin-right: 1rem;
}
@media (max-width: 400px) {
  ul{
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
