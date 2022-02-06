<script setup lang="ts">
import { onMounted } from 'vue'
import { ref } from "@vue/runtime-core";
import { storeToRefs, mapActions } from 'pinia';
import { userStore } from '@/store/modules/user';
import { userReposStore } from '@/store/modules/userRepo';
import UserCard from '@/components/UserCard.vue';
import ReposChartDunutCard from '@/components/ReposChartDunutCard.vue'
import RepoInfoCard from '@/components/TechInfoCard.vue'
import Statistic from '@/components/Statistic.vue'
import { Repo } from '@/model/Repo';

let username = '';

const main = userStore();
const mainRepos = userReposStore();

const { userInfo } = storeToRefs(main);
const { reposInfo } = storeToRefs(mainRepos);

const { fetchInfo, setInfo } = mapActions(userStore, ["fetchInfo", "setInfo"]);
const { fetchReposInfo, setReposInfo } = mapActions(userReposStore, ["fetchReposInfo", "setReposInfo"]);

console.log('repos:', reposInfo.value)

// onMounted(() =>{
//    main.fetchInfo(username);
//    mainRepos.fetchReposInfo(username);
// })

function checkRepos(repos: Repo[] | null): boolean {
  return repos !== null && repos.length > 0
}
</script>

<template>
  <h1>About Page</h1>
  <div class="flex flex-col divide-y-2 py-4 content-center">
    <div class="py-4">
      <input
        class="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
        placeholder="username"
        v-model="username"
      />
      <button
        @click="setReposInfo([]); fetchInfo(username); fetchReposInfo(username)"
        class="px-8 rounded-r-lg bg-yellow-400 text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r"
      >Load</button>
    </div>
    <div>
      <UserCard :info="userInfo" />
    </div>
    <div class="py-4">
      <pre>
        List Repos - {{ reposInfo?.length }} 
      </pre>
    </div>
    <div v-if="checkRepos(reposInfo)" class="inline content-center">
      <ReposChartDunutCard :repos="reposInfo" />
    </div>
    <div v-if="checkRepos(reposInfo)">
      <RepoInfoCard :repos="reposInfo" />
    </div>
    <div class="inline basis content-center">
      <Statistic />
    </div>
  </div>
</template>

