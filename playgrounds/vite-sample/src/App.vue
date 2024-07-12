<script lang="ts" setup>
import { useAuth } from 'vue-auth3';
import Content from './components/Content.vue';
import { RainbowKitProvider } from "use-rainbowkit-vue";
import { ref } from 'vue';
const auth = useAuth();
const alreadyLoggedIn = ref(false);
const loading = ref(true);
auth.load().then(()=>{
  loading.value = false;
  alreadyLoggedIn.value = auth.remember(false) ?? false;
})
</script>

<template>
  <div id="rainbowkit-modal"></div>
  <RainbowKitProvider :authentication-status="!loading ? 'loading' : alreadyLoggedIn? 'authenticated' : 'unauthenticated' ">
    <Content />
  </RainbowKitProvider>
</template>

