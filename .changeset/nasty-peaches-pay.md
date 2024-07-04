---
"use-rainbowkit-vue": minor
---

1. Fixed 'current chain id' bugs. Happened when current chain id get from wagmi does not supported in the chain list that configured by user when not connected. If not supported, by default would switch to initial chain id and then the first chain from the chain list if initial chain not configured.
2. Added binance wallet
3. Fixed 'ChainDoesNotSupportContract' error.
4. Revert to Ethereum balance if currency address have error or not found in current chain.
5. Fixed authentication pop up even authentication enabled is false.
