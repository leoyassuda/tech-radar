<script setup lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import { storeToRefs, mapActions } from 'pinia';
import { userStore } from '../store/modules/user';

const main = userStore();

const { info } = storeToRefs(main);

const { fetchInfo, setInfo } = mapActions(userStore, ["fetchInfo", "setInfo"])

onMounted(() => main.fetchInfo())

</script>

<template>
  <h1>About Page</h1>
  <owner-card msg="asd123"></owner-card>

  <div>
    <div
      class="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-500 to-indigo-800"
    >
      <div class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
        <img
          class="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto"
          :src="info?.avatar_url"
          alt="product designer"
        />
        <h1 class="text-lg text-gray-700">{{info?.name}}</h1>
        <h3 class="text-sm text-gray-400">{{info?.login}}</h3>
        <p
          class="text-xs text-gray-400 my-4"
        >BIO: {{info?.bio}}</p>
        <a
          class="bg-indigo-600 px-8 py-2 mt-12 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide"
          :href="info?.html_url"
          target="_blank"
        >Github Profile</a>
      </div>
    </div>
  </div>
</template>

