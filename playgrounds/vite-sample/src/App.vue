<script lang="ts" setup>
import Content from './components/Content.vue';
import { RainbowKitProvider } from "use-rainbowkit-vue";
</script>

<template>
  <div id="rainbowkit-modal"></div>
  <RainbowKitProvider>
    <Content />
  </RainbowKitProvider>
</template>

