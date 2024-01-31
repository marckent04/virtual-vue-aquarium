<script setup>
import { computed, onBeforeMount, ref } from "vue";
import { Move } from "./move-manager";

const { fish } = defineProps(["fish"]);

const positionStyle = computed(() => ({
  top: `${moveManager.value.y}%`,
  left: `${moveManager.value.x}%`,
}));

const moveManager = ref(new Move());

let moveKey;
let healthKey;

onBeforeMount(() => {
  moveKey = setInterval(() => {
    moveManager.value.move();
  }, fish.moveDuration);

  healthKey = setInterval(() => {
    fish.health -= 10;

    if (fish.health === 0) {
      clearInterval(moveKey);
      clearInterval(healthKey);
    }
  }, 1000);
});

function getImage(fishType) {
  if (fish.health > 0) {
    return `/${fishType}.png`;
  }
  return "/dead.png";
}
</script>

<template>
  <div class="fish" :style="positionStyle">
    <div @click="fish.feed" v-show="fish.needFood()" class="feed-box">
      Feed me !
    </div>
    <img
      :src="getImage(fish.type)"
      :alt="fish.name"
      class="w-full h-16"
      :style="{ transform: 'scaleX(' + moveManager.xDirection + ')' }"
    />
    <div class="w-full opacity-45 bg-black p-1 rounded-sm">
      <p class="text-white text-sm" v-text="fish.name"></p>
      <div
        class="bg-red-500 h-1 mt-1"
        v-if="fish.health > 0"
        :style="{ width: fish.healthPercentage + '%' }"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.feed-box {
  @apply bg-white w-24 top-0 rounded-md text-black shadow-sm text-center p-1 mb-2 absolute cursor-pointer;
  top: -50%;
}

.fish {
  @apply absolute w-28 transition-all ease-linear;
  transition-duration: v-bind(fish.moveDuration + "ms");
}
</style>
