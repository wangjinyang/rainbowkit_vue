import { type NewTransaction, type Transaction, type Context, type RainbowKitPluginOptions, type TransactionStoreContext } from '../types';
import { type Ref } from 'vue';
export declare function configureTransactionStore(): void;
export declare function createShowRecentTransactionContext(option: RainbowKitPluginOptions): Ref<boolean>;
export declare function createTransactionStoreContext(): Context<TransactionStoreContext>;
export declare function useRecentTransactions(): Ref<Array<Transaction>>;
export declare function useTransactionStoreContext(): Context<TransactionStoreContext>;
export declare function useShowRecentTransactionContext(): Context<boolean>;
export declare function useClearRecentTransactions(): () => void;
export declare function useAddRecentTransasction(transaction: NewTransaction): () => void;
//# sourceMappingURL=transaction.d.ts.map