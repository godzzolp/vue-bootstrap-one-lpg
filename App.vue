<template>
  <div>
    <Navbar></Navbar>

    <router-view />
  </div>
</template>

<style>
body {
  padding: 1rem;
}

.menu-item {
  padding: 1rem;
  margin: 1rem;
}
</style>

<script>
import Navbar from "./components/Navbar";

export default {
  components: {
    Navbar,
  },
};
</script>
