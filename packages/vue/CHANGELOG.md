# use-rainbowkit-vue

## 0.4.2

### Patch Changes

- 5a0d8da:
  1. Add compass wallet
  2. Add kraken wallet
  3. Add kaikas wallet
  4. Upgrade wagmi vue version
  5. Upgrade use-rainbowkit-vue version for locale and siwe plugins.
  6. Remove metamask debug messages.
  7. Export create wallet utility methods

## 0.4.1

### Patch Changes

- f92e0a6: Fixed metamask bugs, display balance bugs and siwe fetch redirect bugs

## 0.4.0

### Minor Changes

- 14943c8:
  1. Fixed 'current chain id' bugs. Happened when current chain id get from wagmi does not supported in the chain list that configured by user when not connected. If not supported, by default would switch to initial chain id and then the first chain from the chain list if initial chain not configured.
  2. Added binance wallet
  3. Fixed 'ChainDoesNotSupportContract' error.
  4. Revert to Ethereum balance if currency address have error or not found in current chain.
  5. Fixed authentication pop up even authentication enabled is false.

## 0.3.0

### Minor Changes

- d26481f:
  1. Update wagmi vue version
  2. Added support for coinbase preference
  3. Rename 'ignoreChainOnConnect' to 'enableChainOnConnect' option
  4. Fixed right click direct close modal bugs

## 0.2.0

### Minor Changes

## 0.2.0

### Minor Changes

- a07a9c3: Update wagmi vue version, readme, chain issues and teleport target issues

## 0.1.0

### Minor Changes

- e12506f: Fixed auth issue and set messages to optional
