<template>
  <div>
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
