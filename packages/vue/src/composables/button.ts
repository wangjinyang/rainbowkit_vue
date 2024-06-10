import { WalletButtonContextKey, type Context, type WalletButtonContext } from '@/types'
import { inject, ref, toRefs,reactive, ToRefs } from 'vue'

export function createWalletButtonContext(): Context<WalletButtonContext>{
    const context = ref<WalletButtonContext>({ connector: null });
    return context;
}

export function useWalletButtonContext(): ToRefs<WalletButtonContext> {
    const context = inject(WalletButtonContextKey);
    if (!context) throw Error(`Could not find injected '${String(WalletButtonContextKey)}' instance.`)
    return toRefs(reactive(context.value));
}