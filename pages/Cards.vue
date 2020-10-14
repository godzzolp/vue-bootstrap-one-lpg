<template>
  <div>
    <p>
      <a href="https://bootstrap-vue.org/docs/components/card" target="_blank"
        >Reference 🤓</a
      >
    </p>
    <b-card-group deck>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </b-card-group>
  </div>
</template>

<script>
import Card from "../components/Card";

export default {
  components: {
    Card,
  },
};
</script>
