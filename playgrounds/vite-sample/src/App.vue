<script lang="ts" setup>
import { useAuth } from 'vue-auth3';
import Content from './components/Content.vue';
import { RainbowKitProvider } from "use-rainbowkit-vue";
const auth = useAuth();
</script>

<template>
  <div id="rainbowkit-modal"></div>
  <RainbowKitProvider :authentication-status="!auth.ready() ? 'loading' : auth.check()? 'authenticated' : 'unauthenticated' ">
    <Content />
  </RainbowKitProvider>
</template>

