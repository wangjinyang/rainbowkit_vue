import type { ConnectionStatus } from "@/types";
import { useAuthenticationConfigContext } from "@/composables/authentication";
import { computed, ComputedRef, onScopeDispose, ref } from "vue";
import { useAccount, useConfig, useDisconnect } from "@wagmi/vue";
import { GetConnectionsReturnType, getConnections, watchConnections } from "@wagmi/vue/actions";

export function useConnectionStatus(): ComputedRef<ConnectionStatus> {
    const { status } = useAuthenticationConfigContext();
    const { isConnected, address, status: connection } = useAccount();
    return computed(() => {

        if (!address.value) {
            return 'disconnected';
        }

        if (connection.value === 'connecting' || connection.value === 'reconnecting') {
            return 'connecting';
        }

        if (!isConnected?.value) {
            return 'disconnected';
        }

        if (!status?.value) {
            return 'connected';
        }

        if (
            status.value === 'loading' ||
            status.value === 'unauthenticated'
        ) {
            return status.value;
        }

        return 'connected';
    });

}

export function useDisconnectAll() {
    const config = useConfig();
    const { disconnect } = useDisconnect()
    const connections = ref<GetConnectionsReturnType>(getConnections(config));
    const unwatch = watchConnections(config, {
        onChange(currentConnections, _) {
            connections.value = currentConnections;
        }
    });
    
    onScopeDispose(() => {
        unwatch();
    })

    function disconnectAll(){
        connections.value?.map((connection) => {
            if (typeof connection.connector.disconnect === 'function') {
                return disconnect({
                    connector: connection.connector,
                }, {
                    onError(error, variables, context) {
                        console.error(error);
                    },
                });
            }
        });
    }

    return { disconnectAll }
}