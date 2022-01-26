<script setup lang="ts">
import { storeToRefs, mapActions } from 'pinia';
import { userStore } from '../store/user';

const main = userStore();

const { user } = storeToRefs(main);

const { loadInfo } = mapActions(userStore, ["loadInfo"])

</script>

<template>
  <h1>About Page</h1>
  <owner-card msg="asd123"></owner-card>
  <h3>aaaaaaaaaaaaaaaaaaaaaaaaa</h3>

  <div>
        <pre>{{user}}</pre>
  </div>
  <button @click="loadInfo">LOAD</button>
</template>

