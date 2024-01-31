<template>
  <div class="h-screen w-screen flex">
    <div class="w-1/5">
      <fish-form @submit="addFishToAquarium" />
    </div>
    <div class="flex-grow">
      <aquarium :fishes="fishes" />
    </div>
  </div>
</template>


<script setup>
import Aquarium from "./Aquarium.vue";
import FishForm from "./FishForm.vue";
import { Fish } from "./fish";
import { ref } from "vue";

const fishes = ref([]);

/**
 * @param {Fish} data
 */
function addFishToAquarium(data) {
  const fish = new Fish(data.name, data.type);
  fishes.value.push(fish);
}
</script>