import { Client } from 'viem';
import { TransactionVoidFunc, type NewTransaction, type Transaction, type TransactionData } from '../types';
export declare const transactionStorageKey = "rk-transactions";
export declare function getTransactions(): TransactionData;
export declare function validate(transaction: Transaction | NewTransaction): Array<string>;
export declare function createTransactionStore({ provider }: {
    provider: Client | undefined;
}): {
    subscribe: (fn: TransactionVoidFunc) => TransactionVoidFunc;
    addTransaction: (address: string, chainId: number, transaction: NewTransaction) => void;
    clearTransactions: (account: string, chainId: number) => void;
    getTransactionsByAddressAndChainId: (address: string, chainId: number) => Array<Transaction>;
    createNewPublicClientProvider: (newProvider: Client) => void;
    waitForPendingTransactions: (address: string, chainId: number) => Promise<void>;
};
//# sourceMappingURL=transaction.d.ts.map