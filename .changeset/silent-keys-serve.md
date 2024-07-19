---
"use-rainbowkit-vue-i18n-locale-provider": patch
"use-rainbowkit-vue-siwe-auth-provider": patch
"use-rainbowkit-vue": patch
---

1. Fixed multiple warning when logout.
2. Fixed siwe plugin issues
3. Added 'NonceData' options in siwe plugin
4. Fixed 'switch chain' issues. Before logging in, users can switch between different chains. Once they connect their MetaMask wallet, ensures that the chosen chain is maintained even if initial chain is set or prompts the user to switch to the correct chain if necessary.
