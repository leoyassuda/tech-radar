<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs, mapActions } from 'pinia';
import { userStore } from '../store/modules/user';
import UserCard from '../components/UserCard.vue';

const main = userStore();

const { info } = storeToRefs(main);

const { fetchInfo, setInfo } = mapActions(userStore, ["fetchInfo", "setInfo"])

onMounted(() => main.fetchInfo())

</script>

<template>
  <h1>About Page</h1>
  <UserCard msg="asd123" :info="info"></UserCard>
</template>

