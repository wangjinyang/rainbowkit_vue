# Rainbowkit Vue Plugin

A vue plugin for rainbowkit. (Not official)
Based on [@wagmi/vue](https://github.com/wevm/wagmi)

## Installation

Install rainbowkit-vue and its [wagmi vue](https://github.com/wevm/wagmi), [viem](https://viem.sh) peer dependencies.

```bash
npm install @wagmi/vue viem @tanstack/vue-query use-rainbowkit-vue 
```

## Setup

If found error such as buffer not defined or any node module not defined, install or setup polyfill.

```ts
import { createApp } from 'vue'
import { 
    RainbowKitVuePlugin,
    mainnet,
    zkSync,
    scroll,
    polygonZkEvm,
    immutableZkEvm,
    avalanche
 } from 'use-rainbowkit-vue'
import 'use-rainbowkit-vue/style.css';

createApp(App).use(RainbowKitVuePlugin,{ 
    appName: 'RainbowKit demo', 
    projectId: "YOUR_PROJECT_ID",
    chains: [
        mainnet,
        zkSync,
        scroll,
        polygonZkEvm,
        immutableZkEvm,
        avalanche
    ],
    ///Extra options
    connectModalTeleportTarget: '#rainbowkit-modal', /// Make sure this element exists
    chainModalTeleportTarget: '#rainbowkit-modal', /// Make sure this element exists
    accountModalTeleportTarget: "#rainbowkit-modal", /// Make sure this element exists
    currencyAddress: '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce',           
    connectModalIntro: (/*{ compactModalEnabled, getWallet }*/)=>{
        return ()=>{
            return h('div','You can start your journey here by using web3 wallet.');
        }
    },
})
```

## Use of Rainbowkit Components with `<script setup>`

```vue
<script lang="ts" setup>
import { RainbowKitProvider, ConnectButton } from "use-rainbowkit-vue";
</script>
<template>
    <div class="content">
        <RainbowKitProvider>
            <ConnectButton />
        </RainbowKitProvider>
    </div>
</template>
```

## Credits

- [wagmi.sh](https://wagmi.sh/)
- [RainbowKit](https://www.rainbowkit.com/)

## License

Licensed under the [MIT](https://opensource.org/license/MIT) License.
