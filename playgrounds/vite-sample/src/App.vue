<script lang="ts" setup>
import { useAuth } from 'vue-auth3';
import Content from './components/Content.vue';
import { AuthenticationStatus, RainbowKitProvider } from "use-rainbowkit-vue";
import { ref } from 'vue';
const auth = useAuth();
const status = ref<AuthenticationStatus>('loading');
auth.load().then(()=>{
  if(!auth.check()) {
    status.value = 'unauthenticated';
    return;
  }
  status.value = 'authenticated';
})
</script>

<template>
  <div id="rainbowkit-modal"></div>
  <RainbowKitProvider :authentication-status="status">
    <Content />
  </RainbowKitProvider>
</template>

