<template>
  <div class="bg-blue-900 h-full p-4">
    <div>
      <h3 class="text-white text-xl font-bold mb-3">Fish type</h3>
      <div class="grid grid-cols-2 gap-2">
        <img
          v-for="fish in fishTypes"
          :key="fish"
          :src="getImage(fish)"
          :class="{
            active: isActiveFish(fish),
          }"
          :alt="fish"
          @click="updateActiveFish(fish)"
          class="cursor-pointer"
        />
      </div>
      <div class="mt-8 mb-3">
        <label for="name" class="text-white font-bold">Name</label>
        <input type="text" id="name" v-model="form.name" />
      </div>
      <button
        class="w-full h-14 rounded-md bg-red-600 text-white"
        @click="submit"
      >
        Add Fish
      </button>
    </div>
  </div>
</template>

<script setup>
import { reactive, defineEmits } from "vue";

/**
 * @type {String[]}
 */
const fishTypes = reactive([
  "tuna",
  "guppie",
  "golden-purple-fish",
  "goldfish",
  "tropical-fish",
]);

const form = reactive({
  type: "",
  name: "",
});

const emit = defineEmits(["submit"]);

function updateActiveFish(type) {
  form.type = type;
}

function submit() {
  if (form.type && form.name) {
    emit("submit", form);
    form.name = "";
    form.type = "";
  }
}

function isActiveFish(type) {
  return form.type === type;
}

/**
 * @param {String} fishType
 * @returns {String}
 */
function getImage(fishType) {
  return `/${fishType}.png`;
}
</script>


<style scoped>
.active {
  filter: drop-shadow(rgb(54, 149, 186) 0 0 30px);
}

#name {
  @apply h-10 w-full rounded-md px-3;
}
</style>