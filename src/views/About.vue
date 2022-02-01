<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs, mapActions } from 'pinia';
import { userStore } from '../store/modules/user';
import UserCard from '@/components/UserCard.vue';
import ReposChartDunutCard from '@/components/ReposChartDunutCard.vue'
import RepoInfoCard from '@/components/RepoInfoCard.vue'
import Statistic from '@/components/Statistic.vue'

let username = '';

const main = userStore();

const { info } = storeToRefs(main);

const { fetchInfo, setInfo } = mapActions(userStore, ["fetchInfo", "setInfo"])

onMounted(() => main.fetchInfo(username))

</script>

<template>
  <h1>About Page</h1>
  <div class="flex flex-col divide-y-2 py-4 content-center">
    <div class="basis">
      <input
        class="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
        placeholder="username"
        v-model="username"
      />
      <button
        @click="fetchInfo(username)"
        class="px-8 rounded-r-lg bg-yellow-400 text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r"
      >Load</button>
    </div>
    <div class="basis">
      <UserCard msg="asd123" :info="info" />
    </div>
    <div class="inline basis content-center">
      <ReposChartDunutCard  />
    </div>
    <div class="inline basis content-center">
      <RepoInfoCard :repos="[]" />
    </div>
    <div class="inline basis content-center">
      <Statistic />
    </div>
  </div>
</template>

