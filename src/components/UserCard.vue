<template>
    
    <div>
        <span>{{msg}}</span>
    </div>
    <h2>ASDSADADA</h2>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import User from "../model/User";

export default defineComponent({
  name: "owner-card",
  props:{
      msg: String,
  },
  methods: {},
});
</script>