<script lang="ts" setup>
import { useAuth } from 'vue-auth3';
import Content from './components/Content.vue';
import { AuthenticationStatus, RainbowKitProvider } from "use-rainbowkit-vue";
import { computed } from 'vue';
const auth = useAuth();
const computeAuthStatus =computed<AuthenticationStatus>(()=>{
  if(!auth.ready()) return 'loading';
  if(!auth.check()) return 'unauthenticated'
  return 'authenticated';
});
console.log(auth.check());
</script>

<template>
  <div id="rainbowkit-modal"></div>
  <RainbowKitProvider :authentication-status="computeAuthStatus">
    <Content />
  </RainbowKitProvider>
</template>

