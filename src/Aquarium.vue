<script setup>
import Fish from "./Fish.vue";

defineProps(["fishes"]);
</script>

<template>
  <div id="aquarium">
    <fish v-for="fish in fishes" :key="fish.name" :fish="fish" />
  </div>
</template>

<style scoped>
#aquarium {
  @apply h-full bg-cover bg-no-repeat relative;
  background: url("/bg.jpg");
}
</style>
